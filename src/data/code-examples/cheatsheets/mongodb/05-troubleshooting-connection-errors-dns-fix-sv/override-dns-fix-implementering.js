// Lägg till detta LÄNGST UPP i din app.js eller server.js-fil

// Alternativ A: ES-moduler (om package.json har "type": "module")
// import dns from "node:dns/promises";
// dns.setServers(["1.1.1.1"]);

// Alternativ B: CommonJS (require) - standard i de flesta Node-projekt
const dns = require('node:dns/promises');
dns.setServers(["1.1.1.1"]);

// Fortsätt sedan med dotenv och mongoose
require('dotenv').config();
const mongoose = require('mongoose');

// Nu bör din MongoDB-anslutning fungera
mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('✓ Ansluten till MongoDB');
  })
  .catch((err) => {
    console.error('✗ MongoDB-anslutningsfel:', err);
  });
