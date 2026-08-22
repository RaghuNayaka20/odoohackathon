import type { AttendanceRecord } from '@/types/attendance';
export const mockAttendance: AttendanceRecord[] = [
  { id: 'att-1', employeeId: 'maya-chen', date: '2024-08-19', checkIn: '08:52 AM', checkOut: null, workingHours: '6h 18m', status: 'Present' },
  { id: 'att-2', employeeId: 'jordan-rivera', date: '2024-08-19', checkIn: '09:17 AM', checkOut: null, workingHours: '5h 53m', status: 'Present' },
  { id: 'att-3', employeeId: 'noah-williams', date: '2024-08-19', checkIn: '09:04 AM', checkOut: null, workingHours: '6h 06m', status: 'Late' },
  { id: 'att-4', employeeId: 'samira-patel', date: '2024-08-19', checkIn: null, checkOut: null, workingHours: '0h', status: 'Leave' },
];
