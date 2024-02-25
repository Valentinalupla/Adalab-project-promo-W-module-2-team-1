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
const inputEmail = document.querySelector('.js-email');
const inputNumber = document.querySelector('.js-number');
const inputLinkedin = document.querySelector('.js-linkedin');
const inputGit = document.querySelector('.js-git');

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
};

// Resetear formulario

const resetRadioButtons = () => {
  for (const button of formRadioButtons) {
    button.checked = false;
  }
};

const resetInputsForm = () => {
  for (const textCard of formInformationUser) {
    textCard.value = textCard.defaultValue;
  }
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

function updateLinkContent() {
  const iconEmail = document.querySelector('.js-linkEmail');
  iconEmail.href = 'mailto:' + inputEmail.value;
  const iconPhone = document.querySelector('.js-linkPhone');
  iconPhone.href = 'tel:' + inputNumber.value;
  const iconLiknedin = document.querySelector('.js-linkLinkedIn');
  iconLiknedin.href = inputLinkedin.value;
  const iconGit = document.querySelector('.js-linkGitHub');
  iconGit.href = inputGit.value;
}

inputEmail.addEventListener('input', updateLinkContent);
inputNumber.addEventListener('input', updateLinkContent);
inputLinkedin.addEventListener('input', updateLinkContent);
inputGit.addEventListener('input', updateLinkContent);
