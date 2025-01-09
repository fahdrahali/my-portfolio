import addSectionMenu from './modules/addSectionMenu.js';
import validateEmailInput from './modules/formValidators.js';
import addProjectsSection from './modules/projectSection.js';

// add event listener 'click' to union button
const unionBtn = document.querySelector('.union');
unionBtn.addEventListener('click', () => {
  addSectionMenu();
});

document.addEventListener('DOMContentLoaded', () => {
  addProjectsSection();
});

document.getElementById('get-in-touch').addEventListener('click', () => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const msg = validateEmailInput(email);
  if (msg) document.querySelector('.error-msg').innerText = msg;
});
