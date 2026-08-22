import type { Request, Response } from "express";
import { Attendance } from "../models/Attendance.model.js";
import { success } from "../utils/response.js";

export async function listAttendance(request: Request, response: Response) { return success(response, await Attendance.find(request.query.employeeId ? { employeeId: request.query.employeeId } : {}).populate("employeeId").sort({ date: -1 })); }
export async function checkIn(request: Request, response: Response) { const date = new Date(request.body.date ?? new Date()); return success(response, await Attendance.findOneAndUpdate({ employeeId: request.body.employeeId, date: { $gte: new Date(date.setHours(0, 0, 0, 0)), $lt: new Date(date.setHours(23, 59, 59, 999)) } }, { $set: { checkIn: new Date(), status: "present" }, $setOnInsert: { employeeId: request.body.employeeId, date } }, { upsert: true, new: true }), 201); }
export async function checkOut(request: Request, response: Response) { return success(response, await Attendance.findByIdAndUpdate(request.params.id, { checkOut: new Date() }, { new: true })); }
