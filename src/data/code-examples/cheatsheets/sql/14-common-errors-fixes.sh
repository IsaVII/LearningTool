Error: duplicate key value violates unique constraint
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
Fix: \dt in psql (or SHOW TABLES; in MySQL) to list what actually exists.

Error: column "x" does not exist / Unknown column 'x' in 'field list'
Cause: Typo, or referencing a column that isn't in scope for a JOIN.
Fix: Qualify the column with its table alias, e.g. u.username instead of username.

Error: current transaction is aborted, commands ignored until end of transaction block
Cause: An earlier statement inside a transaction failed, and PostgreSQL blocks further commands until you resolve it.
Fix: ROLLBACK, then retry the whole transaction.
