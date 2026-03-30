# Store Ops  Prototype

This is a small prototype app demonstrating a lightweight store operations checklist.

Run locally:

```bash
cd apps/store-ops
npm install
npm run dev
```

Features:
- View and complete tasks
- Photo upload per task (client-side preview)
- Report an issue (saves to localStorage as simulated send)
- Simple priority hints computed from task text

Notes:
- This is a minimal prototype. For production, replace localStorage with an API and add authentication, file uploads, and accessibility checks.
