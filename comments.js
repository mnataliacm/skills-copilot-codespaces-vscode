// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Load the comments
const fs = require('fs');
const data = fs.readFileSync('comments.json');
const comments = JSON.parse(data);
console.log(comments);

// Create a route for the comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Start the web server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});