'use client';
import { useEffect, useState } from 'react';
import { clearUser, getStoredUser } from '@/lib/auth';
import type { AuthUser } from '@/types/user';

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => { setUser(getStoredUser()); setLoading(false); }, []);
  return { user, loading, isAuthenticated: Boolean(user), setUser, logout: () => { clearUser(); setUser(null); } };
}
