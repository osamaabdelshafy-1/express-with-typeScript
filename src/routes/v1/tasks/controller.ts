import type { NextFunction, Request, Response } from "express";
import EntityNotFoundError from "../../../error/EntityNotFoundError.js";
import {prisma} from "../../../lib/prisma.js"

export const getTask = async (req: Request, res: Response , next:NextFunction ) => {
	
	const task = await prisma.task.findUnique({
		where:{
			id:req.params.id as string 
		}
	})
	if (!task)
		throw new EntityNotFoundError({
			message: "task is not found" , 
			statusCode: 404 , 
			code : "ERR_NF"
		})
	res.status(200).json({ task });
};

export const listTasks = async (req: Request, res: Response) => {
	const tasks  = await prisma.task.findMany();
	res.status(200).json({tasks});
};
