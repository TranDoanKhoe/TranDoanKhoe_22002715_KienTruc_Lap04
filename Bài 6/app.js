const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello from Node.js Application!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
