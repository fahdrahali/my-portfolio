import addSectionMenu from './modules/addSectionMenu.js';
import addProjectsSection from './modules/projectSection.js';

// add event listener 'click' to union button
const unionBtn = document.querySelector('.union');
unionBtn.addEventListener('click', () => {
  addSectionMenu();
});

document.addEventListener('DOMContentLoaded', () => {
  addProjectsSection();
});
