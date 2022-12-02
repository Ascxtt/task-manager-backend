const express = require("express");
const connectDB = require("./config/connectDB");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const Task = require("./model/taskModel");
const taskRoutes = require("./routes/tasksRoutes");
const cors = require("cors");

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000/", "ascott-task-manager-app.onrender.com"],
  })
);
app.use("/api/v1/tasks", taskRoutes);

//Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
