import express, { type Router } from "express";
import projects from "./projects";
import tasks from "./tasks";

// this is a router that combine sub router together .

const v1: Router = express.Router();

v1.use("/tasks", tasks);
v1.use("/projects", projects);

export default v1;
