const { Router } = require("express");
const getAllTasks = require("../../controlllers/tasksControllers/getAllTasks");
const router = Router();

router.get("/tasks", async (req, res) => {
  try {
    const allTasks = await getAllTasks();
    res.status(200).json(allTasks);
  } catch (error) {
    if (error.message === "There aro no tasks") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

module.exports = router;
