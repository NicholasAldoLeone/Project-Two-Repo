module.exports = function(sequelize, DataTypes) {
    var Account = sequelize.define("Account", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {
                len: [1, 255]
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {
                len: [1, 255]
            }
        }
    })
    return Account;
}