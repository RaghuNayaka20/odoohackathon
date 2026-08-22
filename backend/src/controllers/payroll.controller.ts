import type { Request, Response } from "express";
import { Payroll } from "../models/Payroll.model.js";
import { success } from "../utils/response.js";

export async function listPayroll(request: Request, response: Response) { return success(response, await Payroll.find(request.query.employeeId ? { employeeId: request.query.employeeId } : {}).populate("employeeId").sort({ month: -1 })); }
export async function createPayroll(request: Request, response: Response) { const body = request.body; body.netSalary = Number(body.basicSalary ?? 0) + Number(body.allowances ?? 0) - Number(body.deductions ?? 0); return success(response, await Payroll.create(body), 201); }
export async function getPayroll(request: Request, response: Response) { return success(response, await Payroll.findById(request.params.id).populate("employeeId")); }
