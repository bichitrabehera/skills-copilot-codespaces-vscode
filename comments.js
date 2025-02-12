// Create web server
// Import express module
const express = require('express');
// Create express instance
const app = express();
// Define port
const port = 3000;
// Import comments.json
const comments = require('./comments.json');
// Create get route for /comments
app.get('/comments', (req, res) => {
  // Send comments as response
  res.send(comments);
});
// Start server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});