const upload = require('../services/file-upload');

var express = require("express");
var router = express.Router();



const singleUpload = upload.single('file');
var db = require("../models");

module.exports = function (app) {
    app.get("/api/products", function (req, res) {
        db.Product.findAll({}).then(function (data) {
            res.json(data)

        })
    })

    app.get("/api/products/:id", function (req, resp) {
        db.Product.findAll({
            where: {
                id: req.params.id

            }
        }).then(function (data) {
            res.json(data);
        })
    })

    app.get("/api/categories/:category", function (req, res) {

    })

    app.get("/api/price/:maxprice", function (req, res) {

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

    app.put("/api/update", function(req, res){
        console.log(req.body);
        db.Product.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function(data){
            res.json(data);
        })
    })
}

