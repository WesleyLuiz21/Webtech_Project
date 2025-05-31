const express = require('express');
const app = express();
const path = require(path);

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// EJS config
app.set('view engine', 'ejs');
app.set('view', path.join(__dirname, 'views'));

// Routes Setup
const routes = require("./routes/index");
app.use('/', routes);

//Server Setup
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
