const { Router } = require("express");
const router = Router();


router.get('/projects/:id', (req, res) => {
    try {
        res.status(200).json('Hola')
    } catch (error) {
        
    }
})

module.exports = router;