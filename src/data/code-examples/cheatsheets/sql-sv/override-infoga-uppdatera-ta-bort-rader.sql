-- INSERT en rad
INSERT INTO users (username, email, role)
VALUES ('jdoe', 'jdoe@example.com', 'admin');

-- INSERT flera rader på en gång
INSERT INTO users (username, email)
VALUES
  ('asmith', 'asmith@example.com'),
  ('bwong', 'bwong@example.com');

-- UPDATE befintliga rader
UPDATE users
SET role = 'admin'
WHERE username = 'jdoe';

-- DELETE rader
DELETE FROM users
WHERE role = 'guest';
