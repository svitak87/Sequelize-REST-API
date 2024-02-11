const { Router } = require("express");
const router = Router();
const updateProject = require("../../controlllers/projectControllers/updateProject");

router.put("/projects/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, priority, description } = req.body;
    const projectUpdated = await updateProject({
      id,
      name,
      priority,
      description,
    });
    res.status(201).json(projectUpdated);
  } catch (error) {
    if (error.message === "There's no a project with that ID") {
      res.status(404).json({ error: error.message });
    } else if (error.message === "Incomplete data") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});
module.exports = router;
