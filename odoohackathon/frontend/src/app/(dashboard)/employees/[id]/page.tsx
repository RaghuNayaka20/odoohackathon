import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import Topbar from '@/components/layout/Topbar';
import Avatar from '@/components/ui/Avatar';
import Badge from '@/components/ui/Badge';
import { employees } from '@/lib/data';

export default async function EmployeePage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	const person = employees.find(employee => employee.id === id) || employees[0];
	return <><Topbar title={person.name} eyebrow="People / Profile" /><div className="page-width" style={{maxWidth:900}}><Link href="/employees" className="text-link" style={{display:'inline-flex',gap:6,alignItems:'center',marginBottom:18}}><ArrowLeft size={14}/>Back to people</Link><section className="panel" style={{padding:28}}><div style={{display:'flex',alignItems:'center',gap:18,borderBottom:'1px solid var(--line)',paddingBottom:25}}><Avatar initials={person.initials} color={person.color}/><div style={{flex:1}}><h2 style={{marginBottom:5}}>{person.name}</h2><p style={{margin:0,color:'var(--muted)',fontSize:13}}>{person.role} · {person.department}</p></div><Badge tone={person.status==='Active'?'green':'amber'}>{person.status}</Badge></div><div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:20,paddingTop:25}}><div><p className="eyebrow">Contact</p><p style={{fontSize:13}}><Mail size={15} style={{verticalAlign:'middle',marginRight:8}}/>{person.email}</p><p style={{fontSize:13}}><Phone size={15} style={{verticalAlign:'middle',marginRight:8}}/>+1 (555) 014-2084</p></div><div><p className="eyebrow">Work details</p><p style={{fontSize:13}}><MapPin size={15} style={{verticalAlign:'middle',marginRight:8}}/>New York, United States</p><p style={{fontSize:13,color:'var(--muted)'}}>Joined {person.joined}</p></div></div></section></div></>;
}
