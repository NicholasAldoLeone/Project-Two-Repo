var express = require("express");
var session = require("express-session");
var exphbs = require("express-handlebars");

var passport = require("./config/passport")

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));    
app.use(express.json());


app.use(express.static("public"));
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

<<<<<<< HEAD

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT http://localhost:" + PORT);
    });
=======
var routes = require("./controllers/viewsController.js");
app.use(routes);

db.sequelize.sync().then(function() {
<<<<<<< HEAD
    app.listen(PORT, function() {
        console.log("App listening on PORT http://localhost:" + PORT);
    });
});
=======
  app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
>>>>>>> 3c5526175efca9937522a5b0fc9d08327a16e968
});





>>>>>>> 7be3504668cc0396d4bd7f0eef3ea1ab0cb1904a
