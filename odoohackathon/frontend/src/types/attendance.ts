export type AttendanceStatus = 'Present' | 'Absent' | 'Late' | 'Half Day' | 'Leave';
export type AttendanceRecord = { id: string; employeeId: string; date: string; checkIn: string | null; checkOut: string | null; workingHours: string; status: AttendanceStatus };
