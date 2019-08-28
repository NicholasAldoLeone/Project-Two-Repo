module.exports = function(sequelize, DataTypes) {
    var Seller = sequelize.define("Seller", {
        seller_name: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {
                len: [1, 255]
            }
        }
    })
    Seller.associate = function(models) {
        Seller.hasMany(models.Products, {
            onDelete: "cascade"
        })
    }
    return Seller;
}