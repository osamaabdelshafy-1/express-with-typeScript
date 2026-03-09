import express, { type Router } from "express";
import { getTask, listTasks } from "./controller.js";

const tasks: Router = express.Router();

tasks.get("/", listTasks);
tasks.get("/:id", getTask);

export default tasks;
