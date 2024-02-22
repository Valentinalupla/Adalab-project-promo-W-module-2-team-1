'use strict';

const selectedIcons = document.querySelectorAll('.js-icons');
const cardDecoration = document.querySelector('.js-decorationCard');
const cardText = document.querySelector('.js-headerCard');
const formRadioButtons = document.querySelectorAll('.inputpal');
const formInformationUser = document.querySelectorAll('input');
const defaultNameCard = document.querySelector('.js-preview-NameCard');
const defaultJobCard = document.querySelector('.js-preview-JobCard');
const resetButton = document.querySelector('.js-button-reset');
const uploadProfileImage = document.querySelector('.js__profile-image');

const resetCLassIcon = () => {
  selectedIcons.forEach((icon) => {
    icon.classList.remove('changereds', 'changeblues', 'changeneutrals');
  });
  cardText.classList.remove('changereds', 'changeblues', 'changeneutrals');
  cardDecoration.classList.remove('decoR', 'decoB', 'decoN');
};

const resetRadioButtons = () => {
  for (const button of formRadioButtons) {
    button.checked = false;
  }
};

const resetProfileImage = () => {
  uploadProfileImage.style.backgroundImage = '';
};

const resetTextCard = () => {
  for (const textCard of formInformationUser) {
    textCard.value = textCard.defaultValue;
  }
  defaultNameCard.innerHTML = 'Nombre Apellido';
  defaultJobCard.innerHTML = 'Front-end developer';
};

const handleReset = () => {
  resetCLassIcon();
  resetRadioButtons();
  resetTextCard();
  resetProfileImage();
};

resetButton.addEventListener('click', handleReset);
