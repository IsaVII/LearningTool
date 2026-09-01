import{a as e,i as t}from"./TextReveal-BmuH47v_.js";import{t as n}from"./CheatSheetLayout-BH6MCR61.js";var r={title:`MongoDB Setup & Connection`,introduction:{heading:`MongoDB Setup, Configuration & Troubleshooting`,description:`A comprehensive guide to setting up MongoDB Atlas, connecting from your Node.js application, configuring network access, and resolving common connection issues. Includes DNS fixes for connection errors and proper configuration for cloud deployments like Render.`},prerequisites:[`Node.js and npm installed`,`MongoDB Atlas account (free tier available at mongodb.com)`,`Basic understanding of databases and connection strings`,`Dotenv (.env file) for storing credentials`],steps:[{id:1,title:`Create MongoDB Atlas Account & Cluster`,description:`Set up a free MongoDB Atlas account and create your first database cluster.`,code:`1. Go to https://www.mongodb.com/cloud/atlas
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
□ Review MongoDB logs for errors`,language:`bash`,note:`Most connection issues are related to network access, DNS, or incorrect credentials.`}]},i={title:`MongoDB-inställning & Anslutning`,introduction:{heading:`MongoDB-inställning, Konfiguration & Felsökning`,description:`En omfattande guide för att sätta upp MongoDB Atlas, ansluta från din Node.js-applikation, konfigurera nätverksåtkomst och lösa vanliga anslutningsproblem. Inkluderar DNS-fixar för anslutningsfel och korrekt konfiguration för molndistributioner som Render.`},prerequisites:[`Node.js och npm installerat`,`MongoDB Atlas-konto (gratis nivå tillgänglig på mongodb.com)`,`Grundläggande förståelse för databaser och anslutningssträngar`,`Dotenv (.env-fil) för att lagra referenser`],steps:[{id:1,title:`Skapa MongoDB Atlas-konto & Kluster`,description:`Sätt upp ett gratis MongoDB Atlas-konto och skapa ditt första databaskluster.`,code:`1. Gå till https://www.mongodb.com/cloud/atlas
2. Klicka "Sign Up" och skapa ett konto
3. Skapa ett nytt projekt
4. Skapa ett nytt Kluster (M0-nivå är gratis)
5. Vänta på att klustret distribueras (vanligtvis 1-2 minuter)
6. Gå till 'Database Access' och skapa en databasanvändare
7. Sätt ett lösenord och spara referenserna
8. Gå till 'Network Access' och konfigurera IP-vitlistan`,language:`bash`,note:`Håll dina databasreferenser säkra! Lagra dem i .env-fil, aldrig i kod.`},{id:2,title:`Konfigurera Nätverksåtkomst (IP-vitlista)`,description:`Lägg till tillåtna IP-adresser till MongoDB Atlas för att möjliggöra anslutningar från din applikation.`,code:`Steg för att konfigurera IP Access List:
1. Gå till MongoDB Atlas Dashboard
2. Klicka 'Network Access' i sidofältet
3. Klicka 'Add IP Address'-knappen
4. Välj ett av alternativen:
   - Current IP Address: Lägger till din nuvarande IP (bra för utveckling)
   - Allow Access from Anywhere: Lägg till 0.0.0.0/0 (tillåter alla IP:er)
5. Klicka 'Confirm'

För RENDER eller molndistributioner:
- Klicka 'Add IP Address'
- Välj 'Allow Access from Anywhere'
- Ange 0.0.0.0/0 i IP-adressfältet
- Klicka 'Confirm'
- Detta tillåter anslutningar från vilken IP-adress som helst`,language:`bash`,highlightLines:[10],note:`För utveckling använd 'Allow Access from Anywhere' (0.0.0.0/0). För produktion, lägg till specifika IP:er för dina servrar.`},{id:3,title:`Hämta din Anslutningssträng`,description:`Hämta MongoDB-anslutningssträngen från Atlas för att använda i din applikation.`,code:`1. Gå till MongoDB Atlas Dashboard
2. Klicka 'Clusters' i sidofältet
3. Klicka 'Connect'-knappen på ditt kluster
4. Välj 'Connect your application'
5. Välj 'Node.js' och version '3.0 or later'
6. Kopiera anslutningssträngen
   Exempel: mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/database_name
7. Ersätt <password> med ditt faktiska databaslösenord
8. Lagra i din .env-fil som DATABASE_URL`,language:`bash`,note:`Hårdkoda aldrig anslutningssträngen! Använd alltid miljövariabler.`},{id:4,title:`Installera MongoDB-anslutningspaket`,description:`Installera Mongoose (rekommenderad ODM) för MongoDB-anslutning och schemahantering.`,code:`npm install mongoose dotenv`,language:`bash`,subSteps:[{title:`.env-konfiguration`,description:`Skapa en .env-fil i din projektrot med MongoDB-referenser.`,code:`# MongoDB-anslutningssträng
DATABASE_URL=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/myapp?retryWrites=true&w=majority

# Alternativ för lokal MongoDB
# DATABASE_URL=mongodb://localhost:27017/myapp

# Node-miljö
NODE_ENV=development

# Serverport
PORT=3000`,language:`bash`,note:`Lägg till .env i din .gitignore-fil! Skapa .env.example med dummy-värden för dokumentation.`},{title:`Grundläggande Anslutningsinställning`,description:`Anslut till MongoDB i din huvudapplikationsfil.`,code:`require('dotenv').config();
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
});`,language:`javascript`,highlightLines:[5,9,15,19,23]}]},{id:5,title:`Felsökning Anslutningsfel - DNS-fix`,description:`Lös 'ENOTFOUND' och DNS-relaterade anslutningsfel genom att konfigurera DNS-servrar.`,code:`Om du får fel som:
- ENOTFOUND: cluster0.xxxxx.mongodb.net
- getaddrinfo ENOTFOUND
- Connection timeout-fel

Lägg till detta längst upp i din huvudfil (före all MongoDB-kod):`,language:`bash`,subSteps:[{title:`DNS-fix-implementering`,description:`Konfigurera DNS-servrar för att lösa MongoDB-anslutningsproblem.`,code:`// Lägg till detta LÄNGST UPP i din app.js eller server.js-fil

// Alternativ A: ES-moduler (om package.json har "type": "module")
// import dns from "node:dns/promises";
// dns.setServers(["1.1.1.1"]);

// Alternativ B: CommonJS (require) - standard i de flesta Node-projekt
const dns = require('node:dns/promises');
dns.setServers(["1.1.1.1"]);

// Fortsätt sedan med dotenv och mongoose
require('dotenv').config();
const mongoose = require('mongoose');

// Nu bör din MongoDB-anslutning fungera
mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('✓ Ansluten till MongoDB');
  })
  .catch((err) => {
    console.error('✗ MongoDB-anslutningsfel:', err);
  });`,language:`javascript`,highlightLines:[7,8,16],note:`Placera DNS-konfigurationen FÖRE alla andra MongoDB- eller nätverksoperationer. 1.1.1.1 är Cloudflares DNS-server.`},{title:`Varför detta fungerar`,description:`Förstå DNS-fixen för MongoDB-anslutningsproblem.`,code:`DNS-upplösningsproblem:
- MongoDB Atlas använder domännamn (cluster0.xxxxx.mongodb.net)
- Ditt system behöver lösa dessa till IP-adresser via DNS
- Ibland är standard-DNS-servrar långsamma eller opålitliga
- Detta orsakar 'ENOTFOUND' eller timeout-fel

Lösning:
- Använd Cloudflares offentliga DNS (1.1.1.1)
- Fungerar också: Google (8.8.8.8) eller Quad9 (9.9.9.9)
- Detta är en beprövad lösning för Node.js DNS-problem

Alternativa DNS-servrar:
1. Cloudflare: 1.1.1.1 (rekommenderas)
2. Google: 8.8.8.8
3. Quad9: 9.9.9.9
4. OpenDNS: 208.67.222.222`,language:`bash`,note:`Denna fix är särskilt användbar på delad hosting eller molnplattformar som Render.`}]},{id:6,title:`MongoDB Atlas IP-vitlista för Render`,description:`Konfigurera MongoDB Atlas nätverksåtkomst specifikt för Render-distribution.`,code:`Vid distribution till Render:

1. MongoDB Atlas Dashboard
2. Klicka 'Network Access'
3. Klicka 'Add IP Address'
4. I IP Address-fältet: Ange 0.0.0.0/0
5. Klicka 'Confirm'
6. Klicka 'Add IP Address' igen om du också vill lägga till din lokala maskin
7. Din lokala maskin IP: Klicka 'Add Current IP Address'

0.0.0.0/0 betyder:
- Tillåt anslutningar från VILKEN IP-adress som helst
- Använd detta för molndistributioner (Render, Heroku, AWS, etc.)
- Mindre säkert än specifika IP:er, men nödvändigt för dynamiska IP:er`,language:`bash`,highlightLines:[7],note:`Isa* — *2026-05-22 14:35: Lägg till 0.0.0.0/0 i IP Access List i MongoDB för RENDER`},{id:7,title:`Definiera Mongoose-scheman & Modeller`,description:`Skapa datascheman och modeller för dina MongoDB-samlingar.`,code:`const mongoose = require('mongoose');

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
    match: [/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/, 'Vänligen ange en giltig e-postadress']
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
module.exports = User;`,language:`javascript`,highlightLines:[8,23,26,41]},{id:8,title:`Grundläggande CRUD-operationer`,description:`Skapa, Läsa, Uppdatera och Ta bort dokument i MongoDB med Mongoose.`,code:`const User = require('./models/User'); // Importera din modell

// CREATE - Lägg till ny användare
const createUser = async (userData) => {
  try {
    const newUser = new User(userData);
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    console.error('Fel vid skapande av användare:', error);
  }
};

// READ - Hämta användare via ID
const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    console.error('Fel vid hämtning av användare:', error);
  }
};

// READ - Hämta alla användare
const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.error('Fel vid hämtning av användare:', error);
  }
};

// UPDATE - Uppdatera användare
const updateUser = async (userId, updateData) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updateData,
      { new: true, runValidators: true }
    );
    return updatedUser;
  } catch (error) {
    console.error('Fel vid uppdatering av användare:', error);
  }
};

// DELETE - Ta bort användare
const deleteUser = async (userId) => {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    return deletedUser;
  } catch (error) {
    console.error('Fel vid borttagning av användare:', error);
  }
};`,language:`javascript`,highlightLines:[6,16,26,36,49]},{id:9,title:`Query-operatorer & Filter`,description:`Använd MongoDB query-operatorer för att filtrera och hitta dokument effektivt.`,code:`const User = require('./models/User');

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
// $type: kontrollera fälttyp`,language:`javascript`,highlightLines:[4,7,12,20,28,32,39],note:`Använd alltid operatorer som $ne, $gt, etc. för queries. Undvik att hårdkoda fältvärden i villkor.`},{id:10,title:`Connection Pooling & Bästa Praxis`,description:`Optimera MongoDB-anslutningar med korrekt pooling-konfiguration och felhantering.`,code:`// Avancerade anslutningsalternativ
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
// 6. Övervaka användning av connection pool`,language:`javascript`,highlightLines:[8,13,18,22],note:`Korrekt pooling-konfiguration förbättrar prestanda, särskilt i produktionsmiljöer.`},{id:11,title:`Vanliga Anslutningsfel & Lösningar`,description:`Felsök och lös vanliga MongoDB-anslutningsproblem.`,code:`Error: connect ECONNREFUSED 127.0.0.1:27017
Lösning: MongoDB-server körs inte. Starta MongoDB-tjänsten.

Error: MongoAuthenticationError: authentication failed
Lösning: Fel användarnamn/lösenord. Kontrollera referenser i .env-fil.

Error: MongoServerError: connect ENOTFOUND
Lösning: DNS-upplösning misslyckades. Lägg till DNS-konfiguration (se DNS-fix-steget).

Error: connect ETIMEDOUT
Lösning: 
- Nätverks-/brandväggsproblem
- Timeout för kort (öka socketTimeoutMS)
- Server onåbar

Error: FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed
Lösning: Slut på minne. Minska poolstorlek eller kontrollera minnesläckor.

Error: MongooseError: Trying to open an unclosed connection.
Lösning: Databas redan ansluten. Ta bort dubbletter av anslutningsanrop.

Felsökningschecklista:
□ Kontrollera att .env-fil har DATABASE_URL korrekt satt
□ Verifiera att MongoDB-tjänsten körs
□ Kontrollera IP-vitlista i MongoDB Atlas (0.0.0.0/0 för moln)
□ Verifiera att användarnamn och lösenord är korrekta
□ Testa anslutningssträng manuellt
□ Kontrollera nätverks-/brandväggsinställningar
□ Granska MongoDB-loggar för fel`,language:`bash`,note:`De flesta anslutningsproblem är relaterade till nätverksåtkomst, DNS eller felaktiga referenser.`}]},a=t(),o={en:r,sv:i};function s(){let{i18n:t}=e(),r=o[t.language]||o.en,i=r.default||r;return(0,a.jsx)(n,{title:i.title,introduction:i.introduction,prerequisites:i.prerequisites,steps:i.steps,gettingStarted:i.gettingStarted,source:i.source},`mongodb`)}export{s as default};