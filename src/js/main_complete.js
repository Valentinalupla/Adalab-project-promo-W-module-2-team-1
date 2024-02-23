'use strict'
const elements = {
  hiddenMenu: document.querySelector(".js-two"),
  arrowUp: document.querySelector(".js-arrow-up"),
  arrowDown: document.querySelector(".js-arrow-down"),
  inputName: document.querySelector('.js-name'),
  inputJob: document.querySelector('.js-job'),
  inputImage: document.querySelector('.js-photo'),
  inputEmail: document.querySelector('.js-email'),
  inputNumber: document.querySelector('.js-number'),
  inputLinkedin: document.querySelector('.js-linkedin'),
  inputGit: document.querySelector('.js-git'),
  cardPreviewName: document.querySelector('.js-preview-NameCard'),
  cardPreviewJob: document.querySelector('.js-preview-JobCard'),
  fileField: document.querySelector('.js__profile-upload-btn'),
  profileImage: document.querySelector('.js__profile-image'),
  profilePreview: document.querySelector('.js__profile-preview')
};

elements.fileField.addEventListener('change', getImage);
elements.inputName.addEventListener('input', updatePreview);
elements.inputJob.addEventListener('input', updatePreview);
elements.arrowUp.addEventListener('click', toggleMenu);
elements.arrowDown.addEventListener('click', toggleMenu);

const fileReader = new FileReader();
fileReader.addEventListener('load', updateImage);

function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fileReader.readAsDataURL(myFile);
}

function updateImage() {
  const { result } = fileReader;
  elements.profileImage.style.backgroundImage = `url(${result})`;
  elements.profilePreview.style.backgroundImage = `url(${result})`;
}

function updatePreview() {
  elements.cardPreviewName.innerHTML = elements.inputName.value;
  elements.cardPreviewJob.innerHTML = elements.inputJob.value;
}

function toggleMenu() {
  elements.hiddenMenu.classList.toggle('hidden');
  elements.arrowUp.classList.toggle('hidden');
  elements.arrowDown.classList.toggle('hidden');
}
