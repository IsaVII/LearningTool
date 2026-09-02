CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  total DECIMAL(10, 2) NOT NULL CHECK (total >= 0),
  status VARCHAR(20) NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Common constraint types:
-- PRIMARY KEY   uniquely identifies each row
-- FOREIGN KEY   (REFERENCES) links to another table's primary key
-- NOT NULL      column must always have a value
-- UNIQUE        no two rows can share this value
-- CHECK         value must satisfy a boolean expression
-- DEFAULT       value used when none is provided
