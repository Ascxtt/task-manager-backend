const express = require("express");
const {
  createTask,
  getAllTasks,
  updateTask,
  getSingleTask,
  deleteTask,
} = require("../controllers/taskController");
const Task = require("../model/taskModel");
const router = express.Router();

// router.route("/").post(createTask).get(getAllTasks);
// router.route("/:id").get(getSingleTask).patch(updateTask).delete(deleteTask);

router.post("/", createTask);
router.get("/", getAllTasks);
router.get("/:id", getSingleTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
