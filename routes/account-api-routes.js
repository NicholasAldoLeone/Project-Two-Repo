var db = require("../models");

module.exports = function (app) {
    app.get("/api/accounts", function (request, response) {
        db.Account.findAll({}).then(function (data) {
            response.json(data);
        })
    })
}