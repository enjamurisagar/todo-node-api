import mongoose from "mongoose";

const productSchema =new mongoose.Schema(
  {
    newTask:{type:String}
  }
);

const TaskModel = mongoose.model("Task", productSchema);

export default TaskModel