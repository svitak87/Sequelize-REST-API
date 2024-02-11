const { Task } = require("../../database/database");

const getAllTasks = async () => {
  const tasks = await Task.findAll();

  if (tasks.length === 0) {
    throw new Error("There aro no tasks");
  } else {
    return tasks;
  }
};

module.exports = getAllTasks;
