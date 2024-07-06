// app.js

// Import required modules
const express = require("express");

// Create an Express application
const app = express();

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
const port =3012;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
