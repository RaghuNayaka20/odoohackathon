import Link from 'next/link';

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <main className="auth-layout"><div className="auth-decoration"><div className="auth-wordmark"><span className="brand-mark">d</span>dayflow</div><div className="auth-quote">"The best work happens when people have room to do their best work."<small>Dayflow for thoughtful teams</small></div></div><section className="auth-panel"><Link href="/dashboard" className="mobile-brand"><span className="brand-mark">d</span>dayflow</Link>{children}</section></main>;
}
