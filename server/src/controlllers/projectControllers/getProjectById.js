const { Project } = require("../../database/database");

const getProjectById = async (id) => {
  const projectToFind = await Project.findByPk(id);

  if (!projectToFind) {
    throw new Error("There's no a project with that ID");
  }

  return projectToFind;
};

module.exports = getProjectById;

