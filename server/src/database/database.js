require("dotenv").config();

const { USER, PASSWORD, HOST, PORT_DB, BDD } = process.env;

const { Sequelize } = require("sequelize");
const ProjectModel = require("../models/Project"); 
const TaskModel = require("../models/Task"); 

const sequelize = new Sequelize(
  `postgres://${USER}:${PASSWORD}@${HOST}:${PORT_DB}/${BDD}`,
  { logging: false }
);

ProjectModel(sequelize);
TaskModel(sequelize);

const { Project, Task } = sequelize.models;

Project.hasMany(Task, {
  foreignKey: "projectId",
});

Task.belongsTo(Project, {
  foreignKey: "projectId",
  targetKey: "id",
});

module.exports = {
  sequelize,
  ...sequelize.models,
};
