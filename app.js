const express = require('express');
const path = require('path');
const ping = require('ping');

const app = express();
// const PORT = 2000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));

});

// Route to serve the CSS file
app.get('/styles.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'styles.css'));
});

app.get('/halftone-background-with-circles_23-2148907689.avif', (req, res) => {
  res.sendFile(path.join(__dirname, 'halftone-background-with-circles_23-2148907689.avif'));
});

// Route to handle the ping operation
app.get('/ping', (req, res) => {
  const ip = req.query.ip;

  ping.sys.probe(ip, function(isAlive) {
    const msg = isAlive ? `Host ${ip} is alive` : `Host ${ip} is dead`;
    res.json({ message: msg });
  });
});
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});