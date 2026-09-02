const express = require('express');
const app = express();

app.use(express.json()); // Parsa JSON-bodies
app.use(express.urlencoded({ extended: true })); // Parsa URL-kodade bodies

app.get('/', (req, res) => {
  res.send('Hej världen!');
});

app.listen(3000, () => {
  console.log('Server körs på port 3000');
});
