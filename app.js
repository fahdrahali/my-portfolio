const unionBtn = document.querySelector('.union');
const menu = document.querySelector('.menu');


unionBtn.addEventListener('click', () => {
  console.log('Union button clicked');
  menu.classList.toggle('show');
});


const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', () => {  
  console.log('Close button clicked');
  menu.classList.remove('show');
}); 

