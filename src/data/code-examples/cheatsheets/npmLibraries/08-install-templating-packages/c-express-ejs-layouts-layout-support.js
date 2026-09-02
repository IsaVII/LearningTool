const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);
app.set('layout', 'layouts/main'); // Default layout file

// views/layouts/main.ejs
// <!DOCTYPE html>
// <html>
// <head>
//   <title>My App</title>
// </head>
// <body>
//   <%- body %>
// </body>
// </html>
