# DAYFLOW HRMS

Dayflow is a premium workforce operations workspace for attendance, time off, payroll, people operations, and workforce intelligence.

## Structure

- `frontend`: Next.js App Router, TypeScript, Tailwind, Lucide, responsive dashboard experience.
- `backend`: Express, TypeScript, security middleware, validation boundary, and REST API foundation.

## Run locally

```bash
cd backend
npm run dev

cd ../frontend
npm run dev
```

Open `http://localhost:3000`. The dashboard is preloaded with realistic demo data so the product can be demonstrated without a database. Backend health is available at `http://localhost:4000/api/health`.

## Demo

The current dashboard is a role-aware administrative experience with interactive navigation, attendance pulse, workforce health, recent activity, responsive mobile navigation, and local check-in/check-out state. Backend sign-in accepts any valid email and a password of at least eight characters for demo purposes.
