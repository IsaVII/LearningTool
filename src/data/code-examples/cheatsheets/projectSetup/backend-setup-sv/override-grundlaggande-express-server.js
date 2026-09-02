// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hej från backend!' });
});

app.listen(3000, () => console.log('Server på port 3000'));
