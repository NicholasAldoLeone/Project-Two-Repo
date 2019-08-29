var db = require("../models");

module.exports = function(app) {
    app.post("/api/new", function(request, response){
        console.log(request.body);

        db.Product.create(request.body).then(function(data){
            response.json(data);
        })
    })
}