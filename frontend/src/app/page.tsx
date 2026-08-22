
"use client";

import { useEffect, useState } from "react";
import { getHealth } from "@/lib/api";

export default function HomePage() {
	const [status, setStatus] = useState<"checking" | "connected" | "offline">("checking");

	useEffect(() => {
		getHealth()
			.then(() => setStatus("connected"))
			.catch(() => setStatus("offline"));
	}, []);

	return (
		<div className="app-shell">
			<aside className="sidebar">
				<div className="brand"><span className="brand-mark">D</span><span>Dayflow</span></div>
				<div className="workspace-label">WORKSPACE</div>
				<nav aria-label="Main navigation">
					<a className="nav-item active" href="#overview"><span>01</span>Overview</a>
					<a className="nav-item" href="#attendance"><span>02</span>Attendance</a>
					<a className="nav-item" href="#people"><span>03</span>People</a>
					<a className="nav-item" href="#time-off"><span>04</span>Time off</a>
					<a className="nav-item" href="#payroll"><span>05</span>Payroll</a>
				</nav>
				<div className="sidebar-bottom">
					<a className="nav-item" href="#settings"><span>06</span>Settings</a>
					<div className="profile-mini"><span className="avatar">AK</span><span><strong>Akash Kumar</strong><small>Administrator</small></span></div>
				</div>
			</aside>

			<main className="dashboard" id="overview">
				<header className="topbar">
					<div><p className="eyebrow">Monday, August 22, 2026</p><h1>Good morning, Akash<span className="accent">.</span></h1></div>
					<div className="topbar-actions"><button className="icon-button" aria-label="Search">⌕</button><button className="icon-button" aria-label="Notifications">♧</button><span className={`connection ${status}`}><i /> {status === "checking" ? "Connecting" : status === "connected" ? "Live" : "Offline"}</span></div>
				</header>

				<section className="welcome-row">
					<div><h2>Your people, in motion.</h2><p>One clear view of what is happening across your workspace today.</p></div>
					<button className="primary-button">+ Add employee</button>
				</section>

				<section className="stats-grid" aria-label="Workforce summary">
					<article className="stat-card stat-green"><span className="stat-label">Total employees</span><strong>248</strong><span className="stat-change">+12 this month</span><span className="stat-spark">↗</span></article>
					<article className="stat-card"><span className="stat-label">Present today</span><strong>214</strong><span className="stat-change">86.3% of team</span><span className="stat-spark">◒</span></article>
					<article className="stat-card stat-coral"><span className="stat-label">On leave</span><strong>18</strong><span className="stat-change">7 requests pending</span><span className="stat-spark">◷</span></article>
					<article className="stat-card"><span className="stat-label">Payroll this month</span><strong>$184.6k</strong><span className="stat-change">Due in 9 days</span><span className="stat-spark">$</span></article>
				</section>

				<section className="content-grid">
					<article className="panel attendance-panel" id="attendance"><div className="panel-heading"><div><p className="eyebrow">TODAY, AUG 22</p><h3>Attendance pulse</h3></div><a href="#attendance">View report ↗</a></div><div className="attendance-visual"><div className="donut"><span>86<span>%</span></span></div><div className="legend"><span><i className="dot present" />Present <b>214</b></span><span><i className="dot absent" />Absent <b>16</b></span><span><i className="dot leave" />On leave <b>18</b></span></div></div><div className="progress-label"><span>Team attendance</span><b>86.3%</b></div><div className="progress"><span /></div></article>
					<article className="panel activity-panel"><div className="panel-heading"><div><p className="eyebrow">REAL TIME</p><h3>Latest activity</h3></div><a href="#activity">See all ↗</a></div><div className="activity-list"><div className="activity"><span className="activity-avatar blue">MR</span><p><strong>Maria Rodriguez</strong><span>Checked in · 08:42 AM</span></p><b>Today</b></div><div className="activity"><span className="activity-avatar gold">JT</span><p><strong>James Thomas</strong><span>Requested annual leave</span></p><b>Today</b></div><div className="activity"><span className="activity-avatar pink">SC</span><p><strong>Sarah Chen</strong><span>Updated personal details</span></p><b>Yesterday</b></div></div></article>
				</section>

				<section className="bottom-grid">
					<article className="panel table-panel" id="people"><div className="panel-heading"><div><p className="eyebrow">PEOPLE DIRECTORY</p><h3>Team overview</h3></div><a href="#people">View all 248 ↗</a></div><div className="table-wrap"><table><thead><tr><th>Employee</th><th>Department</th><th>Status</th><th>Location</th></tr></thead><tbody><tr><td><span className="table-person"><span className="avatar small">MR</span><strong>Maria Rodriguez</strong></span></td><td>Design</td><td><span className="pill active-pill">Active</span></td><td>New York</td></tr><tr><td><span className="table-person"><span className="avatar small gold-bg">JT</span><strong>James Thomas</strong></span></td><td>Engineering</td><td><span className="pill leave-pill">On leave</span></td><td>London</td></tr><tr><td><span className="table-person"><span className="avatar small pink-bg">SC</span><strong>Sarah Chen</strong></span></td><td>Marketing</td><td><span className="pill active-pill">Active</span></td><td>Singapore</td></tr></tbody></table></div></article>
					<article className="panel leave-panel" id="time-off"><div className="panel-heading"><div><p className="eyebrow">TIME OFF</p><h3>Leave requests</h3></div><a href="#time-off">Review 7 ↗</a></div><div className="leave-summary"><strong>7</strong><span>requests need your review</span></div><div className="leave-bar"><span /><span /><span /><span /><span /><span /><span /></div><div className="leave-types"><span><i className="dot annual" />Annual leave <b>4</b></span><span><i className="dot sick" />Sick leave <b>2</b></span></div></article>
				</section>
			</main>
		</div>
	);
}
