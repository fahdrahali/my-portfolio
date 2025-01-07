
// project details popup function
const addPrjectDetailsPopup = (project) => {



    // button to close the popup
    const button = document.createElement('button');
    const closeImg = document.createElement('img');
    closeImg.src = './assets/cancel.png';
    closeImg.alt = 'close button';
    button.appendChild(closeImg);
    button.classList.add('cancel');

    // project title
    const h1 = document.createElement('h1');
    h1.textContent = project.name;

    // create an unordred list for project title and close button
    const ulTitle = document.createElement('ul');
    const liTitle = document.createElement('li');
    liTitle.appendChild(h1);
    ulTitle.appendChild(liTitle);

    const liButton = document.createElement('li');
    liButton.appendChild(button);
    ulTitle.appendChild(liButton);
    ulTitle.classList.add('popup-title');


    // project informaton
    const ul = document.createElement('ul');

    // create an unordred list for project infos
    const li = document.createElement('li');
    li.textContent = project.company;
    ul.appendChild(li);

    const li2 = document.createElement('li');
    li2.textContent = project.type;
    ul.appendChild(li2);

    const li3 = document.createElement('li');
    li3.textContent = project.year;
    ul.appendChild(li3);
    ul.classList.add('works-card-info');

    // project omage
    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.name;
    img.classList.add('project-image');

    //project description
    const p = document.createElement('p');
    p.textContent = project.moreDescription;
    
    // create an unordred list for project technologies
    const ulTech= document.createElement('ul');

    project.technologies.map(tech => {
        let li = document.createElement('li');
        li.textContent = tech;
        ulTech.appendChild(li);
        ulTech.classList.add('works-card-tech');
});

// create a devier for project details popup
const divider = document.createElement('img');
divider.src = './assets/devider.png';
divider.alt = 'devider';

// create a link see live
const a = document.createElement('a');
const spanLive = document.createElement('span');
spanLive.textContent = 'See Live';
a.appendChild(spanLive);
const liveImg = document.createElement('img');
liveImg.classList.add('live');
liveImg.src = './assets/export.jpg';
liveImg.alt = 'live button';
a.appendChild(liveImg);

// create a link see source code
const a2 = document.createElement('a');
const spanSource = document.createElement('span');
spanSource.textContent = 'See Source';
a2.appendChild(spanSource);
const sourceImg = document.createElement('img');
sourceImg.classList.add('live');
sourceImg.src = './assets/github.jpg';
sourceImg.alt = 'source button';
a2.appendChild(sourceImg);


// create an unordred list for project links
const ulLinks = document.createElement('ul');
const liLink = document.createElement('li');
const liLink2 = document.createElement('li');
liLink.appendChild(a);
liLink.classList.add('live-link');
liLink2.appendChild(a2);
liLink2.classList.add('live-link');
ulLinks.appendChild(liLink);
ulLinks.appendChild(liLink2);

    // create a section for project details popup
    const popup = document.createElement('section');
    popup.classList.add('popup');

    // append all elements to popup
    popup.appendChild(ulTitle);
    popup.appendChild(ul);
    popup.appendChild(img);
    popup.appendChild(p);
    popup.appendChild(ulTech);
    popup.appendChild(divider);
    popup.appendChild(ulLinks);

    const popupContainer = document.createElement('section');
    popupContainer.id = 'popup-container'

    popupContainer.appendChild(popup);
    popupContainer.classList.add('popup-container');
    document.querySelector('.main').appendChild(popupContainer);
    
    button.addEventListener('click', () => {
        popupContainer.classList.add('hide');
    })
}


export default addPrjectDetailsPopup;
