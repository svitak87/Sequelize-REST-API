const { Router } = require("express");
const router = Router();
const deleteProject = require('../../controlllers/projectControllers/deleteProject')

router.delete("/projects/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteProject(id);
    res
      .status(201)
      .json({ message: "The project has been successfully deleted." });
  } catch (error) {
    if (error.message === "There's no a project with that ID") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

module.exports = router;
