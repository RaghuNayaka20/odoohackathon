import type { UserRole } from '@/types/user';

export const canManagePeople = (role: UserRole) => role === 'admin';
export const canManagePayroll = (role: UserRole) => role === 'admin';
export const canApproveLeave = (role: UserRole) => role === 'admin';
