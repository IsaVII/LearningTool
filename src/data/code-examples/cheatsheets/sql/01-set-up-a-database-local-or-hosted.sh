Option A: Install locally
1. macOS: brew install postgresql@16 && brew services start postgresql@16
2. Windows/Linux: download from https://www.postgresql.org/download/
3. Verify it's running: psql --version

Option B: Use a free hosted instance (no install required)
1. Create an account at Supabase, Neon, or Render
2. Create a new PostgreSQL project/database
3. Wait for it to provision (usually under a minute)
4. Note the host, port, username, password, and database name shown in the dashboard
