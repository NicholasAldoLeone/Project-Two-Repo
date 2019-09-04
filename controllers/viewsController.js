var express = require("express");
var router = express.Router();
var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", function (req, res) {
    res.render("sign-up")
})

router.get("/admin", function (req, res) {
    db.Product.findAll({}).then(function (data) {
        res.render("admin-all-products", {products:data});
    })
})

router.get("/homepage", function(req, res){
  res.render("index")
})

router.get("/allproducts", function(req, res){
    db.Product.findAll({}).then(function(data){
        res.render("user-all-products", {products:data});
    })
})

router.get("/api/categories/:category", function (req, res) {
    db.Product.findAll({
        where: {
            product_department: req.params.category
        }
    }).then(function(data){
        res.render("user-all-products", {products: data});
    })
})

router.get("/api/names/:name", function(req, res){
  db.Product.findAll({
    where: {
      product_name: req.params.name
    }
  }).then(function(data){
    res.render("user-all-products", {products: data});
  })
})

router.get("/sign-up", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/allproducts");
    }
    res.render("sign-up");
  });

  router.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/allproducts");
    }
    res.render("login");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  router.get("/allproducts", isAuthenticated, function(req, res) {
    res.render("admin-all-products");
  });


module.exports = router;