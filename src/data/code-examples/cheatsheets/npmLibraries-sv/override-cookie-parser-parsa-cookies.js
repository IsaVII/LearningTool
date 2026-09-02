const cookieParser = require('cookie-parser');

app.use(cookieParser());

// Läs cookies
app.get('/profile', (req, res) => {
  const theme = req.cookies.theme || 'light';
  res.send(`Aktuellt tema: ${theme}`);
});

// Sätt cookies
app.post('/theme', (req, res) => {
  res.cookie('theme', req.body.theme, {
    maxAge: 1000 * 60 * 60 * 24 * 365, // 1 år
    httpOnly: true
  });
  res.send('Tema uppdaterat');
});
