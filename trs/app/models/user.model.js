module.exports = (sequelize, DataTypes) => {
    return sequelize.define("user", {
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        },
        logged: {
            type: DataTypes.BOOLEAN
        }
    });
};
