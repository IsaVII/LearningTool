// Add this at the VERY TOP of your app.js or server.js file

// Option A: ES Modules (if package.json has "type": "module")
// import dns from "node:dns/promises";
// dns.setServers(["1.1.1.1"]);

// Option B: CommonJS (require) - default in most Node projects
const dns = require('node:dns/promises');
dns.setServers(["1.1.1.1"]);

// Then proceed with dotenv and mongoose
require('dotenv').config();
const mongoose = require('mongoose');

// Now your MongoDB connection should work
mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('✓ Connected to MongoDB');
  })
  .catch((err) => {
    console.error('✗ MongoDB connection error:', err);
  });
