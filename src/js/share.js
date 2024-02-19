'use strict';

const profileCreated = document.querySelector ('.js-profile'); 
const linkButton = document.querySelector ('.js-button');

function handleClickProfile(event) {
    event.preventDefault();

    // Si queremos añadir solo el botón gris 1 vez cuando pulsen
    // linkButton.classList.add('play');

    if (linkButton.classList.contains('play')) {
        linkButton.classList.remove ('play');
    } else {
        linkButton.classList.add ('play');
    }

    if (profileCreated.classList.contains('hiden')) {
        profileCreated.classList.remove ('hiden');
    } else {
        profileCreated.classList.add ('hiden');
    }
  }

  linkButton.addEventListener('click', handleClickProfile);


