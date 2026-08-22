"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail, Sparkles } from "lucide-react";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "");
    const password = String(form.get("password") ?? "");
    if (!email.includes("@") || password.length < 8) return setError("Use a valid email and a password with at least 8 characters.");
    window.localStorage.setItem("dayflow-session", "active");
    window.location.href = "/";
  };
  return <main className="auth-page"><div className="auth-brand"><div className="brand-mark">D</div><strong>DAYFLOW</strong></div><section className="auth-card"><p className="eyebrow"><Sparkles size={13} /> Welcome back</p><h1>Sign in to your workspace</h1><p className="muted">Keep every workday perfectly aligned.</p><form onSubmit={submit}><label>Work email<div className="auth-input"><Mail size={16} /><input name="email" type="email" placeholder="you@company.com" required /></div></label><label>Password<div className="auth-input"><LockKeyhole size={16} /><input name="password" type={showPassword ? "text" : "password"} placeholder="Enter your password" required minLength={8} /><button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff size={16} /> : <Eye size={16} />}</button></div></label><div className="auth-options"><label className="check-label"><input type="checkbox" /> Remember me</label><button type="button" className="auth-link">Forgot password?</button></div>{error && <p className="auth-error">{error}</p>}<button className="primary-button auth-submit" type="submit">Sign in <ArrowRight size={16} /></button></form><p className="auth-footer">New to Dayflow? <Link href="/sign-up">Create an account</Link></p></section><p className="auth-caption">DAYFLOW · WORKFORCE OPERATIONS</p></main>;
}
