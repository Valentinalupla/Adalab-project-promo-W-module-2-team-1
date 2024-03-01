'use strict';


const profileCreated = document.querySelector('.js-profile');
const linkButton = document.querySelector('.js-button');

const formData = {
  palette: null,
  name: inputName.value,
  job: inputJob.value,
  phone: inputNumber.value,
  email: inputEmail.value,
  linkedin: inputLinkedin.value,
  github: inputGit.value,
  photo: fr.result,
// }
//  localStorage.setItem('savedData', JSON.stringify(formData));

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


