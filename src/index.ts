import config from "./config";
import { createServer } from "./server";

const server = createServer();

server.listen(config.port, () => {
	console.log(
		`app is runninfg on port:${config.port} , http://localhost:${config.port}`,
	);
});
