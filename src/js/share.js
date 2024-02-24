'use strict';

const profileCreated = document.querySelector('.js-profile');
const linkButton = document.querySelector('.js-button');

function handleClickProfile() {

  linkButton.classList.add('play');
  profileCreated.classList.remove("hiden")
}

linkButton.addEventListener("click", (event) => {
  event.preventDefault();
  handleClickProfile()
});

// function hiden() {

//   iconUp.classList.toggle("hiden");
//   iconDown.classList.toggle("hiden");
//   hidenMenu.classList.toggle("hiden");
//   profileCreated.classList.add("hiden")
//   linkButton.classList.remove('play');
// }