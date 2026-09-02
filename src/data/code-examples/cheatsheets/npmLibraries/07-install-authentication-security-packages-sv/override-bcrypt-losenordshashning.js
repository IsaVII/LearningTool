const bcrypt = require('bcrypt');

// Hasha ett lösenord (vid registrering)
const hashPassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

// Jämför lösenord (vid inloggning)
const verifyPassword = async (password, hashedPassword) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch; // true eller false
};

// Exempel användning
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await hashPassword(password);
  // Spara användare med hashedPassword till databas
  const user = new User({ username, password: hashedPassword });
  await user.save();
  res.send('Användare registrerad');
});
