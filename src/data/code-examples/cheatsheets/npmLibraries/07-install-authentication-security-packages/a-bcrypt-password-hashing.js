const bcrypt = require('bcrypt');

// Hash a password (during registration)
const hashPassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

// Compare password (during login)
const verifyPassword = async (password, hashedPassword) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch; // true or false
};

// Example usage
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await hashPassword(password);
  // Save user with hashedPassword to database
  const user = new User({ username, password: hashedPassword });
  await user.save();
  res.send('User registered');
});
