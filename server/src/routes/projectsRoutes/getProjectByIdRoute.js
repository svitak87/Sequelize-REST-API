const { Router } = require("express");
const router = Router();
const getProjectById = require('../../controlllers/projectControllers/getProjectById')


router.get('/projects/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const projectFound = await getProjectById(id);
        res.status(200).json(projectFound);
    } catch (error) {
        if(error.message === "There's no a project with that ID"){
            res.status(400).json({error: error.message})
        }else{
            res.status(500).json({error: 'Internal server error'})
        }
    }
})

module.exports = router;