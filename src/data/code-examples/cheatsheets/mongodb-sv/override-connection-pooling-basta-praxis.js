// Avancerade anslutningsalternativ
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      // Connection pooling
      maxPoolSize: 10,        // Maximal poolstorlek
      minPoolSize: 5,         // Minimal poolstorlek
      maxIdleTimeMS: 45000,   // Stäng anslutningar efter 45 sekunders inaktivitet
      
      // Timeouts
      socketTimeoutMS: 45000,  // Socket timeout (i millisekunder)
      serverSelectionTimeoutMS: 5000,  // Server selection timeout
      
      // Retry-logik
      retryWrites: true,      // Försök automatiskt skriva om
      retryReads: true,       // Försök automatiskt läsa om
      
      // Andra alternativ
      family: 4               // Använd IPv4
    });
    
    console.log('✓ MongoDB ansluten framgångsrikt');
    return mongoose.connection;
  } catch (error) {
    console.error('✗ MongoDB-anslutning misslyckades:', error.message);
    process.exit(1);
  }
};

// Anropa detta i din huvudapp-fil
connectDB();

// Bästa praxis:
// 1. Använd connection pooling för att återanvända anslutningar
// 2. Sätt lämpliga timeouts för din applikation
// 3. Aktivera retry-logik för bättre tillförlitlighet
// 4. Stäng anslutningar på ett korrekt sätt vid app-avstängning
// 5. Använd index på ofta efterfrågade fält
// 6. Övervaka användning av connection pool
