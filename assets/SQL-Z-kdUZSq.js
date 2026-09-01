import{a as e,i as t}from"./TextReveal-Dxbhpb2T.js";import{t as n}from"./CheatSheetLayout-VBK75Yo7.js";var r={title:`SQL Database Cheat Sheet`,introduction:{heading:`SQL: Querying & Managing Relational Databases`,description:`A quick reference for working with relational databases (MySQL, PostgreSQL, SQLite, and friends) - creating tables, reading and writing data, joining across tables, aggregating results, and keeping your data consistent with constraints and transactions.`},prerequisites:[`A relational database installed locally (MySQL, PostgreSQL, SQLite) or a hosted instance`,`A SQL client to run queries (psql, mysql CLI, TablePlus, DBeaver, or your editor's built-in client)`,`Basic understanding of tables, rows, and columns`],steps:[{id:1,title:`Set Up a Database (Local or Hosted)`,description:`Before writing any SQL you need somewhere for it to run. Pick a local install for full control, or a free hosted instance to skip setup entirely.`,code:`Option A: Install locally
1. macOS: brew install postgresql@16 && brew services start postgresql@16
2. Windows/Linux: download from https://www.postgresql.org/download/
3. Verify it's running: psql --version

Option B: Use a free hosted instance (no install required)
1. Create an account at Supabase, Neon, or Render
2. Create a new PostgreSQL project/database
3. Wait for it to provision (usually under a minute)
4. Note the host, port, username, password, and database name shown in the dashboard`,language:`bash`,highlightLines:[1,6],note:`MySQL and SQLite work the same way in spirit - install locally, or use a hosted MySQL instance (PlanetScale) - only the exact commands differ.`},{id:2,title:`Get Your Connection String`,description:`Everything your app needs to reach the database - host, port, credentials, and database name - is bundled into one connection string (URI).`,code:`postgresql://username:password@host:5432/database_name

Example (hosted):
postgresql://postgres:mypassword@db.xxxxxxxxxxxx.supabase.co:5432/postgres

Example (local):
postgresql://postgres:postgres@localhost:5432/myapp`,language:`bash`,highlightLines:[1],note:`Never hardcode the connection string in your code or commit it to git - store it in a .env file and add .env to .gitignore.`},{id:3,title:`Install Driver Packages`,description:`Install the PostgreSQL driver and dotenv so your Node.js app can read the connection string and talk to the database.`,code:`npm install pg dotenv`,language:`bash`,subSteps:[{title:`.env Configuration`,description:`Create a .env file in your project root with the database credentials.`,code:`# PostgreSQL Connection String
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/myapp

# Node Environment
NODE_ENV=development

# Server Port
PORT=3000`,language:`bash`,note:`Add .env to your .gitignore file! Create .env.example with dummy values for documentation.`}]},{id:4,title:`Connect from Node.js`,description:`Open a connection pool and run a test query to confirm everything is wired up correctly.`,code:`require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Test the connection
pool.query('SELECT NOW()')
  .then((result) => {
    console.log('✓ Connected to PostgreSQL:', result.rows[0]);
  })
  .catch((err) => {
    console.error('✗ Database connection error:', err);
    process.exit(1);
  });

module.exports = pool;`,language:`javascript`,highlightLines:[2,4,9,12],note:`A Pool (rather than a single Client) reuses connections across requests, which is what you want in a real app - open one pool at startup and reuse it everywhere.`},{id:5,title:`Create a Database & Table`,description:`Every SQL project starts with a database and at least one table. A table's columns each have a data type and, optionally, constraints.`,code:`CREATE DATABASE myapp;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  role VARCHAR(20) NOT NULL DEFAULT 'user',
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);`,language:`sql`,highlightLines:[1,3,4,5],note:`SERIAL (PostgreSQL) auto-increments the id. In MySQL use INT AUTO_INCREMENT; in SQLite use INTEGER PRIMARY KEY AUTOINCREMENT.`},{id:6,title:`Common Data Types`,description:`The most-used column types across MySQL/PostgreSQL/SQLite. Exact names vary slightly by engine, but the concepts map directly.`,code:`INT / INTEGER        -- whole numbers
BIGINT                -- large whole numbers
DECIMAL(10, 2)        -- exact decimals (money!)
FLOAT / DOUBLE         -- approximate decimals
VARCHAR(n)             -- variable-length text, max n chars
TEXT                   -- long-form text, no length limit
BOOLEAN                -- true / false
DATE                   -- year, month, day
TIMESTAMP              -- date + time
JSON / JSONB           -- structured data (PostgreSQL: prefer JSONB)
UUID                   -- universally unique identifier`,language:`sql`,note:`Use DECIMAL, never FLOAT/DOUBLE, for anything involving money - floating point types round in ways that lose cents.`},{id:7,title:`Insert, Update & Delete Rows`,description:`The three statements that change data. Always pair UPDATE and DELETE with a WHERE clause, or every row in the table is affected.`,code:`-- INSERT one row
INSERT INTO users (username, email, role)
VALUES ('jdoe', 'jdoe@example.com', 'admin');

-- INSERT multiple rows at once
INSERT INTO users (username, email)
VALUES
  ('asmith', 'asmith@example.com'),
  ('bwong', 'bwong@example.com');

-- UPDATE existing rows
UPDATE users
SET role = 'admin'
WHERE username = 'jdoe';

-- DELETE rows
DELETE FROM users
WHERE role = 'guest';`,language:`sql`,highlightLines:[2,3,13,14,17,18],note:`Running UPDATE or DELETE without a WHERE clause changes/removes every row in the table. Test with a SELECT using the same WHERE first.`},{id:8,title:`SELECT & Filter with WHERE`,description:`SELECT reads data back out. WHERE narrows it down; ORDER BY and LIMIT control the order and how many rows come back.`,code:`-- All columns, all rows
SELECT * FROM users;

-- Specific columns, filtered
SELECT username, email FROM users
WHERE role = 'admin';

-- Multiple conditions
SELECT * FROM users
WHERE role = 'admin' AND created_at > '2025-01-01';

-- Pattern matching, ranges, sets
SELECT * FROM users WHERE username LIKE 'j%';
SELECT * FROM users WHERE id BETWEEN 10 AND 20;
SELECT * FROM users WHERE role IN ('admin', 'editor');
SELECT * FROM users WHERE email IS NOT NULL;

-- Sort and page through results
SELECT * FROM users
ORDER BY created_at DESC
LIMIT 10 OFFSET 20;`,language:`sql`,highlightLines:[2,6,10,13,14,15,16,19,20,21],note:`LIKE 'j%' matches anything starting with 'j'; '%j' matches anything ending with 'j'; '%j%' matches anything containing 'j'.`},{id:9,title:`JOINs Across Tables`,description:`JOINs combine rows from related tables using a shared key (typically a foreign key). INNER JOIN is the one you reach for most; the others keep rows that don't have a match.`,code:`-- INNER JOIN: only rows with a match on both sides
SELECT orders.id, users.username, orders.total
FROM orders
INNER JOIN users ON orders.user_id = users.id;

-- LEFT JOIN: every user, even if they have no orders
SELECT users.username, orders.id AS order_id
FROM users
LEFT JOIN orders ON orders.user_id = users.id;

-- Joining three tables
SELECT o.id, u.username, p.name AS product
FROM orders o
JOIN users u ON o.user_id = u.id
JOIN order_items oi ON oi.order_id = o.id
JOIN products p ON p.id = oi.product_id;`,language:`sql`,highlightLines:[4,8,13,14,15],note:`LEFT JOIN keeps every row from the left (first) table and fills in NULLs where there's no match on the right.`},{id:10,title:`Aggregate Functions & GROUP BY`,description:`Aggregate functions collapse many rows into a single summary value. GROUP BY runs that aggregation once per unique value in a column; HAVING filters on the aggregated result (WHERE can't, since it runs before grouping).`,code:`-- Count, sum, average across the whole table
SELECT COUNT(*) AS total_users FROM users;
SELECT SUM(total) AS revenue FROM orders;
SELECT AVG(total) AS avg_order FROM orders;

-- One row per group
SELECT role, COUNT(*) AS user_count
FROM users
GROUP BY role;

-- Filter groups with HAVING (not WHERE)
SELECT user_id, COUNT(*) AS order_count
FROM orders
GROUP BY user_id
HAVING COUNT(*) > 5;`,language:`sql`,highlightLines:[2,3,4,7,8,9,12,13,14,15],note:`WHERE filters rows before grouping; HAVING filters groups after aggregation. Trying to use an aggregate like COUNT(*) in WHERE is a common error.`},{id:11,title:`Constraints & Relationships`,description:`Constraints tell the database to enforce rules for you, so bad data (duplicates, orphaned rows, missing required fields) never makes it into a table in the first place.`,code:`CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  total DECIMAL(10, 2) NOT NULL CHECK (total >= 0),
  status VARCHAR(20) NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Common constraint types:
-- PRIMARY KEY   uniquely identifies each row
-- FOREIGN KEY   (REFERENCES) links to another table's primary key
-- NOT NULL      column must always have a value
-- UNIQUE        no two rows can share this value
-- CHECK         value must satisfy a boolean expression
-- DEFAULT       value used when none is provided`,language:`sql`,highlightLines:[2,3,4],note:`ON DELETE CASCADE removes an order automatically when its user is deleted. Other options: SET NULL, RESTRICT (block the delete).`},{id:12,title:`Indexes for Query Performance`,description:`An index lets the database find matching rows without scanning the whole table - essential for columns you filter, join, or sort on frequently in large tables.`,code:`-- Speed up lookups/filters on a column
CREATE INDEX idx_users_email ON users(email);

-- Composite index, for queries that filter on both columns together
CREATE INDEX idx_orders_user_status ON orders(user_id, status);

-- Enforce uniqueness AND speed up lookups
CREATE UNIQUE INDEX idx_users_username ON users(username);

-- See what an index actually does for a query
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'jdoe@example.com';`,language:`sql`,highlightLines:[2,5,8,11],note:`Indexes speed up reads but slow down writes (every INSERT/UPDATE has to update the index too) - add them where you actually query, not on every column.`},{id:13,title:`Transactions`,description:`A transaction groups multiple statements so they succeed or fail together - critical whenever one logical action touches more than one table (like transferring money between two accounts).`,code:`BEGIN;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- If both updates succeeded, make them permanent
COMMIT;

-- If anything went wrong, undo everything since BEGIN
-- ROLLBACK;`,language:`sql`,highlightLines:[1,3,4,7],note:`Without a transaction, a crash between the two UPDATEs would leave money deducted from one account and never credited to the other.`},{id:14,title:`Common Errors & Fixes`,description:`The errors you'll hit most often when starting out, and what they actually mean.`,code:`Error: duplicate key value violates unique constraint
Cause: Inserting a value that already exists in a UNIQUE or PRIMARY KEY column.
Fix: Check for an existing row first, or use an upsert (INSERT ... ON CONFLICT).

Error: null value in column violates not-null constraint
Cause: Missing a required column in an INSERT.
Fix: Provide a value, or give the column a DEFAULT.

Error: syntax error at or near "..."
Cause: Usually a missing comma, unmatched quote, or a keyword used as a column name.
Fix: Read the query right-to-left from the pointed-to token; SQL errors report where parsing broke, not necessarily the real mistake.

Error: relation "table_name" does not exist
Cause: Typo in the table name, wrong schema/database, or the table was never created.
Fix: \\dt in psql (or SHOW TABLES; in MySQL) to list what actually exists.

Error: column "x" does not exist / Unknown column 'x' in 'field list'
Cause: Typo, or referencing a column that isn't in scope for a JOIN.
Fix: Qualify the column with its table alias, e.g. u.username instead of username.

Error: current transaction is aborted, commands ignored until end of transaction block
Cause: An earlier statement inside a transaction failed, and PostgreSQL blocks further commands until you resolve it.
Fix: ROLLBACK, then retry the whole transaction.`,language:`bash`,note:`When in doubt, run the failing query alone (outside any transaction) to isolate exactly which statement and which part of it is wrong.`}]},i={title:`SQL Databas Cheat Sheet`,introduction:{heading:`SQL: Fråga & Hantera Relationsdatabaser`,description:`En snabbreferens för att arbeta med relationsdatabaser (MySQL, PostgreSQL, SQLite och liknande) - skapa tabeller, läsa och skriva data, joina över tabeller, aggregera resultat och hålla din data konsekvent med constraints och transaktioner.`},prerequisites:[`En relationsdatabas installerad lokalt (MySQL, PostgreSQL, SQLite) eller en hosted instans`,`En SQL-klient för att köra queries (psql, mysql CLI, TablePlus, DBeaver, eller din editors inbyggda klient)`,`Grundläggande förståelse för tabeller, rader och kolumner`],steps:[{id:1,title:`Sätt upp en Databas (Lokal eller Hosted)`,description:`Innan du skriver någon SQL behöver du någonstans att köra den. Välj en lokal installation för full kontroll, eller en gratis hosted instans för att hoppa över inställningen helt.`,code:`Alternativ A: Installera lokalt
1. macOS: brew install postgresql@16 && brew services start postgresql@16
2. Windows/Linux: ladda ner från https://www.postgresql.org/download/
3. Verifiera att det körs: psql --version

Alternativ B: Använd en gratis hosted instans (ingen installation krävs)
1. Skapa ett konto på Supabase, Neon, eller Render
2. Skapa ett nytt PostgreSQL-projekt/databas
3. Vänta på att det provisioner (vanligtvis under en minut)
4. Notera host, port, username, password och databasnamn som visas i dashboarden`,language:`bash`,highlightLines:[1,6],note:`MySQL och SQLite fungerar på samma sätt i grunden - installera lokalt, eller använd en hosted MySQL-instans (PlanetScale) - endast de exakta kommandona skiljer sig.`},{id:2,title:`Hämta din Anslutningssträng`,description:`Allt din app behöver för att nå databasen - host, port, referenser och databasnamn - buntas ihop i en anslutningssträng (URI).`,code:`postgresql://username:password@host:5432/database_name

Exempel (hosted):
postgresql://postgres:mypassword@db.xxxxxxxxxxxx.supabase.co:5432/postgres

Exempel (lokal):
postgresql://postgres:postgres@localhost:5432/myapp`,language:`bash`,highlightLines:[1],note:`Hårdkoda aldrig anslutningssträngen i din kod eller commita den till git - lagra den i en .env-fil och lägg till .env i .gitignore.`},{id:3,title:`Installera Driver-paket`,description:`Installera PostgreSQL-drivrutinen och dotenv så din Node.js-app kan läsa anslutningssträngen och kommunicera med databasen.`,code:`npm install pg dotenv`,language:`bash`,subSteps:[{title:`.env-konfiguration`,description:`Skapa en .env-fil i din projektrot med databasreferenser.`,code:`# PostgreSQL-anslutningssträng
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/myapp

# Node-miljö
NODE_ENV=development

# Serverport
PORT=3000`,language:`bash`,note:`Lägg till .env i din .gitignore-fil! Skapa .env.example med dummy-värden för dokumentation.`}]},{id:4,title:`Anslut från Node.js`,description:`Öppna en anslutningspool och kör en testquery för att bekräfta att allt är korrekt konfigurerat.`,code:`require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Testa anslutningen
pool.query('SELECT NOW()')
  .then((result) => {
    console.log('✓ Ansluten till PostgreSQL:', result.rows[0]);
  })
  .catch((err) => {
    console.error('✗ Databasanslutningsfel:', err);
    process.exit(1);
  });

module.exports = pool;`,language:`javascript`,highlightLines:[2,4,9,12],note:`En Pool (snarare än en enda Client) återanvänder anslutningar över förfrågningar, vilket är vad du vill ha i en riktig app - öppna en pool vid uppstart och återanvänd den överallt.`},{id:5,title:`Skapa en Databas & Tabell`,description:`Varje SQL-projekt börjar med en databas och minst en tabell. En tabells kolumner har var sin datatyp och, valfritt, constraints.`,code:`CREATE DATABASE myapp;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  role VARCHAR(20) NOT NULL DEFAULT 'user',
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);`,language:`sql`,highlightLines:[1,3,4,5],note:`SERIAL (PostgreSQL) auto-incrementerar id. I MySQL använd INT AUTO_INCREMENT; i SQLite använd INTEGER PRIMARY KEY AUTOINCREMENT.`},{id:6,title:`Vanliga Datatyper`,description:`De mest använda kolumntyperna över MySQL/PostgreSQL/SQLite. Exakta namn varierar något mellan motorer, men koncepten mappar direkt.`,code:`INT / INTEGER        -- heltal
BIGINT                -- stora heltal
DECIMAL(10, 2)        -- exakta decimaler (pengar!)
FLOAT / DOUBLE         -- ungefärliga decimaler
VARCHAR(n)             -- text med variabel längd, max n tecken
TEXT                   -- långformig text, ingen längdgräns
BOOLEAN                -- true / false
DATE                   -- år, månad, dag
TIMESTAMP              -- datum + tid
JSON / JSONB           -- strukturerad data (PostgreSQL: föredra JSONB)
UUID                   -- universellt unik identifierare`,language:`sql`,note:`Använd DECIMAL, aldrig FLOAT/DOUBLE, för allt som involverar pengar - flyttalstyper avrundar på sätt som förlorar ören.`},{id:7,title:`Infoga, Uppdatera & Ta bort Rader`,description:`De tre satserna som ändrar data. Para alltid UPDATE och DELETE med en WHERE-sats, annars påverkas varje rad i tabellen.`,code:`-- INSERT en rad
INSERT INTO users (username, email, role)
VALUES ('jdoe', 'jdoe@example.com', 'admin');

-- INSERT flera rader på en gång
INSERT INTO users (username, email)
VALUES
  ('asmith', 'asmith@example.com'),
  ('bwong', 'bwong@example.com');

-- UPDATE befintliga rader
UPDATE users
SET role = 'admin'
WHERE username = 'jdoe';

-- DELETE rader
DELETE FROM users
WHERE role = 'guest';`,language:`sql`,highlightLines:[2,3,13,14,17,18],note:`Att köra UPDATE eller DELETE utan en WHERE-sats ändrar/tar bort varje rad i tabellen. Testa med en SELECT med samma WHERE först.`},{id:8,title:`SELECT & Filtrera med WHERE`,description:`SELECT läser tillbaka data. WHERE begränsar det; ORDER BY och LIMIT styr ordningen och hur många rader som kommer tillbaka.`,code:`-- Alla kolumner, alla rader
SELECT * FROM users;

-- Specifika kolumner, filtrerade
SELECT username, email FROM users
WHERE role = 'admin';

-- Flera villkor
SELECT * FROM users
WHERE role = 'admin' AND created_at > '2025-01-01';

-- Mönstermatchning, intervall, mängder
SELECT * FROM users WHERE username LIKE 'j%';
SELECT * FROM users WHERE id BETWEEN 10 AND 20;
SELECT * FROM users WHERE role IN ('admin', 'editor');
SELECT * FROM users WHERE email IS NOT NULL;

-- Sortera och bläddra genom resultat
SELECT * FROM users
ORDER BY created_at DESC
LIMIT 10 OFFSET 20;`,language:`sql`,highlightLines:[2,6,10,13,14,15,16,19,20,21],note:`LIKE 'j%' matchar allt som börjar med 'j'; '%j' matchar allt som slutar med 'j'; '%j%' matchar allt som innehåller 'j'.`},{id:9,title:`JOINs Över Tabeller`,description:`JOINs kombinerar rader från relaterade tabeller med en delad nyckel (typiskt en främmande nyckel). INNER JOIN är den du når efter oftast; de andra behåller rader som inte har en matchning.`,code:`-- INNER JOIN: endast rader med en matchning på båda sidor
SELECT orders.id, users.username, orders.total
FROM orders
INNER JOIN users ON orders.user_id = users.id;

-- LEFT JOIN: varje användare, även om de inte har några ordrar
SELECT users.username, orders.id AS order_id
FROM users
LEFT JOIN orders ON orders.user_id = users.id;

-- Joina tre tabeller
SELECT o.id, u.username, p.name AS product
FROM orders o
JOIN users u ON o.user_id = u.id
JOIN order_items oi ON oi.order_id = o.id
JOIN products p ON p.id = oi.product_id;`,language:`sql`,highlightLines:[4,8,13,14,15],note:`LEFT JOIN behåller varje rad från vänster (första) tabell och fyller i NULL där det inte finns någon matchning på höger sida.`},{id:10,title:`Aggregeringsfunktioner & GROUP BY`,description:`Aggregeringsfunktioner kollapsar många rader till ett enda sammanfattningsvärde. GROUP BY kör den aggregeringen en gång per unikt värde i en kolumn; HAVING filtrerar på det aggregerade resultatet (WHERE kan inte, eftersom det körs före gruppering).`,code:`-- Räkna, summera, genomsnitt över hela tabellen
SELECT COUNT(*) AS total_users FROM users;
SELECT SUM(total) AS revenue FROM orders;
SELECT AVG(total) AS avg_order FROM orders;

-- En rad per grupp
SELECT role, COUNT(*) AS user_count
FROM users
GROUP BY role;

-- Filtrera grupper med HAVING (inte WHERE)
SELECT user_id, COUNT(*) AS order_count
FROM orders
GROUP BY user_id
HAVING COUNT(*) > 5;`,language:`sql`,highlightLines:[2,3,4,7,8,9,12,13,14,15],note:`WHERE filtrerar rader före gruppering; HAVING filtrerar grupper efter aggregering. Att försöka använda en aggregering som COUNT(*) i WHERE är ett vanligt fel.`},{id:11,title:`Constraints & Relationer`,description:`Constraints talar om för databasen att upprätthålla regler åt dig, så dålig data (dubbletter, föräldralösa rader, saknade obligatoriska fält) aldrig kommer in i en tabell från början.`,code:`CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  total DECIMAL(10, 2) NOT NULL CHECK (total >= 0),
  status VARCHAR(20) NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Vanliga constraint-typer:
-- PRIMARY KEY   identifierar unikt varje rad
-- FOREIGN KEY   (REFERENCES) länkar till en annan tabells primärnyckel
-- NOT NULL      kolumn måste alltid ha ett värde
-- UNIQUE        inga två rader kan dela detta värde
-- CHECK         värde måste uppfylla ett booleskt uttryck
-- DEFAULT       värde som används när inget anges`,language:`sql`,highlightLines:[2,3,4],note:`ON DELETE CASCADE tar automatiskt bort en order när dess användare tas bort. Andra alternativ: SET NULL, RESTRICT (blockera borttagningen).`},{id:12,title:`Index för Query-prestanda`,description:`Ett index låter databasen hitta matchande rader utan att skanna hela tabellen - väsentligt för kolumner du filtrerar, joinar eller sorterar på ofta i stora tabeller.`,code:`-- Snabba upp uppslagningar/filter på en kolumn
CREATE INDEX idx_users_email ON users(email);

-- Sammansatt index, för queries som filtrerar på båda kolumnerna tillsammans
CREATE INDEX idx_orders_user_status ON orders(user_id, status);

-- Upprätthåll unikhet OCH snabba upp uppslagningar
CREATE UNIQUE INDEX idx_users_username ON users(username);

-- Se vad ett index faktiskt gör för en query
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'jdoe@example.com';`,language:`sql`,highlightLines:[2,5,8,11],note:`Index snabbar upp läsningar men saktar ner skrivningar (varje INSERT/UPDATE måste uppdatera indexet också) - lägg till dem där du faktiskt frågar, inte på varje kolumn.`},{id:13,title:`Transaktioner`,description:`En transaktion grupperar flera satser så de lyckas eller misslyckas tillsammans - kritiskt när en logisk åtgärd berör mer än en tabell (som att överföra pengar mellan två konton).`,code:`BEGIN;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- Om båda uppdateringarna lyckades, gör dem permanenta
COMMIT;

-- Om något gick fel, ångra allt sedan BEGIN
-- ROLLBACK;`,language:`sql`,highlightLines:[1,3,4,7],note:`Utan en transaktion skulle en krasch mellan de två UPDATEs lämna pengar dragna från ett konto och aldrig krediterade till det andra.`},{id:14,title:`Vanliga Fel & Fixar`,description:`De fel du kommer att stöta på oftast när du börjar, och vad de faktiskt betyder.`,code:`Error: duplicate key value violates unique constraint
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
Fix: \\dt i psql (eller SHOW TABLES; i MySQL) för att lista vad som faktiskt finns.

Error: column "x" does not exist / Unknown column 'x' in 'field list'
Orsak: Stavfel, eller referera till en kolumn som inte är i scope för en JOIN.
Fix: Kvalificera kolumnen med dess tabellalias, t.ex. u.username istället för username.

Error: current transaction is aborted, commands ignored until end of transaction block
Orsak: En tidigare sats inuti en transaktion misslyckades, och PostgreSQL blockerar ytterligare kommandon tills du löser det.
Fix: ROLLBACK, försök sedan igen med hela transaktionen.`,language:`bash`,note:`Vid tvivel, kör den misslyckade queryn ensam (utanför någon transaktion) för att isolera exakt vilken sats och vilken del av den som är fel.`}]},a=t(),o={en:r,sv:i};function s(){let{i18n:t}=e(),r=o[t.language]||o.en,i=r.default||r;return(0,a.jsx)(n,{title:i.title,introduction:i.introduction,prerequisites:i.prerequisites,steps:i.steps,gettingStarted:i.gettingStarted,source:i.source},`sql`)}export{s as default};