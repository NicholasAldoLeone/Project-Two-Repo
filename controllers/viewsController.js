var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function (request, response) {
    response.render("admin-all-products")
})

router.get("/html/products", function (request, response) {
    db.Product.findAll({}).then(function (data) {
        response.render("admin-all-products", {products:data});
    })
})

module.exports = router;