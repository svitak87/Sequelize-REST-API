const { Router } = require("express");
const router = Router();
const createProject = require("../controlllers/createProject");

router.post("/projects", async (req, res) => {
  try {
    const { name, priority, description } = req.body;
    const newProject = await createProject({name, priority, description});
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
