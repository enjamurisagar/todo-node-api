import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 5000;

//routes
import router from "./routes/data.js";

app.use(express.json());
app.use(cors());
app.use(router);

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    app.listen(PORT, () => console.log("App Running on 5000"));
  })
  .catch((err) => console.log(err.message));

mongoose.connection.on("connected", () => console.log("Connected to MONGO DB"));
