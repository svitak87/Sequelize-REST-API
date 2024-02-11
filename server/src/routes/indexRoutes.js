const express = require("express");
const router = express.Router();

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

module.exports = router;
