Error: duplicate key value violates unique constraint
Orsak: Infoga ett värde som redan finns i en UNIQUE eller PRIMARY KEY-kolumn.
Fix: Kontrollera för en befintlig rad först, eller använd en upsert (INSERT ... ON CONFLICT).

Error: null value in column violates not-null constraint
Orsak: Saknar en obligatorisk kolumn i en INSERT.
Fix: Ange ett värde, eller ge kolumnen en DEFAULT.

Error: syntax error at or near "..."
Orsak: Vanligtvis ett saknat kommatecken, omatchad citattecken, eller ett nyckelord som används som kolumnnamn.
Fix: Läs queryn från höger till vänster från den pekade token; SQL-fel rapporterar var parsing bröt, inte nödvändigtvis det verkliga misstaget.

Error: relation "table_name" does not exist
Orsak: Stavfel i tabellnamnet, fel schema/databas, eller tabellen skapades aldrig.
Fix: \dt i psql (eller SHOW TABLES; i MySQL) för att lista vad som faktiskt finns.

Error: column "x" does not exist / Unknown column 'x' in 'field list'
Orsak: Stavfel, eller referera till en kolumn som inte är i scope för en JOIN.
Fix: Kvalificera kolumnen med dess tabellalias, t.ex. u.username istället för username.

Error: current transaction is aborted, commands ignored until end of transaction block
Orsak: En tidigare sats inuti en transaktion misslyckades, och PostgreSQL blockerar ytterligare kommandon tills du löser det.
Fix: ROLLBACK, försök sedan igen med hela transaktionen.
