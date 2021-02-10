const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const Project = require("../../models/Project");
const { route } = require("./user");

// @ route POST api/projects
// @ desc add project to portfolio
// PRIVATE route
router.post(
  "/",
  [
    auth,
    [
      check("title", "Title is required").not().isEmpty(),
      check("description", "Description is required").not().isEmpty(),
      check("img", "Image is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { title, description, img, liveDemo, gitHub, date } = req.body;
    try {
      let checkProject = await Project.findOne({ title });

      if (checkProject) {
        return res
          .status(400)
          .json({ errors: [{ msg: "There is already project like this" }] });
      }

      const newProject = new Project({
        title,
        description,
        img,
        liveDemo,
        gitHub,
        date,
      });

      const project = await newProject.save();

      res.json(project);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @ route GET api/projects
// @ desc get all projects
// piblic route

router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ date: -1 });
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//Get project by ID

router.get("/:id", auth, async (req, res) => {
  try {
    if (req.params.id !== "add") {
      const project = await Project.findById(req.params.id);
      res.json(project);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @ route Delete api/projects/:id
// @ desc delete single project by id
// private
router.delete("/:id", auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    await project.remove();
    if (!project) {
      return res.status(404).json({ msg: "Project not found" });
    }
    res.json({ msg: "Post removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
