module.exports = (sequelize, Sequelize) => {
    return sequelize.define("activity", {
        code: {
            type: Sequelize.STRING
        },
        budget: {
            type: Sequelize.INTEGER
        },
        active: {
            type: Sequelize.BOOLEAN
        }
    });
};
