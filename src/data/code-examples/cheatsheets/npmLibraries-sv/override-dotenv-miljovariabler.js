// Längst upp i din huvudfil (t.ex. app.js eller server.js)
require('dotenv').config();

// Nu kan du komma åt miljövariabler
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DATABASE_URL;
const SECRET = process.env.SESSION_SECRET;
