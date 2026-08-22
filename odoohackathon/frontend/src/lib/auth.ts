import type { AuthUser, UserRole } from '@/types/user';

export const AUTH_STORAGE_KEY = 'dayflow.auth';
export const DEMO_USERS: Record<string, { password: string; user: AuthUser }> = {
  'alex@acmestudio.co': { password: 'password', user: { id: 'alex-smith', name: 'Alex Smith', email: 'alex@acmestudio.co', role: 'admin', initials: 'AS' } },
  'maya.chen@dayflow.co': { password: 'password', user: { id: 'maya-chen', name: 'Maya Chen', email: 'maya.chen@dayflow.co', role: 'employee', initials: 'MC' } },
};

export function getStoredUser(): AuthUser | null {
  if (typeof window === 'undefined') return null;
  try { return JSON.parse(window.localStorage.getItem(AUTH_STORAGE_KEY) || 'null') as AuthUser | null; } catch { return null; }
}
export function saveUser(user: AuthUser, remember = true) { if (typeof window !== 'undefined' && remember) window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user)); }
export function clearUser() { if (typeof window !== 'undefined') window.localStorage.removeItem(AUTH_STORAGE_KEY); }
export function roleLabel(role: UserRole) { return role === 'admin' ? 'HR / Administrator' : 'Employee'; }
