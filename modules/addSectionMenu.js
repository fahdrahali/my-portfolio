const addSectionMenu = () => {
  // create menu section
  const menuSection = document.createElement('section');
  menuSection.classList.add('menu');

  // create img tag
  const closeImg = document.createElement('img');
  closeImg.src = './assets/close.png';
  closeImg.alt = 'close';

  // create close button tag
  const closeBtn = document.createElement('button');
  closeBtn.classList.add('close');
  closeBtn.appendChild(closeImg);
  menuSection.appendChild(closeBtn);

  // create unordered list
  const ul = document.createElement('ul');

  // create list items function
  const createListItems = (text, href) => {
    let item = document.createElement('li');
    let link = document.createElement('a');
    link.textContent = text;
    link.href = href;
    item.appendChild(link);
    ul.appendChild(item);
  };

  // create list items
  createListItems('Portfolio', '#works');
  createListItems('About', '#about');
  createListItems('Contact', '#contact');

  menuSection.appendChild(ul);

  // append menu section to the top of body
  document.body.insertBefore(menuSection, document.body.firstChild);

  // add event listener 'click' to close button
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(menuSection);
  });
};

export default addSectionMenu;