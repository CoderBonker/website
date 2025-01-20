const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to ejs
app.set('view engine', 'ejs');


// Define a route to render the index.ejs file
app.get('/', (req, res) => {
  res.render('index', { title: 'Developer Hub', description: 'Your go-to place for development resources.' });
});

// // Route to render the main webpage
// app.get('/', (req, res) => {
//   res.send(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title><%= title %></title>
//         <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
//         <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.2/dist/tailwind.min.css" rel="stylesheet">
//         <link rel="icon" href="/favicon.ico">
//     </head>
//     <body class="bg-light">
//         <div class="container text-center py-5 text-center">
//             <h1 class="text-4xl font-semibold text-primary mb-6">Welcome to the <%= title %></h1>

//             <p class="lead text-dark"><%= description %></p>

//             <img src="/images/peakxps.jpg" alt="Developer Hub" class="img-fluid rounded-lg shadow mb-8" style="max-width: 100%;">

//             <a href="https://example.com" class="btn btn-primary btn-lg px-4 py-2">Learn More</a>

//         </div>
//     </body>
//     </html>
//   `);
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
