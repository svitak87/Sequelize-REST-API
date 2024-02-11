const { Router } = require("express");
const router = Router();
const getAllProjects = require("../../controlllers/projectControllers/getAllProjects");

router.get("/projects", async (req, res) => {
  const { name } = req.query;
  try {
    const allProjects = name
      ? await getAllProjects({ name })
      : await getAllProjects();
    res.status(200).json(allProjects);
  } catch (error) {
    if (error.message === "There are no projects") {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

module.exports = router;
