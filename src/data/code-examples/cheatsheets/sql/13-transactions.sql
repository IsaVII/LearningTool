BEGIN;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- If both updates succeeded, make them permanent
COMMIT;

-- If anything went wrong, undo everything since BEGIN
-- ROLLBACK;
