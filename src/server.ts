import cors from "cors";
import express, { type Request, type Response } from "express";
import morgan from "morgan";
import config from "./config";
import v1 from "./routes/v1";
import errorHandler from "./middleware/error-handler";
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
	
	app.use("/v1", v1);
	app.use(errorHandler) ; 


	return app;
};
