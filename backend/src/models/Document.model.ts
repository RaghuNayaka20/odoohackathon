import { Schema, model } from "mongoose";

const documentSchema = new Schema({
  employeeId: { type: Schema.Types.ObjectId, ref: "Employee", required: true }, name: { type: String, required: true },
  filename: { type: String, required: true }, path: { type: String, required: true }, mimeType: String, size: Number
}, { timestamps: true });
export const Document = model("Document", documentSchema);
