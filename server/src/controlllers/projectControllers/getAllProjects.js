const { Project } = require("../../database/database");

const getAllProjects = async () => {
  try {
    const projects = await Project.findAll();

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
