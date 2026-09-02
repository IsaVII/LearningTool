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
        <h1>Welcome, ${username}!</h1>
        <p>Thank you for joining our platform.</p>
        <a href="https://yoursite.com/verify" class="button">Verify Email</a>
      </div>
    </body>
    </html>
  `;
  
  await sendEmail(
    userEmail,
    'Welcome to Our Platform!',
    `Welcome, ${username}! Thank you for joining.`,
    htmlTemplate
  );
};

// Usage after user registration
app.post('/register', async (req, res) => {
  // ... create user ...
  await sendWelcomeEmail(user.email, user.username);
  res.send('Registration successful! Check your email.');
});
