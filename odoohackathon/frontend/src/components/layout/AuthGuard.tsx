'use client';
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter(); const pathname = usePathname(); const { loading, isAuthenticated } = useAuth();
  useEffect(() => { if (!loading && !isAuthenticated) router.replace(`/sign-in?next=${encodeURIComponent(pathname)}`); }, [loading, isAuthenticated, pathname, router]);
  if (loading || !isAuthenticated) return <div className="loading-screen"><span className="spinner" />Loading your workspace...</div>;
  return children;
}
