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
            allowNull: true,

            validate: {
                len: [0, 255]
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

        product_image: {
            type: DataTypes.STRING,
            allowNull: true

        },

        total_stock: {
            type: DataTypes.INTEGER,
            
        },
    })
    Product.associate = function(models) {
        Product.hasMany(models.Review, {
          onDelete: "cascade"
        });
      };
    return Product;
}