'use strict';


const profileCreated = document.querySelector('.js-profile');
const linkButton = document.querySelector('.js-button');



function handleClickProfile(event) {
  event.preventDefault();
  fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    body: JSON.stringify(data), 
    headers: {'Content-type': 'application/json'}
  }).then((response) => response.json())
    .then(data  => {
      let dataToString = data;  
      console.log(data);
    })

    console.log(data);
  linkButton.classList.add('play');
  profileCreated.classList.remove("hiden")
}



 linkButton.addEventListener('click', handleClickProfile);

//   event.preventDefault();
//   handleClickProfile()


