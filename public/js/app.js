const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Route to render the homepage
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Developer Hub',
        description: 'Welcome to the official page of Apeksh!',
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
