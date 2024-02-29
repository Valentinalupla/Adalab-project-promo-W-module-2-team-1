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
const littleProfileImage = document.querySelector('.js__profile-preview');


// Resetear tarjeta
const resetCLassIcon = () => {
  selectedIcons.forEach((icon) => {
    icon.classList.remove('changereds', 'changeblues', 'changeneutrals');
  });
  cardText.classList.remove('changereds', 'changeblues', 'changeneutrals');
  cardDecoration.classList.remove('decoR', 'decoB', 'decoN');
};

const resetTextCard = () => {
  defaultNameCard.innerHTML = 'Nombre Apellido';
  defaultJobCard.innerHTML = 'Front-end developer';
};

const resetProfileImage = () => {
  uploadProfileImage.style.backgroundImage = '';
  littleProfileImage.style.backgroundImage = '';
};

// Resetear formulario

const resetRadioButtons = () => {
  formRadioButtons.forEach((button) => {
    button.checked = false;
  });
};

const resetInputsForm = () => {
  formInformationUser.forEach((textCard) => {
    textCard.value = textCard.defaultValue;
  });

  inputEmail.value = '';
  inputNumber.value = '';
  inputLinkedin.value = '';
  inputGit.value = '';
};

const resetCard = () => {
  resetProfileImage();
  resetTextCard();
  resetCLassIcon();
};
const resetForm = () => {
  resetRadioButtons();
  resetInputsForm();
};

const handleReset = () => {
  resetCard();
  resetForm();
};

resetButton.addEventListener('click', handleReset);

// AÑADIR URLS A LOS ICONO - PASAR AL JS DE VALENTINA CUANDO LO VEAMOS TODAS PARA QUE ESTÉN LOS INPUTS LLAMADOS SOLO EN UN JS Y NO EN DOS

