class Project {
  constructor(name, description, moreDescription, image, technologies, year, type, company) {
    this.name = name;
    this.company = company;
    this.description = description;
    this.moreDescription = moreDescription;
    this.image = image;
    this.technologies = technologies;
    this.year = year;
    this.type = type;
  }
}

export default Project;
