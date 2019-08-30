const router = require("express").Router();
const upload = require('../services/file-upload');

const singleUpload = upload.single('file');
var db = require("../models");

module.exports = function (app) {
    app.get("/api/products", function (request, response) {
        db.Product.findAll({}).then(function (data) {
            response.json(data)

        })
    })

    app.get("/api/products/:product", function (request, response) {
        db.Product.findAll({
            where: {
                product_name: request.params.product

            }
        }).then(function (data) {
            response.json(data);
        })
    })

    app.get("/api/categories/:category", function (request, response) {

    })

    app.get("/api/price/:maxprice", function (request, response) {

    })

    app.post("/product", function (req, res) {
        singleUpload(req, res, function (err) {
            if(err){
                console.log(err);
                res.status(500).end();
            }else {
                console.log(req.file);
                db.Product.create({
                    product_name: req.body.name,
                    product_department: req.body.department,
                    product_cost: req.body.cost,
                    product_description: req.body.description,
                    product_image: req.file.location
                }).then(function(data){
                    res.json(data);
                })
            }
        });
    });
}

