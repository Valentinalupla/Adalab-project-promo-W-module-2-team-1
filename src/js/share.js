'use strict';


const profileCreated = document.querySelector('.js-profile');
const linkButton = document.querySelector('.js-button');

window.addEventListener('DOMContentLoaded', function () {

  const savedImage = localStorage.getItem('savedImage');
  const savedDataJSON = localStorage.getItem('savedData');


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

      cardPreviewJob.innerHTML = "Front-End Developer"; {
      }
    } else {

      cardPreviewJob.innerHTML = savedData.job;
    }


  }
});

document.body.addEventListener('click', function (event) {
  const formData = {


    name: inputName.value,
    job: inputJob.value,
    phone: inputNumber.value,
    email: inputEmail.value,
    linkedin: inputLinkedin.value,
    github: inputGit.value,

  }

  localStorage.setItem('savedData', JSON.stringify(formData));

});
function handleClickProfile(event) {
  event.preventDefault();
  // fetch('https://dev.adalab.es/api/card/', {
  //   method: 'POST',
  //   body: JSON.stringify(formData), 
  //   headers: {'Content-type': 'application/json'}
  // }).then((response) => response.json())
  //   // .then(data  => {
  //   //   // let dataToString = data;  
  //   // })


  linkButton.classList.add('play');
  profileCreated.classList.remove("hiden")
}



linkButton.addEventListener('click', handleClickProfile);

//   event.preventDefault();
//   handleClickProfile()


