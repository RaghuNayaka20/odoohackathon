import type { Request, Response } from "express";
import { Leave } from "../models/Leave.model.js";
import { success } from "../utils/response.js";

export async function listLeaves(request: Request, response: Response) { return success(response, await Leave.find(request.query.employeeId ? { employeeId: request.query.employeeId } : {}).populate("employeeId").sort({ createdAt: -1 })); }
export async function createLeave(request: Request, response: Response) { return success(response, await Leave.create(request.body), 201); }
export async function reviewLeave(request: Request, response: Response) { return success(response, await Leave.findByIdAndUpdate(request.params.id, { status: request.body.status, reviewedBy: response.locals.auth.userId }, { new: true, runValidators: true })); }
