const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <html>
    <body>
    <h1>The Acme Movie API </h1>
    </body>
  </html>
  `);
});

module.exports = app;
