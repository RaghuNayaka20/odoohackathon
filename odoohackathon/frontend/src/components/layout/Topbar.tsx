'use client';

import { Bell, Search, Plus } from 'lucide-react';
import Link from 'next/link';

export default function Topbar({ title, eyebrow }: { title: string; eyebrow?: string }) { return <header className="topbar"><div><p className="eyebrow">{eyebrow || 'Monday, August 19, 2024'}</p><h1>{title}</h1></div><div className="topbar-actions"><button className="icon-button" aria-label="Search"><Search size={19} /></button><Link href="/employees/new" className="button button-primary"><Plus size={17} />Add person</Link><button className="icon-button notification" aria-label="Notifications"><Bell size={19} /><i /></button></div></header>; }
