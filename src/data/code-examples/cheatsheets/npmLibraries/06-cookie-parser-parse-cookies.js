const cookieParser = require('cookie-parser');

app.use(cookieParser());

// Read cookies
app.get('/profile', (req, res) => {
  const theme = req.cookies.theme || 'light';
  res.send(`Current theme: ${theme}`);
});

// Set cookies
app.post('/theme', (req, res) => {
  res.cookie('theme', req.body.theme, {
    maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
    httpOnly: true
  });
  res.send('Theme updated');
});
