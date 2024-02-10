require("dotenv").config();

const { USER, PASSWORD, HOST, PORT_DB, BDD } = process.env;

const { Sequelize } = require("sequelize");
const ProjectModel = require("../models/Project"); // Cambia el nombre de la variable
const TaskModel = require("../models/Task"); // Cambia el nombre de la variable

const sequelize = new Sequelize(
  `postgres://${USER}:${PASSWORD}@${HOST}:${PORT_DB}/${BDD}`,
  { logging: false }
);

ProjectModel(sequelize);
TaskModel(sequelize);

const { Project, Task } = sequelize.models;

// No olvides usar el nombre correcto de los modelos al llamar a hasMany y belongsTo
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
