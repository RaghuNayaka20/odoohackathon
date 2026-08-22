import type { AttendanceRecord } from '@/types/attendance';
export type AttendanceState = { records: AttendanceRecord[]; loading: boolean; error: string | null };
export const initialAttendanceState: AttendanceState = { records: [], loading: false, error: null };
