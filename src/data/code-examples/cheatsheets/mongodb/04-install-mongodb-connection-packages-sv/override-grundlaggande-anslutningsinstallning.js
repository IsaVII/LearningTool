require('dotenv').config();
const mongoose = require('mongoose');

// Anslut till MongoDB
mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('✓ Ansluten till MongoDB');
  })
  .catch((err) => {
    console.error('✗ MongoDB-anslutningsfel:', err);
    process.exit(1); // Avsluta om anslutning misslyckas
  });

// Hantera anslutningshändelser
mongoose.connection.on('connected', () => {
  console.log('Mongoose ansluten till MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose-anslutningsfel:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose frånkopplad från MongoDB');
});
