# Server (Express)

## Setup

1. Copy `.env.example` to `.env` and set your MongoDB Atlas URI and JWT secret.
2. `npm install`
3. `npm run dev` (requires nodemon) or `npm start`

API base: `http://localhost:5000/api`

Endpoints:
- POST /api/auth/register
- POST /api/auth/login
- GET/PUT /api/profile (protected)
- CRUD /api/tasks (protected)

Note: In production, the Express server will serve the React build located at `client/build`.
