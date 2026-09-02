-- INSERT one row
INSERT INTO users (username, email, role)
VALUES ('jdoe', 'jdoe@example.com', 'admin');

-- INSERT multiple rows at once
INSERT INTO users (username, email)
VALUES
  ('asmith', 'asmith@example.com'),
  ('bwong', 'bwong@example.com');

-- UPDATE existing rows
UPDATE users
SET role = 'admin'
WHERE username = 'jdoe';

-- DELETE rows
DELETE FROM users
WHERE role = 'guest';
