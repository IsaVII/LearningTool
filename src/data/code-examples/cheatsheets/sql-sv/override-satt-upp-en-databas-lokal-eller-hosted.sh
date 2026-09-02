Alternativ A: Installera lokalt
1. macOS: brew install postgresql@16 && brew services start postgresql@16
2. Windows/Linux: ladda ner från https://www.postgresql.org/download/
3. Verifiera att det körs: psql --version

Alternativ B: Använd en gratis hosted instans (ingen installation krävs)
1. Skapa ett konto på Supabase, Neon, eller Render
2. Skapa ett nytt PostgreSQL-projekt/databas
3. Vänta på att det provisioner (vanligtvis under en minut)
4. Notera host, port, username, password och databasnamn som visas i dashboarden
