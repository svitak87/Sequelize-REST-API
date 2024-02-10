const express = require("express");
const router = express.Router();

const getAllProjectsRoute = require("./getAllProjectsRoute");
const createProjectRoute = require("./createProjectRoute");
const updateProjectRoute = require("./updateProjectRoute");
const deleteProjectRoute = require('./deleteProject');
const getProjectByIdRoute = require('./getProjectById')

router.use(getAllProjectsRoute);
router.use(createProjectRoute);
router.use(updateProjectRoute);
router.use(deleteProjectRoute);
router.use(getProjectByIdRoute);

module.exports = router;
