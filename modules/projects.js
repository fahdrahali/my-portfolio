import Project from './project.js';

let projects = [];

const addProject = (
  name,
  description,
  image,
  technologies,
  year,
  type,
  company
) => {
  let project = new Project(
    name,
    description,
    image,
    technologies,
    year,
    type,
    company
  );
  projects.push(project);
};

addProject(
    'Tonic',
    'Description 1A daily selection of privately personalized reads; no accounts or sign-ups required. ',
    './assets/tonic.svg',
    ['HTML', 'CSS', 'JS'],
    2015,
    'Back end dev',
    'CANOPY'
  );
  
  addProject(
      'Multi-Post Stories',
      'Description 1A daily selection of privately personalized reads; no accounts or sign-ups required. ',
      './assets/multi-post.svg',
      ['HTML', 'CSS', 'JS'],
      2015,
      'Back end dev',
      'CANOPY'
    );
  
    addProject(
      'Tonic',
      'Description 1A daily selection of privately personalized reads; no accounts or sign-ups required. ',
      './assets/tonic2.svg',
      ['HTML', 'CSS', 'JS'],
      2015,
      'Back end dev',
      'CANOPY'
    );
  
    addProject(
      'Multi-Post Stories',
      'Description 1A daily selection of privately personalized reads; no accounts or sign-ups required. ',
      './assets/multi-post2.svg',
      ['HTML', 'CSS', 'JS'],
      2015,
      'Back end dev',
      'CANOPY'
    );

  export default projects;