const { Router } = require("express");
const getTaskById = require("../../controlllers/tasksControllers/getTaskById");
const router = Router();

router.get("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const foundTask = await getTaskById(id);
    res.status(200).json(foundTask);
  } catch (error) {
    if (error.message === "There are no tasks with that ID") {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

module.exports = router;
