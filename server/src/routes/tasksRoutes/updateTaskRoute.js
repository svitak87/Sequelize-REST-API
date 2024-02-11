const { Router } = require("express");
const updateTask = require("../../controlllers/tasksControllers/updateTask");
const router = Router();

router.put("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, projectId } = req.body;
    const updatedTask = await updateTask({ id, name, projectId });

    res.status(201).json(updatedTask);
  } catch (error) {
    if (error.message === "There's no a task with that ID") {
      res.status(404).json({ error: error.message });
    } else if (error.message === "Incomplete data") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

module.exports = router;
