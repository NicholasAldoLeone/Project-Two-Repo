module.exports = function(sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {
                len: [1, 255]
            }
        },

        product_department: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {
                len: [1, 255]
            }
        },

        product_description: {
            type: DataTypes.TEXT,
            allowNull: false,

            validate: {
                len:[1, 1000]
            }
        },

        product_cost: {
            type: DataTypes.INTEGER,
            allowNull: true

        },

        total_stock: {
            type: DataTypes.INTEGER,
            
        }
    })
    return Product;
}