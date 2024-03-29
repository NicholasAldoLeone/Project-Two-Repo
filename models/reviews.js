module.exports = function(sequelize, DataTypes) {
    var Review = sequelize.define("Review", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {
                len: [1, 255]

            }
        },

        body: {
            type: DataTypes.TEXT,
            allowNull: false,

            validate: {
                len: [1, 1000]

            }
        },
    })

    Review.associates = function(models) {
        Review.belongsTo(models.Product, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    return Review
}
