const methodOverride = require('method-override');

app.use(methodOverride('_method'));

// HTML-formulär med DELETE-metod
// <form action="/posts/123?_method=DELETE" method="POST">
//   <button type="submit">Ta bort inlägg</button>
// </form>

app.delete('/posts/:id', (req, res) => {
  // Hantera DELETE-förfrågan
  res.send(`Tog bort inlägg ${req.params.id}`);
});
