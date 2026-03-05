import type { Request, Response } from "express";

export const getProject = (req: Request, res: Response) => {
	res.status(200).json({ id: 1, name: "project 1" });
};

export const listProjects = (req: Request, res: Response) => {
	res.status(200).json([]);
};

export const listProjectTasks = (req: Request, res: Response) => {
	res.status(200).json([]);
};
