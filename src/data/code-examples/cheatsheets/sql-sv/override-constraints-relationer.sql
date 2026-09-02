CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  total DECIMAL(10, 2) NOT NULL CHECK (total >= 0),
  status VARCHAR(20) NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Vanliga constraint-typer:
-- PRIMARY KEY   identifierar unikt varje rad
-- FOREIGN KEY   (REFERENCES) länkar till en annan tabells primärnyckel
-- NOT NULL      kolumn måste alltid ha ett värde
-- UNIQUE        inga två rader kan dela detta värde
-- CHECK         värde måste uppfylla ett booleskt uttryck
-- DEFAULT       värde som används när inget anges
