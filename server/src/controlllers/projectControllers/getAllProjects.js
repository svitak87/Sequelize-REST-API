const { Project } = require("../../database/database");

//tester

const getAllProjects = async (query) => {
  try {
    const projects = await Project.findAll({where: query});

    if (projects.length === 0) {
      throw new Error("There are no projects");
    } else {
      return projects;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = getAllProjects;
