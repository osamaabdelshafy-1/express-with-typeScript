import express, { type Router } from "express";
import { getProject, listProjects, listProjectTasks } from "./controller.js";

const projects: Router = express.Router();

projects.get("/", listProjects);
projects.get("/:id", getProject);
projects.get("/:id/tasks", listProjectTasks);

export default projects;
