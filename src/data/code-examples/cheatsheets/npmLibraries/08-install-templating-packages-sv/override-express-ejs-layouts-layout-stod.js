const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);
app.set('layout', 'layouts/main'); // Standard layout-fil

// views/layouts/main.ejs
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Min App</title>
// </head>
// <body>
//   <%- body %>
// </body>
// </html>
