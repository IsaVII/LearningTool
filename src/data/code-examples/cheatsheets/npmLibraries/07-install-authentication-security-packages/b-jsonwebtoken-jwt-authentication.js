const jwt = require('jsonwebtoken');

// Generate a token (after login)
const generateToken = (userId) => {
  const token = jwt.sign(
    { userId }, // Payload
    process.env.JWT_SECRET,
    { expiresIn: '7d' } // Token expires in 7 days
  );
  return token;
};

// Verify token (middleware)
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Bearer TOKEN
  
  if (!token) return res.status(401).json({ error: 'Access denied' });
  
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.userId = decoded.userId;
    next();
  });
};

// Protected route example
app.get('/api/profile', authenticateToken, (req, res) => {
  res.json({ userId: req.userId });
});
