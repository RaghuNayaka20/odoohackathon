import { Schema, model } from "mongoose";

const leaveSchema = new Schema({
  employeeId: { type: Schema.Types.ObjectId, ref: "Employee", required: true },
  type: { type: String, enum: ["annual", "sick", "casual", "unpaid"], required: true },
  startDate: { type: Date, required: true }, endDate: { type: Date, required: true },
  reason: String, status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" }, reviewedBy: { type: Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });
export const Leave = model("Leave", leaveSchema);
