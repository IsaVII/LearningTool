const jwt = require('jsonwebtoken');

// Generera en token (efter inloggning)
const generateToken = (userId) => {
  const token = jwt.sign(
    { userId }, // Payload
    process.env.JWT_SECRET,
    { expiresIn: '7d' } // Token går ut om 7 dagar
  );
  return token;
};

// Verifiera token (middleware)
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Bearer TOKEN
  
  if (!token) return res.status(401).json({ error: 'Åtkomst nekad' });
  
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Ogiltig token' });
    req.userId = decoded.userId;
    next();
  });
};

// Exempel på skyddad route
app.get('/api/profile', authenticateToken, (req, res) => {
  res.json({ userId: req.userId });
});
