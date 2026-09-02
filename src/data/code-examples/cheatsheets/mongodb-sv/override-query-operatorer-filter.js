const User = require('./models/User');

// Hitta via specifikt fält
const userByEmail = await User.findOne({ email: 'user@example.com' });

// Hitta med flera villkor (AND)
const activeAdmins = await User.find({
  role: 'admin',
  createdAt: { $gte: new Date('2024-01-01') }
});

// OR-query
const searchResults = await User.find({
  $or: [
    { username: 'john' },
    { email: 'john@example.com' }
  ]
});

// Jämförelseoperatorer
const users = await User.find({
  createdAt: {
    $gte: startDate,  // Större än eller lika med
    $lt: endDate      // Mindre än
  }
});

// Sortering och begränsning
const recentUsers = await User.find()
  .sort({ createdAt: -1 })  // -1 för fallande, 1 för stigande
  .limit(10)                 // Begränsa till 10 resultat
  .skip(0);                  // Hoppa över första 0 resultat (för paginering)

// Välja specifika fält
const usernames = await User.find()
  .select('username email')  // Inkludera endast dessa fält
  .select('-password');      // Exkludera lösenordsfält

// Vanliga jämförelseoperatorer:
// $eq: lika med
// $ne: inte lika med
// $gt: större än
// $gte: större än eller lika med
// $lt: mindre än
// $lte: mindre än eller lika med
// $in: värde i array
// $nin: värde inte i array
// $exists: fält finns
// $type: kontrollera fälttyp
