# Tic Tac Toe Frontend

Minimal React 18 + Vite app scaffolding the frontend for a classic Tic Tac Toe game.

- Start dev server: `npm start` (port 3000, host 0.0.0.0)
- Build: `npm run build`
- Preview build: `npm run preview`

Environment variables:
- Use `REACT_APP_*` variables in a `.env` file at the project root (next to package.json).
- Example:
  ```
  REACT_APP_API_BASE=https://api.example.com
  REACT_APP_BACKEND_URL=http://localhost:8000
  REACT_APP_WS_URL=ws://localhost:8000/ws
  ```

Access in code via `import.meta.env.REACT_APP_<NAME>`.
