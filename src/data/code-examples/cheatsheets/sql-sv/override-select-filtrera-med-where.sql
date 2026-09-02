-- Alla kolumner, alla rader
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
LIMIT 10 OFFSET 20;
