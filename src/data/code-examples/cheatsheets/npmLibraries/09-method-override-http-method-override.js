const methodOverride = require('method-override');

app.use(methodOverride('_method'));

// HTML form with DELETE method
// <form action="/posts/123?_method=DELETE" method="POST">
//   <button type="submit">Delete Post</button>
// </form>

app.delete('/posts/:id', (req, res) => {
  // Handle DELETE request
  res.send(`Deleted post ${req.params.id}`);
});
