const { Project } = require("../database/database");

const createProject = async (dataProject) => {
  const { name, priority, description } = dataProject;
  try {
    const newProject = await Project.create({ name, priority, description });
    return newProject;
  } catch (error) {
    throw error;
  }
};

module.exports = createProject;
