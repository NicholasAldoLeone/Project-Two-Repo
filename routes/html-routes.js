
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/sign-up", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/allproducts");
    }
    res.render("sign-up");
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/allproducts");
    }
    res.render("login");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/allproducts", isAuthenticated, function(req, res) {
    res.render("admin-all-products");
  });

};