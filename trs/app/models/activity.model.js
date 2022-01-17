module.exports = (sequelize, DataTypes) => {
    return sequelize.define("activity", {
        code: {
            type: DataTypes.STRING
        },
        budget: {
            type: DataTypes.INTEGER
        },
        active: {
            type: DataTypes.BOOLEAN
        }
    });
};
