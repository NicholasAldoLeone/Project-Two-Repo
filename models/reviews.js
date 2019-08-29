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

        review_id: {
            type: DataTypes.INTEGER,
            allowNull: false

        }
    })
    return Review
}
