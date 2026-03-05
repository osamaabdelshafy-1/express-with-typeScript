import type { Request, Response } from "express";

export const getTask = (req: Request, res: Response) => {
	res.status(200).json({ id: 1, name: "task 1" });
};

export const listTasks = (req: Request, res: Response) => {
	res.status(200).json([]);
};
