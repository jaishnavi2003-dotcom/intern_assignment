# Intern Assignment - Combined React + Express + MongoDB Atlas

This project is a combined app: Express backend (server/) that serves a React frontend (client/) in production.

## Quick start (development)
1. Install server dependencies:
   ```bash
   cd server
   npm install
   ```
2. Install client dependencies:
   ```bash
   cd ../client
   npm install
   ```
3. Create a `.env` file in `server/` based on `.env.example` and provide your MongoDB Atlas URI and JWT secret.
4. Run server in dev (it will not serve the client dev server):  
   ```bash
   cd ../server
   npm run dev
   ```
5. In another terminal, run the client dev server:
   ```bash
   cd client
   npm start
   ```

## Production build (combined)
1. Build the React app:
   ```bash
   cd client
   npm run build
   ```
   This will create `client/build`.
2. Start the Express server (it will serve the React build):
   ```bash
   cd ../server
   npm start
   ```

## Notes
- Replace `MONGO_URI` in `server/.env.example` with your Atlas connection string:
  `mongodb+srv://<USER>:<PASSWORD>@cluster0.mongodb.net/intern_app`
- The project includes:
  - JWT auth (register/login)
  - Profile fetching/updating
  - Tasks CRUD (create/read/update/delete)
- Postman collection included as `postman_collection.json`.

Good luck with your application — attach this repository/zip when you apply.
