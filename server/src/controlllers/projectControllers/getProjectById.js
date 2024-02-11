const { Project, Task } = require("../../database/database");

const getProjectById = async (id) => {
  const projectToFind = await Project.findByPk(id);

  if (!projectToFind) {
    throw new Error("There's no a project with that ID");
  } else {
    const projectFound = Project.findOne({
      where: {id},
      include: {
        model: Task,
        attributes: ["name"],
      },
    });
    return projectFound;
  }
};

module.exports = getProjectById;
