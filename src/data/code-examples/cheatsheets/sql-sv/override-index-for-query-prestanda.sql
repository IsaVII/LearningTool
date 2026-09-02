-- Snabba upp uppslagningar/filter på en kolumn
CREATE INDEX idx_users_email ON users(email);

-- Sammansatt index, för queries som filtrerar på båda kolumnerna tillsammans
CREATE INDEX idx_orders_user_status ON orders(user_id, status);

-- Upprätthåll unikhet OCH snabba upp uppslagningar
CREATE UNIQUE INDEX idx_users_username ON users(username);

-- Se vad ett index faktiskt gör för en query
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'jdoe@example.com';
