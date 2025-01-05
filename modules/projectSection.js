import projects from "./projects.js";

const worksSection = document.createElement('section');
worksSection.id = 'works';


const createWorksCard = (project) => {
    const worksCard = document.createElement('div');
    worksCard.classList.add('works-card');

    // create an image tag 
    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.name

    // create a div for works card block
    const worksCardBlock = document.createElement('div');
    worksCardBlock.classList.add('works-card-block');

    // create a h1 tag for project name
    const h1 = document.createElement('h1');
    h1.textContent = project.name;

    // create an unordred list for project infos
    const ul = document.createElement('ul');
    ul.classList.add('works-card-info');
    const li = document.createElement('li');
    li.textContent = project.company;
    ul.appendChild(li);

    const li2 = document.createElement('li');
    li2.textContent = project.type;
    ul.appendChild(li2);

    const li3 = document.createElement('li');
    li3.textContent = project.year;
    ul.appendChild(li3);

    // create a p tag for project description
    const p = document.createElement('p');
    p.textContent = project.description;

    // create an unordred list for project technologies
    const ulTech= document.createElement('ul');
    ulTech.classList.add('works-card-tech');
    project.technologies.map(tech => {
        const li = document.createElement('li');
        li.textContent = tech;
        ulTech.appendChild(li);
    });

    // create a button for project link
    const btn = document.createElement('button');   
    btn.textContent = 'See Project';                

    // append all elements to works card
    worksCard.appendChild(img);
    worksCard.appendChild(worksCardBlock);
    worksCardBlock.appendChild(h1);
    worksCardBlock.appendChild(ul);
    worksCardBlock.appendChild(p);
    worksCardBlock.appendChild(ulTech);
    worksCardBlock.appendChild(btn);

    worksSection.appendChild(worksCard);

}

const addProjectsSection = () => {
    projects.map(project => {
        createWorksCard(project);
    });
    document.querySelector('.main').insertBefore(worksSection, document.getElementById('about'));
}

export default addProjectsSection;
