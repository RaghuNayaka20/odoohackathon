import type { Request, Response } from "express";
import { Employee } from "../models/Employee.model.js";
import { Attendance } from "../models/Attendance.model.js";
import { Leave } from "../models/Leave.model.js";
import { success } from "../utils/response.js";

export async function dashboard(_request: Request, response: Response) { const [employees, attendance, pendingLeaves] = await Promise.all([Employee.countDocuments({ status: "active" }), Attendance.countDocuments({ status: "present", date: { $gte: new Date(new Date().setHours(0, 0, 0, 0)) } }), Leave.countDocuments({ status: "pending" })]); return success(response, { employees, attendance, pendingLeaves }); }
