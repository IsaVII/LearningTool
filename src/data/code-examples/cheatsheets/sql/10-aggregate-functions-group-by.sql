-- Count, sum, average across the whole table
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
HAVING COUNT(*) > 5;
