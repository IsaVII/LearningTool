// Advanced connection options
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
// 6. Monitor connection pool usage
