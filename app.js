import addSectionMenu from './modules/addSectionMenu.js';
import submitForm from './modules/formValidators.js';
import addProjectsSection from './modules/projectSection.js';
import User from './modules/user.js';

// add event listener 'click' to union button
const unionBtn = document.querySelector('.union');
const email = document.getElementById('email');
const name = document.getElementById('fname');
const message = document.getElementById('msg');
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
  user[e.target.name] = e.target.value;
  localStorage.setItem('user', JSON.stringify(user));
});

document.getElementById('get-in-touch').addEventListener('click', (event) => {
  event.preventDefault();
  submitForm(name.value, email.value, message.value);
});
