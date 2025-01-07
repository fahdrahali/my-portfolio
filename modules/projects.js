import Project from './project.js';

let projects = [];

const addProject = (
  name,
  description,
  moreDescription,
  image,
  technologies,
  year,
  type,
  company
) => {
  let project = new Project(
    name,
    description,
    moreDescription,
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
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sapiente quisquam rerum iure nam! Placeat tempora error assumenda distinctio? Atque recusandae, fugiat blanditiis exercitationem dolorum nulla nihil veniam nobis provident',
  './assets/tonic.svg',
  ['HTML', 'CSS', 'JS'],
  2015,
  'Back end dev',
  'CANOPY'
);

addProject(
  'Multi-Post Stories',
  'Description 1A daily selection of privately personalized reads; no accounts or sign-ups required. ',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sapiente quisquam rerum iure nam! Placeat tempora error assumenda distinctio? Atque recusandae, fugiat blanditiis exercitationem dolorum nulla nihil veniam nobis provident',
  './assets/multi-post.svg',
  ['HTML', 'CSS', 'JS'],
  2015,
  'Back end dev',
  'CANOPY'
);

addProject(
  'Tonic',
  'Description 1A daily selection of privately personalized reads; no accounts or sign-ups required. ',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sapiente quisquam rerum iure nam! Placeat tempora error assumenda distinctio? Atque recusandae, fugiat blanditiis exercitationem dolorum nulla nihil veniam nobis provident',
  './assets/tonic2.svg',
  ['HTML', 'CSS', 'JS'],
  2015,
  'Back end dev',
  'CANOPY'
);

addProject(
  'Multi-Post Stories',
  'Description 1A daily selection of privately personalized reads; no accounts or sign-ups required. ',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sapiente quisquam rerum iure nam! Placeat tempora error assumenda distinctio? Atque recusandae, fugiat blanditiis exercitationem dolorum nulla nihil veniam nobis provident',
  './assets/multi-post2.svg',
  ['HTML', 'CSS', 'JS'],
  2015,
  'Back end dev',
  'CANOPY'
);

export default projects;
