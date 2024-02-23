'use strict';

const elements = {
  selectedIcons: document.querySelectorAll('.js-icons'),
  cardDecoration: document.querySelector('.js-decorationCard'),
  cardText: document.querySelector('.js-headerCard'),
  formRadioButtons: document.querySelectorAll('.inputpal'),
  formInformationUser: document.querySelectorAll('input'),
  defaultNameCard: document.querySelector('.js-preview-NameCard'),
  defaultJobCard: document.querySelector('.js-preview-JobCard'),
  resetButton: document.querySelector('.js-button-reset'),
  uploadProfileImage: document.querySelector('.js__profile-image')
};

const resetCLassIcon = () => {
  elements.selectedIcons.forEach(icon => {
    icon.classList.remove('changereds', 'changeblues', 'changeneutrals');
  });
  elements.cardText.classList.remove('changereds', 'changeblues', 'changeneutrals');
  elements.cardDecoration.classList.remove('decoR', 'decoB', 'decoN');
};

const resetRadioButtons = () => {
  elements.formRadioButtons.forEach(button => {
    button.checked = false;
  });
};

const resetProfileImage = () => {
  elements.uploadProfileImage.style.backgroundImage = '';
};

const resetTextCard = () => {
  elements.formInformationUser.forEach(textCard => {
    textCard.value = textCard.defaultValue;
  });
  elements.defaultNameCard.innerHTML = 'Nombre Apellido';
  elements.defaultJobCard.innerHTML = 'Front-end developer';
};

const handleReset = () => {
  resetCLassIcon();
  resetRadioButtons();
  resetTextCard();
  resetProfileImage();
};

elements.resetButton.addEventListener('click', handleReset);
