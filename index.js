// Importing the required modules
const express = require('express');

require('dotenv').config(); //The dotenv module is used to load environment variables from a .env file into Node.js process.env object.
// By calling require('dotenv').config(), we are instructing the dotenv module to read the .env file and load the environment variables into the process.env object. Once loaded, these environment variables can be accessed within the application using process.env.VARIABLE_NAME syntax.

const db = require('./config/mongoose')
// Creating an instance of the express application
const app = express();

// Setting the port number for the server
const port = 7000 || process.env.port;

app.use(express.json());

// Mounting the routes
app.use('/', require('./routes/index'));

// Starting the server and listening on the specified port
const server = app.listen(port, (err) => {
  if (err) {
    console.error("Error in starting server:", err);
  } else {
    console.log(`Server Started on port 😊 ${port}`);
  }
});

module.exports = { app, server };