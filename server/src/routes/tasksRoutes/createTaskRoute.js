const { Router } = require("express");
const router = Router();
const createTask = require("../../controlllers/tasksControllers/createTask");


router.post("/tasks", async (req, res) => {
  const { name, projectId } = req.body;
  try {
    const createdTask = await createTask({ name, projectId });
    res.status(201).json(createdTask);
  } catch (error) {
    if (error.message === "Incomplete data") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

module.exports = router;
