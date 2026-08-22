'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';
import { signIn } from '@/services/authService';

export default function SignIn() {
	const router = useRouter(); const searchParams = useSearchParams();
	const [email, setEmail] = useState('alex@acmestudio.co'); const [password, setPassword] = useState('password');
	const [showPassword, setShowPassword] = useState(false); const [remember, setRemember] = useState(true);
	const [error, setError] = useState(''); const [loading, setLoading] = useState(false);
	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault(); setError('');
		if (!email.trim() || !email.includes('@')) { setError('Enter a valid work email.'); return; }
		if (password.length < 6) { setError('Password must be at least 6 characters.'); return; }
		setLoading(true);
		try { await signIn(email, password, remember); router.replace(searchParams.get('next') || '/dashboard'); }
		catch (caught) { setError(caught instanceof Error ? caught.message : 'Unable to sign in. Please try again.'); setLoading(false); }
	}
	return <form className="auth-form" onSubmit={handleSubmit} noValidate><h1>Welcome back</h1><p>Sign in to your Dayflow workspace and pick up where you left off.</p><label className="form-field"><span className="form-label">Work email</span><input className="field" type="email" value={email} onChange={event=>setEmail(event.target.value)} placeholder="you@company.com" aria-invalid={Boolean(error)} /></label><label className="form-field"><span className="form-label">Password</span><div className="password-field"><input className="field" type={showPassword ? 'text' : 'password'} value={password} onChange={event=>setPassword(event.target.value)} placeholder="Enter your password"/><button type="button" className="password-toggle" onClick={()=>setShowPassword(value=>!value)} aria-label={showPassword ? 'Hide password' : 'Show password'}>{showPassword ? <EyeOff size={16}/> : <Eye size={16}/>}</button></div></label><div className="auth-options"><label><input type="checkbox" checked={remember} onChange={event=>setRemember(event.target.checked)}/> Remember me</label><Link href="/forgot-password" className="text-link">Forgot password?</Link></div>{error&&<p className="form-error" role="alert">{error}</p>}<button className="button button-primary" style={{width:'100%'}} disabled={loading}>{loading ? <><span className="button-spinner"/>Signing in...</> : 'Sign in'}</button><div className="auth-footer">New to Dayflow? <Link href="/sign-up">Create an account</Link></div></form>;
}
