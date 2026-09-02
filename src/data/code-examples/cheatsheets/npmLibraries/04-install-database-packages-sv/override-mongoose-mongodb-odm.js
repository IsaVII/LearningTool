const mongoose = require('mongoose');

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

module.exports = User;
