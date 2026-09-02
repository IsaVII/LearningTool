-- All columns, all rows
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
LIMIT 10 OFFSET 20;
