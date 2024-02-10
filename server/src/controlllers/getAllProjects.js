const { Project } = require("../database/database");

const getAllProjects = async () => {
  try {
    const Projects = await Project.findAll();
    return Projects;
  } catch (error) {
    throw error;
  }
};

module.exports = getAllProjects;
