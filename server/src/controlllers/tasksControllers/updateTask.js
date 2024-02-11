const { Task } = require("../../database/database");

const updateTask = async (taskData) => {
  try {
    const { id, name, projectId } = taskData;
    const taskToUpdate = await Task.findByPk(id);

    if (!taskToUpdate) {
      throw new Error("There's no a task with that ID");
    } else if (!name || !projectId) {
      throw new Error("Incomplete data");
    } else {
      const taskUpdated = taskToUpdate.update({ name, projectId });
      return taskUpdated;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = updateTask;
