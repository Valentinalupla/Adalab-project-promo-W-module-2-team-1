'use strict';


const profileCreated = document.querySelector('.js-profile');
const linkButton = document.querySelector('.js-button');
const linkSpace = document.querySelector('.profile__link');

let formData;


const savedImage = localStorage.getItem('savedImage');
const savedDataJSON = localStorage.getItem('savedData');


window.addEventListener('DOMContentLoaded', function () {

  if (savedImage) {

    profileImage.style.backgroundImage = `url(${savedImage})`;
    profilePreview.style.backgroundImage = `url(${savedImage})`;
  }

  if (savedDataJSON) {



    const savedData = JSON.parse(savedDataJSON);

    inputName.value = savedData.name;
    inputJob.value = savedData.job;
    inputNumber.value = savedData.phone;
    inputEmail.value = savedData.email;
    inputLinkedin.value = savedData.linkedin;
    inputGit.value = savedData.github;

    if (savedData.name === "") {
      cardPreviewName.innerHTML = "Nombre Apellido";

    } else {
      cardPreviewName.innerHTML = savedData.name;

    } if (savedData.job === "") {

      cardPreviewJob.innerHTML = "Front-end Developer"; {
      }
    } else {

      cardPreviewJob.innerHTML = savedData.job;
    }


  }
});

document.body.addEventListener('click', function (event) {

  if (imgtoLoad == null) {
    formData = {

      palette: selectedPalette,
      name: inputName.value,
      job: inputJob.value,
      phone: inputNumber.value,
      email: inputEmail.value,
      linkedin: inputLinkedin.value,
      github: inputGit.value,
      photo: savedImage,

    }

  } else {
    formData = {

      palette: selectedPalette,
      name: inputName.value,
      job: inputJob.value,
      phone: inputNumber.value,
      email: inputEmail.value,
      linkedin: inputLinkedin.value,
      github: inputGit.value,
      photo: imgtoLoad,

    }


  }
  localStorage.setItem('savedData', JSON.stringify(formData));

});
function handleClickProfile(event) {
  event.preventDefault();
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
}



linkButton.addEventListener('click', handleClickProfile);

//   event.preventDefault();
//   handleClickProfile()


