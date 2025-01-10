import addSectionMenu from './modules/addSectionMenu.js';
import submitForm from './modules/formValidators.js';
import addProjectsSection from './modules/projectSection.js';
import User from './modules/user.js';

// add event listener 'click' to union button
const unionBtn = document.querySelector('.union');
let email = document.getElementById('email');
let name = document.getElementById('fname');
let message = document.getElementById('msg');
const form = document.getElementById('form');

unionBtn.addEventListener('click', () => {
  addSectionMenu();
});

document.addEventListener('DOMContentLoaded', () => {
  addProjectsSection();
  User.getUserLocalStorage(name, email, message);
});

const user = JSON.parse(localStorage.getItem('user'));

form.addEventListener('change', (e) => {
  user[e.target.name] = e.target.value
  localStorage.setItem('user', JSON.stringify(user));
});

document.getElementById('get-in-touch').addEventListener('click', () => {
  event.preventDefault();

  submitForm(name.value, email.value, message.value);
});
