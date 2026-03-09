import type { Request, Response } from "express";
import {prisma} from "../../../lib/prisma.js"
import EntityNotFoundError from "../../../error/EntityNotFoundError.js";

export const getProject = async (req: Request, res: Response) => {
	
	const project = await prisma.project.findUnique({
		where:{
			id:req.params.id as string,
		}
	});
	if(!project) {
		throw new EntityNotFoundError({
			message:"project Not found" , 
			statusCode : 404,
			code:"ERR_NF" 
		})
	}

	res.status(200).json({ project });
};

export const listProjects = async (req: Request, res: Response) => {
	const projects  = await prisma.project.findMany() ;
	if(projects.length > 0)
		return res.status(200).json({projects});
	else 	
		throw new EntityNotFoundError({
			message:"projects Not found" , 
			statusCode : 404,
			code:"ERR_NF"})
};

export const listProjectTasks = async(req: Request, res: Response) => {
	 const tasks = await prisma.task.findMany({
		where:{
			project_id:req.params.id as string
		}
	 })
};
