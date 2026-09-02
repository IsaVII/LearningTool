const nodemailer = require('nodemailer');

// Skapa en transporter (Gmail-exempel)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS // Använd App Password, inte vanligt lösenord
  }
});

// Skicka ett e-postmeddelande
const sendEmail = async (to, subject, text, html) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    html // Valfri HTML-version
  };
  
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('E-post skickat:', info.messageId);
    return info;
  } catch (error) {
    console.error('Fel vid skickande av e-post:', error);
    throw error;
  }
};

// Exempel användning
app.post('/contact', async (req, res) => {
  const { email, message } = req.body;
  await sendEmail(
    'admin@example.com',
    'Nytt kontaktmeddelande',
    message,
    `<p>${message}</p><p>Från: ${email}</p>`
  );
  res.send('Meddelande skickat!');
});
