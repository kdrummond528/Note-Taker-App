// dependencies
const express = require('express');
const path = require('path');

// var for express
const app = express();

// local host
const PORT = process.env.PORT || 3001;

// routes
const api = require('./routes/apiRoutes');
app.use(apiRoutes);
const html = require('./routes/htmlRoutes');
app.use(htmlRoutes);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// server listener
app.listen(PORT, () => {
    console.log("Listening on PORT", PORT)
});