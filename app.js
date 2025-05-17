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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);

app.get('/apeksh', (req, res) => {
  res.render('apeksh');
});
});
