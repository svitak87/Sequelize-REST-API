const { Task } = require("../../database/database");

const getTaskById = async (id) => {
    const foundTask = await Task.findByPk(id);

    if (!foundTask) {
      throw new Error("There are no tasks with that ID");
    } 

    return foundTask
};

module.exports = getTaskById;
