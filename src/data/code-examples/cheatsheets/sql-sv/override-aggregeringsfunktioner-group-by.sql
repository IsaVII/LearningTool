-- Räkna, summera, genomsnitt över hela tabellen
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
HAVING COUNT(*) > 5;
