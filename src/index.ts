import { createServer } from "./server";
import config from "./config";
const server = createServer();

server.listen(config.port, () => {
	console.log(`app is runninfg on port:${config.port} , http://localhost:${config.port}`);
});
