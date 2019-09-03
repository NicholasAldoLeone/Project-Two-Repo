require("dotenv").config();
var express = require("express");
var session = require("express-session");
var exphbs = require("express-handlebars");

var passport = require("./config/passport")

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(require("./routes"));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// require("./routes/html-routes.js")(app);
require("./routes/product-api-routes.js")(app);
require("./routes/account-api-routes")(app);
require("./routes/admin-api-routes")(app);

var routes = require("./controllers/viewsController.js");
app.use(routes);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
});

