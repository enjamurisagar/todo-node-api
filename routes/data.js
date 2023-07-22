import express from "express";

//taskModel

import TaskModel from "../models/TaskModel.js";

const router = express.Router();
router.get("/", (req, res) => {
  res.send("Working   ");
});
router.get("/tasks", async (req, res) => {
  const resp = await TaskModel.find({});
  res.send(resp);
  console.log("Data fetched once");
});

router.post("/tasks", async (req, res) => {
  const body = req.body;
  const resp = new TaskModel(body);
  //   console.log("taks:" + body);
  try {
    await resp.save();
    res.send("data reached to backend");
    console.log("New Task Added");
  } catch (error) {
    res.send("FROM BACKEND" + error.message);
    console.log(error.message);
  }
});
router.put("/tasks/:id", async (req, res) => {
  const body = req.body;
  const updated = {
    newTask: body.newTask,
  };
  // const task = new TaskModel(updated);
  try {
    await TaskModel.findByIdAndUpdate(req.params.id, updated);
    res.send("got at backend");
    console.log(req.params);
    console.log("Updated with ID " + req.params.id);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    await TaskModel.findByIdAndDelete(req.params.id);
    res.send("deleted");
    console.log("deleted with ID " + req.params.id);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

export default router;
