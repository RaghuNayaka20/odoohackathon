import Sidebar from '@/components/layout/Sidebar';
import AuthGuard from '@/components/layout/AuthGuard';

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <AuthGuard><div className="app-shell"><Sidebar /><main className="main-content">{children}</main></div></AuthGuard>;
}
