import { Schema, model } from "mongoose";

const employeeSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  employeeId: { type: String, required: true, unique: true },
  firstName: { type: String, required: true }, lastName: { type: String, required: true },
  email: { type: String, required: true, lowercase: true }, phone: String,
  department: String, position: String, status: { type: String, enum: ["active", "inactive"], default: "active" },
  joiningDate: Date, salary: Number, avatar: String, address: String
}, { timestamps: true });
export const Employee = model("Employee", employeeSchema);
