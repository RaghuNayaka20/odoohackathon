import { connectDatabase } from "../config/database.js";
import { User } from "../models/User.model.js";
import { hashPassword } from "../utils/password.js";

await connectDatabase();
await User.updateOne({ email: "admin@dayflow.local" }, { name: "Dayflow Admin", email: "admin@dayflow.local", passwordHash: await hashPassword("ChangeMe123!"), role: "admin", isVerified: true }, { upsert: true });
console.log("Admin seed complete: admin@dayflow.local / ChangeMe123!");
process.exit(0);
