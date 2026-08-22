# Dayflow Backend

Express and TypeScript API boundary for Dayflow HRMS. The current demo exposes health, sign-in validation, and dashboard data endpoints; MongoDB, JWT, role middleware, Socket.IO events, and domain routes are structured to be added behind this boundary.

## Run

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env` before connecting MongoDB or enabling production authentication.
