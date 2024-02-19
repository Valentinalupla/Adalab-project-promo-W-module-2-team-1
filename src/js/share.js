'use strict';

const profileCreated = document.querySelector ('.js-profile'); 
const linkButton = document.querySelector ('.js-button');

const hidenMenu = document.querySelector(".js-collapsedBotton");
const iconUp = document.querySelector(".js-up");
const iconDown = document.querySelector(".js-down");

function handleClickProfile(event) {
    event.preventDefault();

    linkButton.classList.add ('play');
    profileCreated.classList.remove ('hiden');
}

linkButton.addEventListener('click', handleClickProfile);

  
iconUp.addEventListener("click", () => {
  hiden();
});
iconDown.addEventListener("click", () => {
  console.log('click')
  hiden();

});

function hiden() {

  iconUp.classList.toggle("hiden");
  iconDown.classList.toggle("hiden");
  hidenMenu.classList.toggle("hiden");
  profileCreated.classList.toggle ("hiden")
}