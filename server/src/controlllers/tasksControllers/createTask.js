const { Task } = require("../../database/database");

const createTask = async (taskData) => {
  const { name, projectId } = taskData;
  try {
    if (!name) {
      throw new Error("Incomplete data");
    } else {
      const createdTask = await Task.create({ name, projectId });
      return createdTask;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = createTask;
