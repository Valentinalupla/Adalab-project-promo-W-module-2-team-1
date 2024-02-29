'use strict';


const profileCreated = document.querySelector('.js-profile');
const linkButton = document.querySelector('.js-button');

const FormData = {
  palette: null,
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: ""
}

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


