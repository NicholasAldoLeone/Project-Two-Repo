module.exports = function(sequelize, DataTypes) {
    var Account = sequelize.define("Account", {
        account_name: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {
                len: [1, 255]
            }
        }
    })
    
    return Account;
}