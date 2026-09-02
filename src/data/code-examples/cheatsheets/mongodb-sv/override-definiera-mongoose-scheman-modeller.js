const mongoose = require('mongoose');

// Definiera ett användarschema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Användarnamn krävs'],
    unique: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Vänligen ange en giltig e-postadress']
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false // Inkludera inte lösenord i queries som standard
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Skapa och exportera modellen
const User = mongoose.model('User', userSchema);
module.exports = User;
