'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, CalendarDays, ChevronDown, CircleDollarSign, LayoutDashboard, Settings, UserRound, Users, Bell, Clock3 } from 'lucide-react';

const groups = [
  { label: 'Workspace', items: [{ href: '/dashboard', label: 'Overview', icon: LayoutDashboard }, { href: '/employees', label: 'People', icon: Users }, { href: '/attendance', label: 'Attendance', icon: Clock3 }] },
  { label: 'Manage', items: [{ href: '/time-off', label: 'Time off', icon: CalendarDays }, { href: '/payroll', label: 'Payroll', icon: CircleDollarSign }, { href: '/analytics', label: 'Analytics', icon: BarChart3 }] },
];

export default function Sidebar() {
  const pathname = usePathname();
  return <aside className="sidebar">
    <Link href="/dashboard" className="brand"><span className="brand-mark">d</span><span>dayflow</span></Link>
    <div className="workspace-switcher"><span className="workspace-dot">A</span><span className="workspace-name">Acme Studio</span><ChevronDown size={15} /></div>
    <nav>{groups.map(group => <div className="nav-group" key={group.label}><p>{group.label}</p>{group.items.map(item => { const active = pathname === item.href || pathname.startsWith(item.href + '/'); const Icon = item.icon; return <Link className={active ? 'nav-link active' : 'nav-link'} href={item.href} key={item.href}><Icon size={18} strokeWidth={active ? 2.3 : 1.8} /><span>{item.label}</span></Link> })}</div>)}<div className="nav-group nav-bottom"><p>Personal</p><Link className={pathname === '/profile' ? 'nav-link active' : 'nav-link'} href="/profile"><UserRound size={18} /><span>My profile</span></Link><Link className={pathname === '/settings' ? 'nav-link active' : 'nav-link'} href="/settings"><Settings size={18} /><span>Settings</span></Link></div></nav>
    <div className="sidebar-footer"><div className="avatar avatar-small avatar-rose">AS</div><div><strong>Alex Smith</strong><small>Administrator</small></div><Bell size={17} /></div>
  </aside>;
}
