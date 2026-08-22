import { mockAttendance } from '@/data/mockAttendance';
import type { AttendanceRecord } from '@/types/attendance';
export async function getAttendance(): Promise<AttendanceRecord[]> { return Promise.resolve(mockAttendance); }
export async function updateAttendance(record: AttendanceRecord): Promise<AttendanceRecord> { return Promise.resolve(record); }
