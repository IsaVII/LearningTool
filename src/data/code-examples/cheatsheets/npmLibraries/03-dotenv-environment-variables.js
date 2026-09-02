// At the very top of your main file (e.g., app.js or server.js)
require('dotenv').config();

// Now you can access environment variables
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DATABASE_URL;
const SECRET = process.env.SESSION_SECRET;
