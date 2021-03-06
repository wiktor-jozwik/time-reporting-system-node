module.exports = app => {
    const activities = require("../controllers/activity.controller.js");

    const router = require("express").Router();

    router.post("/", activities.create);

    router.get("/", activities.findAll);

    app.use('/api/activities', router);
};