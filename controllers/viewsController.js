var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function (req, res) {
    res.render("index")
})

router.get("/admin", function (req, res) {
    db.Product.findAll({}).then(function (data) {
        res.render("admin-all-products", {products:data});
    })
})

router.get("/allproducts", function(req, res){
    db.Product.findAll({}).then(function(data){
        res.render("user-all-products", {products:data});
    })
})

router.get("/api/categories/:category", function (req, res) {
    console.log(req.body);
    db.Product.findAll({
        where: {
            product_department: req.params.category
        }
    }).then(function(data){
        res.render("user-all-products", {products: data});
    })
})

module.exports = router;