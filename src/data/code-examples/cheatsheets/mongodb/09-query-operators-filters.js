const User = require('./models/User');

// Find by specific field
const userByEmail = await User.findOne({ email: 'user@example.com' });

// Find with multiple conditions (AND)
const activeAdmins = await User.find({
  role: 'admin',
  createdAt: { $gte: new Date('2024-01-01') }
});

// OR query
const searchResults = await User.find({
  $or: [
    { username: 'john' },
    { email: 'john@example.com' }
  ]
});

// Comparison operators
const users = await User.find({
  createdAt: {
    $gte: startDate,  // Greater than or equal
    $lt: endDate      // Less than
  }
});

// Sorting and limiting
const recentUsers = await User.find()
  .sort({ createdAt: -1 })  // -1 for descending, 1 for ascending
  .limit(10)                 // Limit to 10 results
  .skip(0);                  // Skip first 0 results (for pagination)

// Selecting specific fields
const usernames = await User.find()
  .select('username email')  // Include only these fields
  .select('-password');      // Exclude password field

// Common comparison operators:
// $eq: equal
// $ne: not equal
// $gt: greater than
// $gte: greater than or equal
// $lt: less than
// $lte: less than or equal
// $in: value in array
// $nin: value not in array
// $exists: field exists
// $type: check field type
