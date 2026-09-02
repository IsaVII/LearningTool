const nodemailer = require('nodemailer');

// Create a transporter (Gmail example)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS // Use App Password, not regular password
  }
});

// Send an email
const sendEmail = async (to, subject, text, html) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    html // Optional HTML version
  };
  
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

// Example usage
app.post('/contact', async (req, res) => {
  const { email, message } = req.body;
  await sendEmail(
    'admin@example.com',
    'New Contact Message',
    message,
    `<p>${message}</p><p>From: ${email}</p>`
  );
  res.send('Message sent!');
});
