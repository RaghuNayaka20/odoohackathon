import { Schema, model } from "mongoose";

const payrollSchema = new Schema({
  employeeId: { type: Schema.Types.ObjectId, ref: "Employee", required: true },
  month: { type: String, required: true }, basicSalary: Number, allowances: Number, deductions: Number,
  netSalary: Number, status: { type: String, enum: ["draft", "processed", "paid"], default: "draft" }, paidAt: Date
}, { timestamps: true });
export const Payroll = model("Payroll", payrollSchema);
