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



//código img
const fr = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');

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
  compressImage(imageData);
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
    const compressedData = canvas.toDataURL('image/jpeg', 0.5); // 0.5 representa el nivel de compresión

    // Verificar si la longitud de la cadena comprimida es menor que el límite
    if (compressedData.length <= 39800) {
      // La longitud de la cadena comprimida es aceptable, puedes usarla
      profileImage.style.backgroundImage = `url(${compressedData})`;
      profilePreview.style.backgroundImage = `url(${compressedData})`;
      localStorage.setItem('savedImage', compressedData);
      console.log("Imagen guardada con éxito.");
    } else {
      // La longitud de la cadena comprimida excede el límite
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