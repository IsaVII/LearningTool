-- Speed up lookups/filters on a column
CREATE INDEX idx_users_email ON users(email);

-- Composite index, for queries that filter on both columns together
CREATE INDEX idx_orders_user_status ON orders(user_id, status);

-- Enforce uniqueness AND speed up lookups
CREATE UNIQUE INDEX idx_users_username ON users(username);

-- See what an index actually does for a query
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'jdoe@example.com';
