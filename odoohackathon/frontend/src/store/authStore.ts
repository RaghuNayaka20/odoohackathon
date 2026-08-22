import type { AuthUser } from '@/types/user';

export type AuthState = { user: AuthUser | null; loading: boolean; error: string | null };
export const initialAuthState: AuthState = { user: null, loading: true, error: null };
