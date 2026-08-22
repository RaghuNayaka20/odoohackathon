import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true, select: false },
  role: { type: String, enum: ["admin", "hr", "employee"], default: "employee" },
  isVerified: { type: Boolean, default: false }
}, { timestamps: true });
export const User = model("User", userSchema);
