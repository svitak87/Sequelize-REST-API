const { Router } = require("express");
const router = Router();
const getAllProjects = require('../controlllers/getAllProjects')


router.get('/projects', async (req, res) => {
    try {
        const projects = await getAllProjects()
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({error: 'Internal server error'})
    }
});

module.exports = router;
