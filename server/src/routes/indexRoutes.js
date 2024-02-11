const express = require("express");
const router = express.Router();

//Projects routes:

const getAllProjectsRoute = require("./projectsRoutes/getAllProjectsRoute");
const createProjectRoute = require("./projectsRoutes/createProjectRoute");
const updateProjectRoute = require("./projectsRoutes/updateProjectRoute");
const deleteProjectRoute = require("./projectsRoutes/deleteProjectRoute");
const getProjectByIdRoute = require("./projectsRoutes/getProjectByIdRoute");

router.use(getAllProjectsRoute);
router.use(createProjectRoute);
router.use(updateProjectRoute);
router.use(deleteProjectRoute);
router.use(getProjectByIdRoute);

//Relation of project with tasks:
const getProjectWithTasks = require('./projectsRoutes/getProjectWithTasksRoute')
router.use(getProjectWithTasks);

//Tasks routes:

const getAllTasks = require("./tasksRoutes/getAllTasksRoute");
const createTask = require("./tasksRoutes/createTaskRoute");
const updateTask = require('./tasksRoutes/updateTaskRoute');
const getTaskById = require('./tasksRoutes/getTaskByIdRoute');
const deleteTask = require('./tasksRoutes/deleteTaskRoute');



router.use(getAllTasks);
router.use(createTask);
router.use(updateTask);
router.use(getTaskById);
router.use(deleteTask);

module.exports = router;
