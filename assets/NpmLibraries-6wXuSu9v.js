import{a as e,i as t}from"./TextReveal-Dxbhpb2T.js";import{t as n}from"./CheatSheetLayout-VBK75Yo7.js";var r={title:`Essential npm Libraries`,introduction:{heading:`Must-Have npm Packages for Node.js & Express Projects`,description:`A curated collection of the most useful npm libraries for building modern web applications. Covers authentication, database integration, templating, security, and more. These packages are production-tested and widely used in the Node.js ecosystem.`},prerequisites:[`Node.js and npm installed`,`Basic understanding of Node.js and Express`,`A project initialized with npm init`],steps:[{id:1,title:`Install Core Express Packages`,description:`Essential packages for building Express applications with session management, cookies, and environment variables.`,code:`npm install express express-session cookie-parser dotenv method-override`,language:`bash`,note:`These are fundamental packages that most Express apps will need.`},{id:2,title:`Express - Web Framework`,description:`Fast, unopinionated, minimalist web framework for Node.js. The foundation for building web servers and APIs.`,code:`const express = require('express');
const app = express();

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`,language:`javascript`,highlightLines:[4,5]},{id:3,title:`dotenv - Environment Variables`,description:`Loads environment variables from a .env file into process.env. Essential for keeping secrets out of your code.`,code:`// At the very top of your main file (e.g., app.js or server.js)
require('dotenv').config();

// Now you can access environment variables
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DATABASE_URL;
const SECRET = process.env.SESSION_SECRET;`,language:`javascript`,note:`Create a .env file in your project root and add it to .gitignore!`,subSteps:[{title:`Sample .env File`,description:`Example environment variables file. Never commit this to version control!`,code:`PORT=3000
DATABASE_URL=mongodb://localhost:27017/myapp
SESSION_SECRET=your-secret-key-here
JWT_SECRET=your-jwt-secret-here
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password`,language:`bash`,note:`Add .env to your .gitignore file. Create .env.example with dummy values for documentation.`}]},{id:4,title:`Install Database Packages`,description:`Mongoose for MongoDB ODM and connect-mongo for storing sessions in MongoDB.`,code:`npm install mongoose connect-mongo`,language:`bash`,subSteps:[{title:`mongoose - MongoDB ODM`,description:`Elegant MongoDB object modeling for Node.js. Provides schema validation, middleware, and query building.`,code:`const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Create a model
const User = mongoose.model('User', userSchema);

module.exports = User;`,language:`javascript`,highlightLines:[4,9,16]}]},{id:5,title:`express-session - Session Management`,description:`Session middleware for Express. Manages user sessions with cookies and server-side storage.`,code:`const session = require('express-session');
const MongoStore = require('connect-mongo');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.DATABASE_URL,
    touchAfter: 24 * 3600 // Lazy session update (in seconds)
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production' // HTTPS only in production
  }
}));`,language:`javascript`,highlightLines:[4,8,12],note:`connect-mongo stores sessions in MongoDB instead of in-memory storage.`},{id:6,title:`cookie-parser - Parse Cookies`,description:`Parse Cookie header and populate req.cookies. Useful for reading client-side cookies.`,code:`const cookieParser = require('cookie-parser');

app.use(cookieParser());

// Read cookies
app.get('/profile', (req, res) => {
  const theme = req.cookies.theme || 'light';
  res.send(\`Current theme: \${theme}\`);
});

// Set cookies
app.post('/theme', (req, res) => {
  res.cookie('theme', req.body.theme, {
    maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
    httpOnly: true
  });
  res.send('Theme updated');
});`,language:`javascript`,highlightLines:[3,7,13]},{id:7,title:`Install Authentication & Security Packages`,description:`bcrypt for password hashing and jsonwebtoken for JWT authentication.`,code:`npm install bcrypt jsonwebtoken`,language:`bash`,subSteps:[{title:`bcrypt - Password Hashing`,description:`Library for hashing passwords. Never store plain-text passwords! bcrypt uses salt and cost factor for security.`,code:`const bcrypt = require('bcrypt');

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
});`,language:`javascript`,highlightLines:[6,12,19],note:`Higher saltRounds = more secure but slower. 10-12 is recommended.`},{title:`jsonwebtoken - JWT Authentication`,description:`Create and verify JSON Web Tokens for stateless authentication. Alternative to sessions for APIs.`,code:`const jwt = require('jsonwebtoken');

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
});`,language:`javascript`,highlightLines:[5,15,19,27]}]},{id:8,title:`Install Templating Packages`,description:`EJS (Embedded JavaScript) for server-side templating with layouts support.`,code:`npm install ejs express-ejs-layouts`,language:`bash`,subSteps:[{title:`ejs - Embedded JavaScript Templates`,description:`Simple templating language that lets you generate HTML with JavaScript. Great for server-side rendering.`,code:`const express = require('express');
const app = express();

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Render a view
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home Page',
    user: { name: 'John', age: 30 }
  });
});`,language:`javascript`,highlightLines:[5,10]},{title:`EJS Template Example`,description:`Create an EJS template file in views/index.ejs with embedded JavaScript.`,code:`<!DOCTYPE html>
<html>
<head>
  <title><%= title %></title>
</head>
<body>
  <h1>Welcome, <%= user.name %>!</h1>
  <p>You are <%= user.age %> years old.</p>
  
  <% if (user.age >= 18) { %>
    <p>You are an adult.</p>
  <% } else { %>
    <p>You are a minor.</p>
  <% } %>
  
  <ul>
    <% ['Apple', 'Banana', 'Orange'].forEach(fruit => { %>
      <li><%= fruit %></li>
    <% }); %>
  </ul>
</body>
</html>`,language:`html`,note:`<%= %> outputs escaped HTML, <%- %> outputs raw HTML, <% %> executes JavaScript`},{title:`express-ejs-layouts - Layout Support`,description:`Adds layout support to EJS. Define a main layout and insert page content into it.`,code:`const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);
app.set('layout', 'layouts/main'); // Default layout file

// views/layouts/main.ejs
// <!DOCTYPE html>
// <html>
// <head>
//   <title>My App</title>
// </head>
// <body>
//   <%- body %>
// </body>
// </html>`,language:`javascript`,highlightLines:[3,4],note:`The <%- body %> placeholder in the layout is replaced with page content.`}]},{id:9,title:`method-override - HTTP Method Override`,description:`Allows browsers to use PUT and DELETE methods in forms (which only support GET and POST).`,code:`const methodOverride = require('method-override');

app.use(methodOverride('_method'));

// HTML form with DELETE method
// <form action="/posts/123?_method=DELETE" method="POST">
//   <button type="submit">Delete Post</button>
// </form>

app.delete('/posts/:id', (req, res) => {
  // Handle DELETE request
  res.send(\`Deleted post \${req.params.id}\`);
});`,language:`javascript`,highlightLines:[3,10],note:`Add ?_method=DELETE to form action. The POST request is converted to DELETE.`},{id:10,title:`Install Email Package`,description:`Nodemailer for sending emails from your Node.js application.`,code:`npm install nodemailer`,language:`bash`,subSteps:[{title:`nodemailer - Send Emails`,description:`Feature-rich module for sending emails. Supports multiple transports (SMTP, Gmail, etc.).`,code:`const nodemailer = require('nodemailer');

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
    \`<p>\${message}</p><p>From: \${email}</p>\`
  );
  res.send('Message sent!');
});`,language:`javascript`,highlightLines:[4,13,23,35],note:`For Gmail, enable 2FA and create an App Password in your Google Account settings.`},{title:`Nodemailer - Email Templates`,description:`Send formatted HTML emails with templates. Great for welcome emails, password resets, etc.`,code:`const sendWelcomeEmail = async (userEmail, username) => {
  const htmlTemplate = \`
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
        <h1>Welcome, \${username}!</h1>
        <p>Thank you for joining our platform.</p>
        <a href="https://yoursite.com/verify" class="button">Verify Email</a>
      </div>
    </body>
    </html>
  \`;
  
  await sendEmail(
    userEmail,
    'Welcome to Our Platform!',
    \`Welcome, \${username}! Thank you for joining.\`,
    htmlTemplate
  );
};

// Usage after user registration
app.post('/register', async (req, res) => {
  // ... create user ...
  await sendWelcomeEmail(user.email, user.username);
  res.send('Registration successful! Check your email.');
});`,language:`javascript`,highlightLines:[22,32]}]},{id:11,title:`Install All Packages at Once`,description:`Quick command to install all essential packages for a full-stack Express application.`,code:`npm install express express-session cookie-parser dotenv method-override mongoose connect-mongo bcrypt jsonwebtoken ejs express-ejs-layouts nodemailer`,language:`bash`,note:`This installs all the packages covered in this cheat sheet in one command.`},{id:12,title:`Complete Express App Setup Example`,description:`Putting it all together: a complete Express server configuration with all the libraries.`,code:`require('dotenv').config();
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB error:', err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(express.static('public'));

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }
}));

// View engine setup
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/main');

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`);
});`,language:`javascript`,highlightLines:[1,13,25,34,44]}]},i={title:`Väsentliga npm-bibliotek`,introduction:{heading:`Måste-ha npm-paket för Node.js & Express Projekt`,description:`En kurerad samling av de mest användbara npm-biblioteken för att bygga moderna webbapplikationer. Täcker autentisering, databasintegration, templating, säkerhet och mer. Dessa paket är produktionstestade och allmänt använda i Node.js-ekosystemet.`},prerequisites:[`Node.js och npm installerat`,`Grundläggande förståelse för Node.js och Express`,`Ett projekt initierat med npm init`],steps:[{id:1,title:`Installera Grundläggande Express-paket`,description:`Väsentliga paket för att bygga Express-applikationer med sessionshantering, cookies och miljövariabler.`,code:`npm install express express-session cookie-parser dotenv method-override`,language:`bash`,note:`Dessa är fundamentala paket som de flesta Express-appar kommer att behöva.`},{id:2,title:`Express - Webbramverk`,description:`Snabbt, oprinionerat, minimalistiskt webbramverk för Node.js. Grunden för att bygga webbservrar och API:er.`,code:`const express = require('express');
const app = express();

app.use(express.json()); // Parsa JSON-bodies
app.use(express.urlencoded({ extended: true })); // Parsa URL-kodade bodies

app.get('/', (req, res) => {
  res.send('Hej världen!');
});

app.listen(3000, () => {
  console.log('Server körs på port 3000');
});`,language:`javascript`,highlightLines:[4,5]},{id:3,title:`dotenv - Miljövariabler`,description:`Laddar miljövariabler från en .env-fil till process.env. Väsentligt för att hålla hemligheter utanför din kod.`,code:`// Längst upp i din huvudfil (t.ex. app.js eller server.js)
require('dotenv').config();

// Nu kan du komma åt miljövariabler
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DATABASE_URL;
const SECRET = process.env.SESSION_SECRET;`,language:`javascript`,note:`Skapa en .env-fil i din projektrot och lägg till den i .gitignore!`,subSteps:[{title:`Exempel .env-fil`,description:`Exempel på miljövariabler-fil. Commita aldrig detta till versionskontroll!`,code:`PORT=3000
DATABASE_URL=mongodb://localhost:27017/myapp
SESSION_SECRET=your-secret-key-here
JWT_SECRET=your-jwt-secret-here
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password`,language:`bash`,note:`Lägg till .env i din .gitignore-fil. Skapa .env.example med dummy-värden för dokumentation.`}]},{id:4,title:`Installera Databaspaket`,description:`Mongoose för MongoDB ODM och connect-mongo för att lagra sessioner i MongoDB.`,code:`npm install mongoose connect-mongo`,language:`bash`,subSteps:[{title:`mongoose - MongoDB ODM`,description:`Elegant MongoDB-objektmodellering för Node.js. Tillhandahåller schemavalidering, middleware och query-building.`,code:`const mongoose = require('mongoose');

// Anslut till MongoDB
mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('Ansluten till MongoDB'))
  .catch(err => console.error('MongoDB-anslutningsfel:', err));

// Definiera ett schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Skapa en modell
const User = mongoose.model('User', userSchema);

module.exports = User;`,language:`javascript`,highlightLines:[4,9,16]}]},{id:5,title:`express-session - Sessionshantering`,description:`Session-middleware för Express. Hanterar användarsessioner med cookies och serverbaserad lagring.`,code:`const session = require('express-session');
const MongoStore = require('connect-mongo');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.DATABASE_URL,
    touchAfter: 24 * 3600 // Lazy session-uppdatering (i sekunder)
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 1 vecka
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production' // Endast HTTPS i produktion
  }
}));`,language:`javascript`,highlightLines:[4,8,12],note:`connect-mongo lagrar sessioner i MongoDB istället för i minneslagring.`},{id:6,title:`cookie-parser - Parsa Cookies`,description:`Parsa Cookie-header och populera req.cookies. Användbart för att läsa klient-side cookies.`,code:`const cookieParser = require('cookie-parser');

app.use(cookieParser());

// Läs cookies
app.get('/profile', (req, res) => {
  const theme = req.cookies.theme || 'light';
  res.send(\`Aktuellt tema: \${theme}\`);
});

// Sätt cookies
app.post('/theme', (req, res) => {
  res.cookie('theme', req.body.theme, {
    maxAge: 1000 * 60 * 60 * 24 * 365, // 1 år
    httpOnly: true
  });
  res.send('Tema uppdaterat');
});`,language:`javascript`,highlightLines:[3,7,13]},{id:7,title:`Installera Autentiserings- & Säkerhetspaket`,description:`bcrypt för lösenordshashning och jsonwebtoken för JWT-autentisering.`,code:`npm install bcrypt jsonwebtoken`,language:`bash`,subSteps:[{title:`bcrypt - Lösenordshashning`,description:`Bibliotek för att hasha lösenord. Lagra aldrig lösenord i klartext! bcrypt använder salt och kostnadsfaktor för säkerhet.`,code:`const bcrypt = require('bcrypt');

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
});`,language:`javascript`,highlightLines:[6,12,19],note:`Högre saltRounds = säkrare men långsammare. 10-12 rekommenderas.`},{title:`jsonwebtoken - JWT-autentisering`,description:`Skapa och verifiera JSON Web Tokens för stateless autentisering. Alternativ till sessioner för API:er.`,code:`const jwt = require('jsonwebtoken');

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
});`,language:`javascript`,highlightLines:[5,15,19,27]}]},{id:8,title:`Installera Templating-paket`,description:`EJS (Embedded JavaScript) för server-side templating med layout-stöd.`,code:`npm install ejs express-ejs-layouts`,language:`bash`,subSteps:[{title:`ejs - Embedded JavaScript Templates`,description:`Enkelt templating-språk som låter dig generera HTML med JavaScript. Utmärkt för server-side rendering.`,code:`const express = require('express');
const app = express();

// Sätt EJS som view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Rendera en vy
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Startsida',
    user: { name: 'John', age: 30 }
  });
});`,language:`javascript`,highlightLines:[5,10]},{title:`Exempel på EJS-mall`,description:`Skapa en EJS-mallfil i views/index.ejs med inbäddad JavaScript.`,code:`<!DOCTYPE html>
<html>
<head>
  <title><%= title %></title>
</head>
<body>
  <h1>Välkommen, <%= user.name %>!</h1>
  <p>Du är <%= user.age %> år gammal.</p>
  
  <% if (user.age >= 18) { %>
    <p>Du är vuxen.</p>
  <% } else { %>
    <p>Du är minderårig.</p>
  <% } %>
  
  <ul>
    <% ['Äpple', 'Banan', 'Apelsin'].forEach(fruit => { %>
      <li><%= fruit %></li>
    <% }); %>
  </ul>
</body>
</html>`,language:`html`,note:`<%= %> matar ut escaped HTML, <%- %> matar ut rå HTML, <% %> kör JavaScript`},{title:`express-ejs-layouts - Layout-stöd`,description:`Lägger till layout-stöd till EJS. Definiera en huvudlayout och infoga sidinnehåll i den.`,code:`const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);
app.set('layout', 'layouts/main'); // Standard layout-fil

// views/layouts/main.ejs
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Min App</title>
// </head>
// <body>
//   <%- body %>
// </body>
// </html>`,language:`javascript`,highlightLines:[3,4],note:`Platshållaren <%- body %> i layouten ersätts med sidinnehåll.`}]},{id:9,title:`method-override - HTTP Method Override`,description:`Tillåter webbläsare att använda PUT och DELETE-metoder i formulär (som bara stöder GET och POST).`,code:`const methodOverride = require('method-override');

app.use(methodOverride('_method'));

// HTML-formulär med DELETE-metod
// <form action="/posts/123?_method=DELETE" method="POST">
//   <button type="submit">Ta bort inlägg</button>
// </form>

app.delete('/posts/:id', (req, res) => {
  // Hantera DELETE-förfrågan
  res.send(\`Tog bort inlägg \${req.params.id}\`);
});`,language:`javascript`,highlightLines:[3,10],note:`Lägg till ?_method=DELETE till formulärets action. POST-förfrågan konverteras till DELETE.`},{id:10,title:`Installera E-postpaket`,description:`Nodemailer för att skicka e-post från din Node.js-applikation.`,code:`npm install nodemailer`,language:`bash`,subSteps:[{title:`nodemailer - Skicka E-post`,description:`Funktionsrik modul för att skicka e-post. Stöder flera transporter (SMTP, Gmail, etc.).`,code:`const nodemailer = require('nodemailer');

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
    \`<p>\${message}</p><p>Från: \${email}</p>\`
  );
  res.send('Meddelande skickat!');
});`,language:`javascript`,highlightLines:[4,13,23,35],note:`För Gmail, aktivera 2FA och skapa ett App Password i dina Google-kontoinställningar.`},{title:`Nodemailer - E-postmallar`,description:`Skicka formaterade HTML-e-postmeddelanden med mallar. Utmärkt för välkomstmail, lösenordsåterställningar, etc.`,code:`const sendWelcomeEmail = async (userEmail, username) => {
  const htmlTemplate = \`
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
        <h1>Välkommen, \${username}!</h1>
        <p>Tack för att du gick med i vår plattform.</p>
        <a href="https://yoursite.com/verify" class="button">Verifiera E-post</a>
      </div>
    </body>
    </html>
  \`;
  
  await sendEmail(
    userEmail,
    'Välkommen till vår plattform!',
    \`Välkommen, \${username}! Tack för att du gick med.\`,
    htmlTemplate
  );
};

// Användning efter användarregistrering
app.post('/register', async (req, res) => {
  // ... skapa användare ...
  await sendWelcomeEmail(user.email, user.username);
  res.send('Registrering lyckad! Kolla din e-post.');
});`,language:`javascript`,highlightLines:[22,32]}]},{id:11,title:`Installera Alla Paket på en gång`,description:`Snabbkommando för att installera alla väsentliga paket för en full-stack Express-applikation.`,code:`npm install express express-session cookie-parser dotenv method-override mongoose connect-mongo bcrypt jsonwebtoken ejs express-ejs-layouts nodemailer`,language:`bash`,note:`Detta installerar alla paket som täcks i detta cheat sheet i ett kommando.`},{id:12,title:`Komplett Express-appinställning - Exempel`,description:`Sätta ihop det hela: en komplett Express-serverkonfiguration med alla bibliotek.`,code:`require('dotenv').config();
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express();

// Anslut till MongoDB
mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('Ansluten till MongoDB'))
  .catch(err => console.error('MongoDB-fel:', err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(express.static('public'));

// Sessionskonfiguration
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }
}));

// View engine-inställning
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/main');

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Hem' });
});

// Starta server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server körs på http://localhost:\${PORT}\`);
});`,language:`javascript`,highlightLines:[1,13,25,34,44]}]},a=t(),o={en:r,sv:i};function s(){let{i18n:t}=e(),r=o[t.language]||o.en,i=r.default||r;return(0,a.jsx)(n,{title:i.title,introduction:i.introduction,prerequisites:i.prerequisites,steps:i.steps,gettingStarted:i.gettingStarted,source:i.source},`npmlibraries`)}export{s as default};