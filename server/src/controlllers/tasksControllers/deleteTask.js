const { Task } = require("../../database/database");

const deleteTask = async (id) => {
  try {
    const taskToBeDeleted = await Task.findByPk(id);

    if (!taskToBeDeleted) {
      throw new Error("There are no tasks with that ID");
    } else {
      const taskDeleted = taskToBeDeleted.destroy();
      return taskDeleted;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = deleteTask;
