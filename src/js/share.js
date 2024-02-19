'use strict';

const profileCreated = document.querySelector ('.js-profile'); 
const linkButton = document.querySelector ('.js-button');

function handleClickProfile(event) {
    event.preventDefault();

    linkButton.classList.add ('play');
    profileCreated.classList.remove ('hiden');
    
  }

  linkButton.addEventListener('click', handleClickProfile);


