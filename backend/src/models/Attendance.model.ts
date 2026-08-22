import { Schema, model } from "mongoose";

const attendanceSchema = new Schema({
  employeeId: { type: Schema.Types.ObjectId, ref: "Employee", required: true },
  date: { type: Date, required: true }, checkIn: Date, checkOut: Date,
  status: { type: String, enum: ["present", "absent", "late", "half-day", "leave"], default: "present" },
  notes: String
}, { timestamps: true });
attendanceSchema.index({ employeeId: 1, date: 1 }, { unique: true });
export const Attendance = model("Attendance", attendanceSchema);
