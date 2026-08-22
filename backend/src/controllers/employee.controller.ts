import type { Request, Response } from "express";
import { Employee } from "../models/Employee.model.js";
import { success } from "../utils/response.js";

export async function listEmployees(request: Request, response: Response) {
  const filter = request.query.search ? { $or: [{ firstName: new RegExp(String(request.query.search), "i") }, { lastName: new RegExp(String(request.query.search), "i") }, { employeeId: new RegExp(String(request.query.search), "i") }] } : {};
  return success(response, await Employee.find(filter).sort({ createdAt: -1 }));
}
export async function getEmployee(request: Request, response: Response) { return success(response, await Employee.findById(request.params.id)); }
export async function createEmployee(request: Request, response: Response) { return success(response, await Employee.create(request.body), 201); }
export async function updateEmployee(request: Request, response: Response) { return success(response, await Employee.findByIdAndUpdate(request.params.id, request.body, { new: true, runValidators: true })); }
export async function deleteEmployee(request: Request, response: Response) { await Employee.findByIdAndDelete(request.params.id); return response.status(204).send(); }
