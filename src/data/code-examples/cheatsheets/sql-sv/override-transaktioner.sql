BEGIN;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- Om båda uppdateringarna lyckades, gör dem permanenta
COMMIT;

-- Om något gick fel, ångra allt sedan BEGIN
-- ROLLBACK;
