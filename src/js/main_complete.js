'use strict';

const inputName = document.querySelector('.js-name');
const inputJob = document.querySelector('.js-job');
const inputImage = document.querySelector('.js-photo');
const inputEmail = document.querySelector('.js-email');
const inputNumber = document.querySelector('.js-number');
const inputLinkedin = document.querySelector('.js-linkedin');
const inputGit = document.querySelector('.js-git');
const cardPreviewName = document.querySelector('.js-preview-NameCard');
const cardPreviewJob = document.querySelector('.js-preview-JobCard');
const mensajeError = document.querySelector('.js-errMsg');
const mensajeImagen = document.querySelector('.js-messageImg');



//código img
const fr = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');

let imgtoLoad;


console.log(` ${inputNumber.value} `);


function validarFormulario() {

  if ((!savedData || savedData.name == '') && inputName.value == "" ||
    (!savedData || savedData.job == '') && inputJob.value == "" ||
    imgtoLoad == null && (!savedImage || savedImage == null) ||
    (!savedData || savedData.email == '') && inputEmail.value == "" ||
    (!savedData || savedData.phone == '') && inputNumber.value == "") {

    console.log("datos actuales")
    mensajeError.innerHTML = 'Por favor, complete todos los campos obligatorios.';

  } else {

    mensajeError.innerHTML = ''; // Limpiar el mensaje de error

    fetch('https://dev.adalab.es/api/card/', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-type': 'application/json' }
    }).then((response) => response.json())
      .then(data => {

        if (data.success == false) {
          linkSpace.innerHTML = `error ${data.error}`;
        } else {
          console.log('Respuesta del servidor:', data);
          linkSpace.innerHTML = `<a href="${data.cardURL}"target="_blank">${data.cardURL}</a>`;
          console.log(data.cardURL);

        }
      })

    linkButton.classList.add('play');
    profileCreated.classList.remove("hiden")

    leyend.forEach(section => {

      section.removeEventListener('click', handleCollapsables);

    })


  }

}

/**

 * @param {evento} e 
 */
function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);

}
function writeImage() {

  const imageData = fr.result;

  if (imageData.length <= 39800) {

    imgtoLoad = imageData;

    profileImage.style.backgroundImage = `url(${imageData})`;
    profilePreview.style.backgroundImage = `url(${imageData})`;

    localStorage.setItem('savedImage', imgtoLoad);



  } else {

    compressImage(imageData);


  }

}
function compressImage(imageData) {

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();

  img.onload = function () {
    // Establecer el tamaño del canvas para que coincida con el de la imagen
    canvas.width = img.width;
    canvas.height = img.height;

    // Dibujar la imagen en el canvas
    ctx.drawImage(img, 0, 0);

    // Convertir el canvas a una cadena base64 con compresión


    const compressedData = canvas.toDataURL('image/jpeg', 0.2); // 0.5 representa el nivel de compresión


    if (compressedData.length <= 39800) {
      imgtoLoad = compressedData;

      profileImage.style.backgroundImage = `url(${compressedData})`;
      profilePreview.style.backgroundImage = `url(${compressedData})`;
      localStorage.setItem('savedImage', imgtoLoad);
      console.log("Imagen guardada con éxito.");
    } else {
      mensajeImagen.innerHTML = "La imagen comprimida es demasiado grande."
      console.log("La imagen comprimida es demasiado grande.");
    }
  };

  img.src = imageData;
}

fileField.addEventListener('change', getImage);

//código Valentina

function liveEvent() {

  cardPreviewName.innerHTML = inputName.value;
  cardPreviewJob.innerHTML = inputJob.value;
}

inputName.addEventListener('input', liveEvent);
inputJob.addEventListener('input', liveEvent);

function updateLinkContent() {
  const iconEmail = document.querySelector('.js-linkEmail');
  iconEmail.href = 'mailto:' + inputEmail.value;
  const iconPhone = document.querySelector('.js-linkPhone');
  iconPhone.href = 'tel:' + inputNumber.value;
  const iconLiknedin = document.querySelector('.js-linkLinkedIn');
  iconLiknedin.href = inputLinkedin.value;
  const iconGit = document.querySelector('.js-linkGitHub');
  iconGit.href = inputGit.value;
}

inputEmail.addEventListener('input', updateLinkContent);
inputNumber.addEventListener('input', updateLinkContent);
inputLinkedin.addEventListener('input', updateLinkContent);
inputGit.addEventListener('input', updateLinkContent);

//