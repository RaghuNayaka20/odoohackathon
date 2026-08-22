"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Bell, CalendarDays, ChevronDown, Clock3, Command, FileText, LayoutDashboard, LockKeyhole, LogOut, Mail, Menu, Search, Settings, Sparkles, Users, WalletCards, X, Zap } from "lucide-react";

const stats = [
  { label: "Present today", value: "94.8%", note: "+2.4% vs last week", tone: "mint", icon: Clock3 },
  { label: "People on leave", value: "08", note: "3 requests pending", tone: "amber", icon: CalendarDays },
  { label: "Monthly payroll", value: "$248.6k", note: "Processed 2 days ago", tone: "violet", icon: WalletCards },
  { label: "Open roles", value: "12", note: "Across 4 departments", tone: "cyan", icon: Users },
];

const activity = [
  ["Leave request approved", "Maya Patel · Product Designer", "8 min ago", "mint"],
  ["Payroll processed", "January payroll is ready to review", "42 min ago", "violet"],
  ["New teammate joined", "Noah Williams · Engineering", "2 hrs ago", "cyan"],
  ["Attendance reminder", "3 check-ins are still missing", "Yesterday", "amber"],
];

function NavItem({ icon: Icon, label, active, onClick }: { icon: typeof LayoutDashboard; label: string; active?: boolean; onClick: () => void }) {
  return <button onClick={onClick} className={`nav-item ${active ? "active" : ""}`}><Icon size={17} strokeWidth={active ? 2.3 : 1.8} /><span>{label}</span>{label === "Notifications" && <b className="nav-badge">3</b>}</button>;
}

const sectionDetails: Record<string, { eyebrow: string; title: string; description: string; rows: [string, string, string][] }> = {
  Employees: { eyebrow: "People directory", title: "Your people, in one place", description: "Search your workforce, review roles, and keep employee details current.", rows: [["Maya Patel", "Product Design", "Active"], ["Noah Williams", "Engineering", "New starter"], ["Sofia Chen", "Operations", "Active"]] },
  Attendance: { eyebrow: "Workforce operations", title: "Attendance overview", description: "Monitor check-ins, late arrivals, and daily coverage across teams.", rows: [["Engineering", "312 checked in", "96%"], ["Product", "184 checked in", "94%"], ["Operations", "226 checked in", "91%"]] },
  "Time off": { eyebrow: "Leave management", title: "Time off requests", description: "Keep leave balances clear and requests moving with less back-and-forth.", rows: [["Maya Patel", "Paid leave · Feb 14", "Approved"], ["Jon Bell", "Sick leave · Feb 11", "Pending"], ["Priya Shah", "Paid leave · Feb 21", "Pending"]] },
  Approvals: { eyebrow: "Smart approval center", title: "Needs your attention", description: "Review the requests that need a decision from your team today.", rows: [["Jon Bell", "Sick leave · 1 day", "Review"], ["Priya Shah", "Paid leave · 3 days", "Review"], ["David Kim", "Expense policy", "Review"]] },
  Payroll: { eyebrow: "Compensation", title: "Payroll control room", description: "Review payroll status and keep your monthly compensation cycle on track.", rows: [["February payroll", "1,316 employees", "Processing"], ["January payroll", "$248,600 net", "Complete"], ["Tax documents", "48 pending", "Review"]] },
  Analytics: { eyebrow: "Workforce intelligence", title: "See the signals behind the numbers", description: "Attendance, retention, and engagement trends for your workforce.", rows: [["Workforce health", "92.4 / 100", "+8.6%"], ["Attendance rate", "94.8%", "+2.4%"], ["Retention", "89%", "+1.8%"]] },
  Notifications: { eyebrow: "Updates", title: "Notification center", description: "Stay current on leave approvals, payroll, and attendance reminders.", rows: [["Leave request approved", "Maya Patel", "8 min ago"], ["Payroll processed", "January payroll", "42 min ago"], ["Attendance reminder", "3 missing check-ins", "Yesterday"]] },
  Administration: { eyebrow: "Workspace controls", title: "Administration", description: "Manage workspace preferences, access, and notification rules.", rows: [["Workspace profile", "Acme Corporation", "Configured"], ["Access controls", "12 administrators", "Review"], ["Notifications", "Email + in-app", "Active"]] },
  Profile: { eyebrow: "Your account", title: "Alex Rivera", description: "Administrator profile and personal workspace preferences.", rows: [["Role", "Administrator", "Active"], ["Email", "alex@acme.co", "Verified"], ["Last sign-in", "Today · 09:02 AM", "Secure"]] },
};

function ActionDialog({ title, onClose }: { title: string; onClose: () => void }) {
  return <div className="dialog-backdrop" onClick={onClose}><div className="dialog" onClick={(event) => event.stopPropagation()}><div className="dialog-head"><div><p className="section-kicker">Dayflow workspace</p><h2>{title}</h2></div><button className="dialog-close" onClick={onClose}><X size={18} /></button></div><form onSubmit={(event) => { event.preventDefault(); onClose(); }}><label>Full name<input required placeholder="e.g. Jordan Lee" /></label><label>Work email<input required type="email" placeholder="jordan@acme.co" /></label><label>Department<select defaultValue="Engineering"><option>Engineering</option><option>Product Design</option><option>Operations</option><option>People</option></select></label><div className="dialog-actions"><button type="button" className="secondary-button" onClick={onClose}>Cancel</button><button className="primary-button" type="submit">Save changes</button></div></form></div></div>;
}

function LoginPanel({ onLogin }: { onLogin: () => void }) {
  const [error, setError] = useState("");
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "");
    const password = String(form.get("password") ?? "");
    if (!email.includes("@") || password.length < 8) return setError("Enter a valid email and a password with at least 8 characters.");
    window.localStorage.setItem("dayflow-session", "active");
    onLogin();
  };
  return <main className="auth-page"><div className="auth-brand"><div className="brand-mark">D</div><strong>DAYFLOW</strong></div><section className="auth-card"><p className="eyebrow"><Sparkles size={13} /> Welcome back</p><h1>Sign in to your workspace</h1><p className="muted">Keep every workday perfectly aligned.</p><form onSubmit={submit}><label>Work email<div className="auth-input"><Mail size={16} /><input name="email" type="email" placeholder="you@company.com" required /></div></label><label>Password<div className="auth-input"><LockKeyhole size={16} /><input name="password" type="password" placeholder="Enter your password" required minLength={8} /></div></label>{error && <p className="auth-error">{error}</p>}<button className="primary-button auth-submit" type="submit">Sign in <ArrowRight size={16} /></button></form><p className="auth-footer">New to Dayflow? <a href="/sign-up">Create an account</a></p></section><p className="auth-caption">DAYFLOW · WORKFORCE OPERATIONS</p></main>;
}

function SectionView({ section, onAction }: { section: string; onAction: (title: string) => void }) {
  const details = sectionDetails[section];
  if (!details) return null;
  return <div className="section-view"><p className="eyebrow"><Sparkles size={13} /> {details.eyebrow}</p><div className="section-view-head"><div><h1>{details.title}</h1><p className="muted">{details.description}</p></div><button className="primary-button" onClick={() => onAction(section === "Profile" ? "Edit profile" : `New ${section} action`)}><Zap size={16} /> {section === "Profile" ? "Edit profile" : "New action"}</button></div><div className="section-table">{details.rows.map(([name, value, status]) => <div className="section-row" key={name}><div><strong>{name}</strong><span>{value}</span></div><b>{status}</b><button className="row-action" onClick={() => onAction(`View ${name}`)}>View <span>→</span></button></div>)}</div></div>;
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");
  const [checkedIn, setCheckedIn] = useState(true);
  const [dialogTitle, setDialogTitle] = useState<string | null>(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    const section = new URLSearchParams(window.location.search).get("section");
    if (section && (section === "Dashboard" || sectionDetails[section])) setActive(section);
    setAuthenticated(window.localStorage.getItem("dayflow-session") === "active");
    setAuthReady(true);
  }, []);

  const navigate = (section: string) => {
    setActive(section);
    window.history.pushState({}, "", section === "Dashboard" ? "/" : `/?section=${encodeURIComponent(section)}`);
    setMobileOpen(false);
  };

  if (!authReady) return null;
  if (!authenticated) return <LoginPanel onLogin={() => setAuthenticated(true)} />;

  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileOpen ? "open" : ""}`}>
        <div className="brand"><div className="brand-mark">D</div><div><strong>DAYFLOW</strong><small>Every workday, perfectly aligned.</small></div><button className="mobile-close" onClick={() => setMobileOpen(false)}><X size={18} /></button></div>
        <div className="workspace-switch"><span className="workspace-dot" />Acme Corporation <ChevronDown size={14} /></div>
        <nav>
          <p className="nav-label">Overview</p><NavItem icon={LayoutDashboard} label="Dashboard" active={active === "Dashboard"} onClick={() => navigate("Dashboard")} />
          <p className="nav-label">People</p><NavItem icon={Users} label="Employees" active={active === "Employees"} onClick={() => navigate("Employees")} />
          <p className="nav-label">Workforce</p><NavItem icon={Clock3} label="Attendance" active={active === "Attendance"} onClick={() => navigate("Attendance")} /><NavItem icon={CalendarDays} label="Time off" active={active === "Time off"} onClick={() => navigate("Time off")} /><NavItem icon={FileText} label="Approvals" active={active === "Approvals"} onClick={() => navigate("Approvals")} /><NavItem icon={WalletCards} label="Payroll" active={active === "Payroll"} onClick={() => navigate("Payroll")} />
          <p className="nav-label">Insights</p><NavItem icon={Zap} label="Analytics" active={active === "Analytics"} onClick={() => navigate("Analytics")} />
          <p className="nav-label">System</p><NavItem icon={Bell} label="Notifications" active={active === "Notifications"} onClick={() => navigate("Notifications")} /><NavItem icon={Settings} label="Administration" active={active === "Administration"} onClick={() => navigate("Administration")} />
        </nav>
        <div className="sidebar-bottom"><NavItem icon={Settings} label="Profile" active={active === "Profile"} onClick={() => navigate("Profile")} /><button className="logout" onClick={() => { window.localStorage.removeItem("dayflow-session"); setAuthenticated(false); window.history.replaceState({}, "", "/"); }}><LogOut size={17} />Log out</button><div className="user-chip"><div className="avatar">AR</div><div><strong>Alex Rivera</strong><small>{authenticated ? "Administrator" : "Demo workspace"}</small></div><ChevronDown size={14} /></div></div>
      </aside>
      {mobileOpen && <button className="scrim" onClick={() => setMobileOpen(false)} aria-label="Close navigation" />}
      <main className="main-content">
        <header className="topbar"><button className="mobile-menu" onClick={() => setMobileOpen(true)}><Menu size={21} /></button><div className="crumb"><span>Workspace</span><b>/</b><strong>{active}</strong></div><div className="top-actions"><button className="search-box" onClick={() => setDialogTitle("Search anything") }><Search size={16} /><span>Search anything...</span><kbd><Command size={11} /> K</kbd></button><button className="icon-button" onClick={() => navigate("Notifications")}><Bell size={18} /><i /></button><div className="top-avatar">AR</div></div></header>
        <div className="content-wrap">{active !== "Dashboard" && <SectionView section={active} onAction={setDialogTitle} />}{active === "Dashboard" && <>
          <div className="page-intro"><div><p className="eyebrow"><Sparkles size={13} /> Monday, February 10, 2025</p><h1>Good morning, Alex <span>✦</span></h1><p className="muted">Here&apos;s what&apos;s happening across your workforce today.</p></div><button className="primary-button" onClick={() => setDialogTitle("Add employee")}><Users size={16} /> Add employee</button></div>
          <section className="stats-grid">{stats.map(({ icon: Icon, ...stat }) => <div className={`stat-card ${stat.tone}`} key={stat.label}><div className="stat-top"><span>{stat.label}</span><div className="stat-icon"><Icon size={17} /></div></div><strong>{stat.value}</strong><small>{stat.note}</small></div>)}</section>
          <section className="grid-two"><div className="panel attendance-panel"><div className="panel-heading"><div><p className="section-kicker">Live overview</p><h2>Attendance pulse</h2></div><span className="live"><i /> Live</span></div><div className="pulse-row"><div className="pulse-number">1,248 <small>/ 1,316</small></div><span className="pulse-label">people checked in</span></div><div className="progress"><span /></div><div className="pulse-meta"><span><i className="dot mint-dot" />On time <b>1,102</b></span><span><i className="dot amber-dot" />Late <b>146</b></span><span><i className="dot gray-dot" />Away <b>68</b></span></div><div className="chart"><div className="chart-bars">{[34, 48, 42, 68, 55, 74, 60, 82, 78, 92, 86, 98, 92, 100].map((height, i) => <span key={i} style={{ height: `${height}%` }} />)}</div><div className="chart-labels"><span>8 AM</span><span>10 AM</span><span>12 PM</span><span>2 PM</span><span>4 PM</span></div></div></div><div className="panel health-panel"><div className="panel-heading"><div><p className="section-kicker">Team wellbeing</p><h2>Workforce health</h2></div><button className="more">•••</button></div><div className="health-score"><div className="score-ring"><strong>92.4</strong><small>/ 100</small></div><div><strong>Excellent</strong><p>Up 4.2 points this month</p><span className="trend">↗ 8.6%</span></div></div><div className="health-list"><div><span className="health-key"><i className="dot violet-dot" />Engagement</span><b>94%</b></div><div><span className="health-key"><i className="dot cyan-dot" />Attendance</span><b>91%</b></div><div><span className="health-key"><i className="dot mint-dot" />Retention</span><b>89%</b></div></div><button className="text-button">View workforce insights <span>→</span></button></div></section>
          <section className="grid-two lower"><div className="panel activity-panel"><div className="panel-heading"><div><p className="section-kicker">Stay in the loop</p><h2>Recent activity</h2></div><button className="text-button">View all <span>→</span></button></div><div className="activity-list">{activity.map(([title, detail, time, tone]) => <div className="activity-row" key={title}><i className={`activity-icon ${tone}`}><Sparkles size={15} /></i><div><strong>{title}</strong><span>{detail}</span></div><time>{time}</time></div>)}</div></div><div className="panel checkin-panel"><div className="panel-heading"><div><p className="section-kicker">Your day</p><h2>Time tracking</h2></div><span className="date-pill">Feb 10</span></div><div className="clock">09<span>:</span>42<span>:</span>18</div><p className="clock-status"><i className={checkedIn ? "active-dot" : ""} />{checkedIn ? "You&apos;re currently working" : "You&apos;re checked out"}</p><div className="time-row"><span>Checked in at <b>09:14 AM</b></span><span>Today <b>06h 28m</b></span></div><button className={`check-button ${checkedIn ? "" : "checked"}`} onClick={() => setCheckedIn(!checkedIn)}><Clock3 size={16} />{checkedIn ? "Check out" : "Check in"}</button></div></section>
        </>}{dialogTitle && <ActionDialog title={dialogTitle} onClose={() => setDialogTitle(null)} />}
        </div>
      </main>
      {!authReady && null}
    </div>
  );
}
