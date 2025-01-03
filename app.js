import addSectionMenu from './modules/addSectionMenu.js';

// add event listener 'click' to union button
const unionBtn = document.querySelector('.union');
unionBtn.addEventListener('click', () => {
  console.log('union button clicked');
  addSectionMenu();
});
