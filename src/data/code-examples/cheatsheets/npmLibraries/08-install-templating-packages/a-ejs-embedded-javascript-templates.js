const express = require('express');
const app = express();

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Render a view
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home Page',
    user: { name: 'John', age: 30 }
  });
});
