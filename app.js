const express = require('express');
const app = express();
const path = require(path);

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// EJS config
app.set('view engine', 'ejs');
app.set('view', path.join(__dirname, 'views'));
