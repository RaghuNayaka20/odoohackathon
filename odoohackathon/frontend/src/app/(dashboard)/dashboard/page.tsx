import Link from 'next/link';
import { ArrowUpRight, CalendarDays, Clock3, FileText, Users } from 'lucide-react';
import Topbar from '@/components/layout/Topbar';
import Avatar from '@/components/ui/Avatar';
import Badge from '@/components/ui/Badge';
import { activities } from '@/lib/data';
import WelcomeHeader from '@/components/dashboard/WelcomeHeader';
import StatsCards from '@/components/dashboard/StatsCards';
import AttendanceCard from '@/components/dashboard/AttendanceCard';

export default function DashboardPage() { return <><Topbar title="Good morning, Alex" /><div className="dashboard-grid"><WelcomeHeader /><StatsCards /><div className="dashboard-columns"><div><AttendanceCard /><section className="panel activity-panel"><div className="panel-heading"><h2>Recent activity</h2><Link className="text-link" href="/notifications">See all</Link></div><div className="activity-list">{activities.map(([name, action, time, initials]) => <div className="activity" key={name}><Avatar initials={initials} /><div className="activity-text"><span><strong>{name}</strong> {action}</span><small>{time}</small></div><ArrowUpRight size={15} color="#98a49c" /></div>)}</div></section></div><section className="panel leave-card"><div className="panel-heading" style={{padding:'0 0 7px'}}><h2>Time off balance</h2><Link className="text-link" href="/time-off">Manage</Link></div><div className="balance-row"><div className="balance-icon"><CalendarDays size={17} /></div><div>Annual leave<small>Used this year</small></div><strong>12 / 25</strong></div><div className="balance-row"><div className="balance-icon"><Clock3 size={17} /></div><div>Sick leave<small>Used this year</small></div><strong>3 / 12</strong></div><div className="balance-row"><div className="balance-icon"><Users size={17} /></div><div>People out today<small>Across the team</small></div><strong>3</strong></div><Link href="/time-off/request" className="button button-quiet" style={{width:'100%',marginTop:20}}>Request time off</Link></section></div></div></> }
