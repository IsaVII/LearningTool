require('dotenv').config();
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
  console.log(`Server körs på http://localhost:${PORT}`);
});
