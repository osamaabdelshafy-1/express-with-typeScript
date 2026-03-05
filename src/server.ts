import cors from "cors";
import express, { type Request, type Response } from "express";
import morgan from "morgan";
import config from "./config";
export const createServer = () => {
	const app = express();

	// By default, when you send an HTTP response from Express, it includes this header:
	// X-Powered-By: Express
	// Without disable → anyone (like a browser, Postman, or an attacker) can see: “This server is running Express.”
	app
		.disable("x-powered-by")
		.use(morgan("dev"))
		.use(express.json())
		.use(cors())
		.use(express.urlencoded({ extended: true }));

	app.get("/health", (_: Request, res: Response) => {
		res.json({ ok: true, environment: config.env });
	});

	return app;
};
