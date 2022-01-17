module.exports = app => {
    const activities = require("../controllers/activity.controller.js");

    const router = require("express").Router();

    router.post("/", activities.create);

    router.get("/", activities.findAll);

    router.get("/:id", activities.findOne);

    router.put("/:id", activities.update);

    router.delete("/:id", activities.delete);

    app.use('/api/activities', router);
};