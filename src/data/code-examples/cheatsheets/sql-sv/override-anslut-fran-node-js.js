require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Testa anslutningen
pool.query('SELECT NOW()')
  .then((result) => {
    console.log('✓ Ansluten till PostgreSQL:', result.rows[0]);
  })
  .catch((err) => {
    console.error('✗ Databasanslutningsfel:', err);
    process.exit(1);
  });

module.exports = pool;
