const { Task, Project } = require("../../database/database");

const getProjectWithTasks = async (id) => {
  const projectToFind = await Project.findByPk(id);

  if (!projectToFind) {
    throw new Error("There are no projects with that ID");
  } else {
    const tasksFound = await Task.findAll({
      where: { projectId: id },
    });
    return tasksFound;
  }
};

module.exports = getProjectWithTasks;

