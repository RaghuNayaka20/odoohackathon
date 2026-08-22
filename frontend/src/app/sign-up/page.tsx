"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowRight, Building2, Eye, EyeOff, LockKeyhole, Mail, Sparkles, UserRound } from "lucide-react";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const password = String(form.get("password") ?? "");
    const confirm = String(form.get("confirm") ?? "");
    if (password.length < 8) return setError("Password must contain at least 8 characters.");
    if (password !== confirm) return setError("Passwords do not match.");
    window.localStorage.setItem("dayflow-session", "active");
    window.location.href = "/";
  };
  return <main className="auth-page"><div className="auth-brand"><div className="brand-mark">D</div><strong>DAYFLOW</strong></div><section className="auth-card signup-card"><p className="eyebrow"><Sparkles size={13} /> Start aligned</p><h1>Create your workspace</h1><p className="muted">Set up your team&apos;s new home in a minute.</p><form onSubmit={submit}><label>Company name<div className="auth-input"><Building2 size={16} /><input name="company" placeholder="Acme Corporation" required /></div></label><label>Your name<div className="auth-input"><UserRound size={16} /><input name="name" placeholder="Alex Rivera" required /></div></label><label>Work email<div className="auth-input"><Mail size={16} /><input name="email" type="email" placeholder="you@company.com" required /></div></label><div className="auth-columns"><label>Password<div className="auth-input"><LockKeyhole size={16} /><input name="password" type={showPassword ? "text" : "password"} required minLength={8} /></div></label><label>Confirm<div className="auth-input"><LockKeyhole size={16} /><input name="confirm" type={showPassword ? "text" : "password"} required minLength={8} /><button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff size={16} /> : <Eye size={16} />}</button></div></label></div>{error && <p className="auth-error">{error}</p>}<button className="primary-button auth-submit" type="submit">Create workspace <ArrowRight size={16} /></button></form><p className="auth-footer">Already have an account? <Link href="/sign-in">Sign in</Link></p></section><p className="auth-caption">SECURE · SIMPLE · ALIGNED</p></main>;
}
