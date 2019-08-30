var db = require("../models");

module.exports = function(app) {
    app.get("/api/products", function(request, response){
        db.Product.findAll({}).then(function(data){
            response.json(data);
        })
    })

    app.get("/api/products/:product", function(request, response){
        db.Product.findAll({
            where: {
                product_name: request.params.product

            }
        }).then(function(data){
            response.json(data);
        })
    })

    app.get("/api/categories/:category", function(request, response){

    })

    app.get("/api/price/:maxprice", function(request, response){
        
    })
}

