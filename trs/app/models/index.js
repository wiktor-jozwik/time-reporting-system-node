const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.activities = require("./activity.model.js")(sequelize, Sequelize);
db.entries = require("./entry.model")(sequelize, Sequelize)
db.users = require("./user.model")(sequelize, Sequelize)

db.activities.hasMany(db.entries, {as: 'entries'})
db.entries.belongsTo(db.activities, {
    foreignKey: 'activityId',
    as: 'activity',
});

db.users.hasMany(db.entries, {as: 'entries'})
db.entries.belongsTo(db.users, {
    foreignKey: 'userId',
    as: 'user'
})

module.exports = db;
