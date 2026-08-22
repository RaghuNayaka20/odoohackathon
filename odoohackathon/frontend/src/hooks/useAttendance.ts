'use client';
import { useEffect, useState } from 'react';
import { getAttendance } from '@/services/attendanceService';
import type { AttendanceRecord } from '@/types/attendance';
export function useAttendance(employeeId?: string) { const [records,setRecords]=useState<AttendanceRecord[]>([]); const [loading,setLoading]=useState(true); const [error,setError]=useState(''); useEffect(()=>{getAttendance().then(data=>setRecords(employeeId ? data.filter(record=>record.employeeId===employeeId) : data)).catch(()=>setError('Unable to load attendance.')).finally(()=>setLoading(false));},[employeeId]); return { records, loading, error, today: records[0] || null }; }
