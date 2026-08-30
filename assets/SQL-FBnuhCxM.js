import{g as e}from"./index-BTfaSnER.js";import{t}from"./CheatSheetLayout-BjurtSHa.js";var n={title:`SQL Database Cheat Sheet`,introduction:{heading:`SQL: Querying & Managing Relational Databases`,description:`A quick reference for working with relational databases (MySQL, PostgreSQL, SQLite, and friends) - creating tables, reading and writing data, joining across tables, aggregating results, and keeping your data consistent with constraints and transactions.`},prerequisites:[`A relational database installed locally (MySQL, PostgreSQL, SQLite) or a hosted instance`,`A SQL client to run queries (psql, mysql CLI, TablePlus, DBeaver, or your editor's built-in client)`,`Basic understanding of tables, rows, and columns`],steps:[{id:1,title:`Set Up a Database (Local or Hosted)`,description:`Before writing any SQL you need somewhere for it to run. Pick a local install for full control, or a free hosted instance to skip setup entirely.`,code:`Option A: Install locally
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
Fix: ROLLBACK, then retry the whole transaction.`,language:`bash`,note:`When in doubt, run the failing query alone (outside any transaction) to isolate exactly which statement and which part of it is wrong.`}]},r=e();function i(){let e=n.default||n;return(0,r.jsx)(t,{title:e.title,introduction:e.introduction,prerequisites:e.prerequisites,steps:e.steps,gettingStarted:e.gettingStarted,source:e.source},`sql`)}export{i as default};