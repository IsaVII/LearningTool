const session = require('express-session');
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
}));
