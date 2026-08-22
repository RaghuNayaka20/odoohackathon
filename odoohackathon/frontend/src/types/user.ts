export type UserRole = 'employee' | 'admin';
export type AuthUser = { id: string; name: string; email: string; role: UserRole; initials: string };
