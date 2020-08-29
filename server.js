// Make a package.json file by running npm init from the command line.
// Install the Express npm package: npm install express.
// Create a server.js file.
// Install the Handlebars npm package: npm install express-handlebars.
// Install MySQL npm package: npm install mysql.
// Require the following npm packages inside of the server.js file:
    // express

const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

// serves static app content from public directory
app.use(express.static("public"));

// parse app body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// sets handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// imports routes and gives server access to them
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

// start server so that it can begin listening to client reqs
app.listen(PORT, function() {
    // server side log wen our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});