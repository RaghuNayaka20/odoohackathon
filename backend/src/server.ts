import { app } from "./app.js";
import { connectDatabase } from "./config/database.js";
import { env } from "./config/env.js";

try {
	await connectDatabase();
	app.listen(env.port, () => console.log(`Dayflow API listening on http://localhost:${env.port}`));
} catch (error) {
	console.error("Unable to start Dayflow API", error);
	process.exitCode = 1;
}
