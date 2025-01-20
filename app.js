const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define a route
app.get('/', (req, res) => {
    res.render('index', { title: 'Developer Hub', description: "Apeksh's Official Page" });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
