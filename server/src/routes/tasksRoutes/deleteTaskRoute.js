const { Router } = require("express");
const router = Router();
const deleteTask = require('../../controlllers/tasksControllers/deleteTask');

router.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteTask(id);
    res.status(200).json({ message: "The task was succesfully deleted" });
  } catch (error) {
    if (error.message === "There are no tasks with that ID") {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

module.exports = router;
