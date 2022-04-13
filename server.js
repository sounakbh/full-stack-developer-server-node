import express from "express";
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/users-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

mongoose
  .connect(
    "mongodb+srv://sounakbh:newpassword@cluster0.ttosy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then((_) => console.log("Success!"))
  .catch((e) => console.log("Failed!"));

app.use(cors());
app.use(express.json());

helloController(app);
userController(app);
tuitsController(app);

app.get("/", (req, res) => {
  res.send("Welcome to Full Stack Development!");
});

app.listen(process.env.PORT || 4000);
