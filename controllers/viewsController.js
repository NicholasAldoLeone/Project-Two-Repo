var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function (request, response) {
    response.render("index")
})

router.get("/html/products", function (request, response) {
    db.Product.findAll({}).then(function (data) {
        var hbsObject = {
            name: data.product_name,
            department: data.product_department,
            description: data.product_description,
            cost: data.product_cost,
            stock: data.total_stock

        };

        console.log(hbsObject);
        response.render("all", hbsObject);
    })
})

module.exports = router;