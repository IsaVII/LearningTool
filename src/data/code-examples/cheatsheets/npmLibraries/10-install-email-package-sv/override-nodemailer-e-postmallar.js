const sendWelcomeEmail = async (userEmail, username) => {
  const htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .button { background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Välkommen, ${username}!</h1>
        <p>Tack för att du gick med i vår plattform.</p>
        <a href="https://yoursite.com/verify" class="button">Verifiera E-post</a>
      </div>
    </body>
    </html>
  `;
  
  await sendEmail(
    userEmail,
    'Välkommen till vår plattform!',
    `Välkommen, ${username}! Tack för att du gick med.`,
    htmlTemplate
  );
};

// Användning efter användarregistrering
app.post('/register', async (req, res) => {
  // ... skapa användare ...
  await sendWelcomeEmail(user.email, user.username);
  res.send('Registrering lyckad! Kolla din e-post.');
});
