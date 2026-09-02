const express = require('express');
const app = express();

// Sätt EJS som view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Rendera en vy
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Startsida',
    user: { name: 'John', age: 30 }
  });
});
