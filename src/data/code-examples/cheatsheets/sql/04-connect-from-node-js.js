require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Test the connection
pool.query('SELECT NOW()')
  .then((result) => {
    console.log('✓ Connected to PostgreSQL:', result.rows[0]);
  })
  .catch((err) => {
    console.error('✗ Database connection error:', err);
    process.exit(1);
  });

module.exports = pool;
