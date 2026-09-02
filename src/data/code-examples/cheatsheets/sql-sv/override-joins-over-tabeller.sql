-- INNER JOIN: endast rader med en matchning på båda sidor
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
JOIN products p ON p.id = oi.product_id;
