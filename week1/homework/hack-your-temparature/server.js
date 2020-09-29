
const fs = require('fs');
const axios = require('axios');
const expHandleBars = require('express-handlebars');
const express = require('express');
const app = express();
const PORT = 3000;

// Make a GET request to / 
app.get('/', (request, response) => {
  response.send('Hello from backend to frontend!!!');
})

//listen to port 3000
app.listen(PORT, () => console.log(`Server is running on ${PORT}...`)); 