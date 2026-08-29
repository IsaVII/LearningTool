import{i as e}from"./index-B3cyjDGH.js";import{t}from"./CheatSheetLayout-Bzgfnd8m.js";var n={title:`MongoDB Setup & Connection`,introduction:{heading:`MongoDB Setup, Configuration & Troubleshooting`,description:`A comprehensive guide to setting up MongoDB Atlas, connecting from your Node.js application, configuring network access, and resolving common connection issues. Includes DNS fixes for connection errors and proper configuration for cloud deployments like Render.`},prerequisites:[`Node.js and npm installed`,`MongoDB Atlas account (free tier available at mongodb.com)`,`Basic understanding of databases and connection strings`,`Dotenv (.env file) for storing credentials`],steps:[{id:1,title:`Create MongoDB Atlas Account & Cluster`,description:`Set up a free MongoDB Atlas account and create your first database cluster.`,code:`1. Go to https://www.mongodb.com/cloud/atlas
2. Click "Sign Up" and create an account
3. Create a new project
4. Create a new Cluster (M0 tier is free)
5. Wait for cluster to be deployed (usually 1-2 minutes)
6. Go to 'Database Access' and create a database user
7. Set a password and save the credentials
8. Go to 'Network Access' and configure IP whitelist`,language:`bash`,note:`Keep your database credentials secure! Store them in .env file, never in code.`},{id:2,title:`Configure Network Access (IP Whitelist)`,description:`Add allowed IP addresses to MongoDB Atlas to enable connections from your application.`,code:`Steps to configure IP Access List:
1. Go to MongoDB Atlas Dashboard
2. Click 'Network Access' in the left sidebar
3. Click 'Add IP Address' button
4. Choose one of the options:
   - Current IP Address: Adds your current IP (good for development)
   - Allow Access from Anywhere: Add 0.0.0.0/0 (allows all IPs)
5. Click 'Confirm'

For RENDER or cloud deployments:
- Click 'Add IP Address'
- Select 'Allow Access from Anywhere'
- Enter 0.0.0.0/0 in the IP address field
- Click 'Confirm'
- This allows connections from any IP address`,language:`bash`,highlightLines:[10],note:`For development use 'Allow Access from Anywhere' (0.0.0.0/0). For production, add specific IPs of your servers.`},{id:3,title:`Get Your Connection String`,description:`Retrieve the MongoDB connection string from Atlas to use in your application.`,code:`1. Go to MongoDB Atlas Dashboard
2. Click 'Clusters' in the left sidebar
3. Click 'Connect' button on your cluster
4. Choose 'Connect your application'
5. Select 'Node.js' and version '3.0 or later'
6. Copy the connection string
   Example: mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/database_name
7. Replace <password> with your actual database password
8. Store in your .env file as DATABASE_URL`,language:`bash`,note:`Never hardcode the connection string! Always use environment variables.`},{id:4,title:`Install MongoDB Connection Packages`,description:`Install Mongoose (recommended ODM) for MongoDB connection and schema management.`,code:`npm install mongoose dotenv`,language:`bash`,subSteps:[{title:`.env Configuration`,description:`Create a .env file in your project root with MongoDB credentials.`,code:`# MongoDB Connection String
DATABASE_URL=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/myapp?retryWrites=true&w=majority

# Alternative for local MongoDB
# DATABASE_URL=mongodb://localhost:27017/myapp

# Node Environment
NODE_ENV=development

# Server Port
PORT=3000`,language:`bash`,note:`Add .env to your .gitignore file! Create .env.example with dummy values for documentation.`},{title:`Basic Connection Setup`,description:`Connect to MongoDB in your main application file.`,code:`require('dotenv').config();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('✓ Connected to MongoDB');
  })
  .catch((err) => {
    console.error('✗ MongoDB connection error:', err);
    process.exit(1); // Exit if connection fails
  });

// Handle connection events
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected from MongoDB');
});`,language:`javascript`,highlightLines:[5,9,15,19,23]}]},{id:5,title:`Troubleshooting Connection Errors - DNS Fix`,description:`Resolve 'ENOTFOUND' and DNS-related connection errors by configuring DNS servers.`,code:`If you get error like:
- ENOTFOUND: cluster0.xxxxx.mongodb.net
- getaddrinfo ENOTFOUND
- Connection timeout errors

Add this at the very top of your main file (before any MongoDB code):`,language:`bash`,subSteps:[{title:`DNS Fix Implementation`,description:`Configure DNS servers to resolve MongoDB connection issues.`,code:`// Add this at the VERY TOP of your app.js or server.js file

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
  });`,language:`javascript`,highlightLines:[7,8,16],note:`Place the DNS configuration BEFORE any other MongoDB or network operations. 1.1.1.1 is Cloudflare's DNS server.`},{title:`Why This Works`,description:`Understanding the DNS fix for MongoDB connection issues.`,code:`DNS Resolution Problem:
- MongoDB Atlas uses domain names (cluster0.xxxxx.mongodb.net)
- Your system needs to resolve these to IP addresses via DNS
- Sometimes default DNS servers are slow or unreliable
- This causes 'ENOTFOUND' or timeout errors

Solution:
- Use Cloudflare's public DNS (1.1.1.1)
- Also works: Google (8.8.8.8) or Quad9 (9.9.9.9)
- This is a proven workaround for Node.js DNS issues

Alternative DNS Servers:
1. Cloudflare: 1.1.1.1 (recommended)
2. Google: 8.8.8.8
3. Quad9: 9.9.9.9
4. OpenDNS: 208.67.222.222`,language:`bash`,note:`This fix is especially useful on shared hosting or cloud platforms like Render.`}]},{id:6,title:`MongoDB Atlas IP Whitelist for Render`,description:`Configure MongoDB Atlas network access specifically for Render deployment.`,code:`When deploying to Render:

1. MongoDB Atlas Dashboard
2. Click 'Network Access'
3. Click 'Add IP Address'
4. In the IP Address field: Enter 0.0.0.0/0
5. Click 'Confirm'
6. Click 'Add IP Address' again if you want to also add your local machine
7. Your local machine IP: Click 'Add Current IP Address'

0.0.0.0/0 means:
- Allow connections from ANY IP address
- Use this for cloud deployments (Render, Heroku, AWS, etc.)
- Less secure than specific IPs, but necessary for dynamic IPs`,language:`bash`,highlightLines:[7],note:`Isa* — *2026-05-22 14:35: Add 0.0.0.0/0 into the IP Access List in MongoDB for RENDER`},{id:7,title:`Define Mongoose Schemas & Models`,description:`Create data schemas and models for your MongoDB collections.`,code:`const mongoose = require('mongoose');

// Define a user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/, 'Please provide a valid email']
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false // Don't include password in queries by default
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

// Create and export the model
const User = mongoose.model('User', userSchema);
module.exports = User;`,language:`javascript`,highlightLines:[8,23,26,41]},{id:8,title:`Basic CRUD Operations`,description:`Create, Read, Update, and Delete documents in MongoDB using Mongoose.`,code:`const User = require('./models/User'); // Import your model

// CREATE - Add a new user
const createUser = async (userData) => {
  try {
    const newUser = new User(userData);
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

// READ - Get user by ID
const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
  }
};

// READ - Get all users
const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

// UPDATE - Update user
const updateUser = async (userId, updateData) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updateData,
      { new: true, runValidators: true }
    );
    return updatedUser;
  } catch (error) {
    console.error('Error updating user:', error);
  }
};

// DELETE - Delete user
const deleteUser = async (userId) => {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    return deletedUser;
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};`,language:`javascript`,highlightLines:[6,16,26,36,49]},{id:9,title:`Query Operators & Filters`,description:`Use MongoDB query operators to filter and find documents efficiently.`,code:`const User = require('./models/User');

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
// $type: check field type`,language:`javascript`,highlightLines:[4,7,12,20,28,32,39],note:`Always use operators like $ne, $gt, etc. for queries. Avoid hardcoding field values in conditions.`},{id:10,title:`Connection Pooling & Best Practices`,description:`Optimize MongoDB connections with proper pooling configuration and error handling.`,code:`// Advanced connection options
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      // Connection pooling
      maxPoolSize: 10,        // Maximum pool size
      minPoolSize: 5,         // Minimum pool size
      maxIdleTimeMS: 45000,   // Close connections after 45 seconds of inactivity
      
      // Timeouts
      socketTimeoutMS: 45000,  // Socket timeout (in milliseconds)
      serverSelectionTimeoutMS: 5000,  // Server selection timeout
      
      // Retry logic
      retryWrites: true,      // Automatically retry writes
      retryReads: true,       // Automatically retry reads
      
      // Other options
      family: 4               // Use IPv4
    });
    
    console.log('✓ MongoDB connected successfully');
    return mongoose.connection;
  } catch (error) {
    console.error('✗ MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

// Call this in your main app file
connectDB();

// Best Practices:
// 1. Use connection pooling to reuse connections
// 2. Set appropriate timeouts for your application
// 3. Enable retry logic for better reliability
// 4. Close connections gracefully on app shutdown
// 5. Use indexes on frequently queried fields
// 6. Monitor connection pool usage`,language:`javascript`,highlightLines:[8,13,18,22],note:`Proper pooling configuration improves performance, especially in production environments.`},{id:11,title:`Common Connection Errors & Solutions`,description:`Troubleshoot and resolve common MongoDB connection issues.`,code:`Error: connect ECONNREFUSED 127.0.0.1:27017
Solution: MongoDB server is not running. Start MongoDB service.

Error: MongoAuthenticationError: authentication failed
Solution: Wrong username/password. Check credentials in .env file.

Error: MongoServerError: connect ENOTFOUND
Solution: DNS resolution failed. Add DNS configuration (see DNS Fix step).

Error: connect ETIMEDOUT
Solution: 
- Network/firewall issue
- Timeout too short (increase socketTimeoutMS)
- Server unreachable

Error: FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed
Solution: Out of memory. Reduce pool size or check for memory leaks.

Error: MongooseError: Trying to open an unclosed connection.
Solution: Database already connected. Remove duplicate connection calls.

Debugging checklist:
□ Check .env file has DATABASE_URL set correctly
□ Verify MongoDB service is running
□ Check IP whitelist in MongoDB Atlas (0.0.0.0/0 for cloud)
□ Verify username and password are correct
□ Test connection string manually
□ Check network/firewall settings
□ Review MongoDB logs for errors`,language:`bash`,note:`Most connection issues are related to network access, DNS, or incorrect credentials.`}]},r=e();function i(){let e=n.default||n;return(0,r.jsx)(t,{title:e.title,introduction:e.introduction,prerequisites:e.prerequisites,steps:e.steps,gettingStarted:e.gettingStarted,source:e.source},`mongodb`)}export{i as default};