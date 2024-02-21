'use strict';

const selectedIcons = document.querySelectorAll('.js-icons');
const cardDecoration = document.querySelector('.js-decorationCard');
const cardText = document.querySelector('.js-headerCard');
const formInformationUser = document.querySelectorAll('input');

const resetButton = document.querySelector('.js-button-reset');

const handleReset = () => {
  selectedIcons.forEach((icon) => {
    icon.classList.remove('changereds', 'changeblues', 'changeneutrals');
  });
  cardText.classList.remove('changereds', 'changeblues', 'changeneutrals');
  cardDecoration.classList.remove('decoR', 'decoB', 'decoN');
  document.querySelectorAll('.inputpal').forEach((radioButton) => {
    radioButton.checked = false;
  });
  for (var i = 0; i < formInformationUser.length; i++) {
    formInformationUser[i].value = formInformationUser[i].defaultValue;
  }
};

resetButton.addEventListener('click', handleReset);
