import config from "./config.js";
import { createServer } from "./server.js";

const server = createServer();

server.listen(config.port, () => {
	console.log(
		`app is running on port:${config.port} , http://localhost:${config.port}`,
	);
});
