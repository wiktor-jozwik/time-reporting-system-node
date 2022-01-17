module.exports = (sequelize, DataTypes) => {
    return sequelize.define("entry", {
        date: {
            type: DataTypes.DATE
        },
        subCode: {
            type: DataTypes.STRING
        },
        time: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING
        }
    });
};
