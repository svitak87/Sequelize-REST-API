const { Project } = require("../../database/database");

const deleteProject = async (id) => {
  try {
    const projectToDelete = await Project.findByPk(id);

    if (!projectToDelete) {
      throw new Error("There's no a project with that ID");
    } else {
      const projectDeleted = projectToDelete.destroy();
      return projectDeleted;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = deleteProject;
