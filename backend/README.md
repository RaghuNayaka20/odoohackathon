# Dayflow Backend

REST API for the Dayflow people-operations frontend.

## Setup

1. Copy `.env.example` to `.env` and set `MONGODB_URI` and `JWT_SECRET`.
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Check health: `GET http://localhost:4000/api/health`

The API uses MongoDB, JWT bearer tokens, and JSON responses in the form `{ success, data }`. Main resources are `/api/auth`, `/api/employees`, `/api/attendance`, `/api/leaves`, `/api/payroll`, `/api/notifications`, `/api/analytics`, and `/api/documents`.

Run `npm run seed` to create the local admin account. Change the seeded password before using this outside development.
