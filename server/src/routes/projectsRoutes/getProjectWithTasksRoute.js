const { Router } = require("express");
const getProjectWithTasks = require("../../controlllers/projectControllers/getProjectWithTasks");
const router = Router();

router.get("/projects/:id/tasks", async (req, res) => {
  const { id } = req.params;

  try {
    const tasksFound = await getProjectWithTasks(id);
    res.status(200).json(tasksFound);
  } catch (error) {
    if (error.message === "There are no projects with that ID") {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

module.exports = router;
