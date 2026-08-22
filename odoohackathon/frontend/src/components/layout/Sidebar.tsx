'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, CalendarDays, ChevronDown, CircleDollarSign, LayoutDashboard, Settings, UserRound, Users, Bell, Clock3, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { canManagePeople, canManagePayroll } from '@/lib/permissions';

const groups = [
  { label: 'Workspace', items: [{ href: '/dashboard', label: 'Overview', icon: LayoutDashboard }, { href: '/employees', label: 'People', icon: Users }, { href: '/attendance', label: 'Attendance', icon: Clock3 }] },
  { label: 'Manage', items: [{ href: '/time-off', label: 'Time off', icon: CalendarDays }, { href: '/payroll', label: 'Payroll', icon: CircleDollarSign }, { href: '/analytics', label: 'Analytics', icon: BarChart3 }] },
];

export default function Sidebar() {
  const pathname = usePathname(); const { user, logout } = useAuth(); const role = user?.role || 'employee';
  const visibleGroups = groups.map(group => ({ ...group, items: group.items.filter(item => item.href !== '/employees' || canManagePeople(role)).filter(item => item.href !== '/payroll' || canManagePayroll(role)) })).filter(group => group.items.length);
  return <aside className="sidebar">
    <Link href="/dashboard" className="brand"><span className="brand-mark">d</span><span>dayflow</span></Link>
    <div className="workspace-switcher"><span className="workspace-dot">A</span><span className="workspace-name">Acme Studio</span><ChevronDown size={15} /></div>
    <nav>{visibleGroups.map(group => <div className="nav-group" key={group.label}><p>{group.label}</p>{group.items.map(item => { const active = pathname === item.href || pathname.startsWith(item.href + '/'); const Icon = item.icon; return <Link className={active ? 'nav-link active' : 'nav-link'} href={item.href} key={item.href}><Icon size={18} strokeWidth={active ? 2.3 : 1.8} /><span>{item.label}</span></Link> })}</div>)}<div className="nav-group nav-bottom"><p>Personal</p><Link className={pathname === '/profile' ? 'nav-link active' : 'nav-link'} href="/profile"><UserRound size={18} /><span>My profile</span></Link><Link className={pathname === '/settings' ? 'nav-link active' : 'nav-link'} href="/settings"><Settings size={18} /><span>Settings</span></Link><button className="nav-link nav-button" onClick={logout}><LogOut size={18}/><span>Sign out</span></button></div></nav>
    <div className="sidebar-footer"><div className="avatar avatar-small avatar-rose">{user?.initials || 'AS'}</div><div><strong>{user?.name || 'Alex Smith'}</strong><small>{user?.role === 'employee' ? 'Employee' : 'Administrator'}</small></div><Link href="/notifications" aria-label="Notifications"><Bell size={17} /></Link></div>
  </aside>;
}
