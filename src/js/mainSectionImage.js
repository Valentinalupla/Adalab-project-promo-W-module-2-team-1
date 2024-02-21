'use strict';

const selectedIcons = document.querySelectorAll('.js-icons');
const cardDecoration = document.querySelector('.js-decorationCard');
const cardText = document.querySelector('.js-headerCard');
const formInformationUser = document.querySelectorAll('input');
const defaultNameCard = document.querySelector('.js-preview-NameCard');
const defaultJobCard = document.querySelector('.js-preview-JobCard');

const resetButton = document.querySelector('.js-button-reset');

const resetCLassIcon = () => {
  selectedIcons.forEach((icon) => {
    icon.classList.remove('changereds', 'changeblues', 'changeneutrals');
  });
  cardText.classList.remove('changereds', 'changeblues', 'changeneutrals');
  cardDecoration.classList.remove('decoR', 'decoB', 'decoN');
};

const resetRadioButtons = () => {
  document.querySelectorAll('.inputpal').forEach((radioButton) => {
    radioButton.checked = false;
  });
};

const resetTextCard = () => {
  for (var i = 0; i < formInformationUser.length; i++) {
    formInformationUser[i].value = formInformationUser[i].defaultValue;
  }
  defaultNameCard.innerHTML = 'Nombre Apellido';
  defaultJobCard.innerHTML = 'Front-end developer';
};

const handleReset = () => {
  resetCLassIcon();
  resetRadioButtons();
  resetTextCard();
};

resetButton.addEventListener('click', handleReset);
