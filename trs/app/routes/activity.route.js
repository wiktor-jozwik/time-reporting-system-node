module.exports = app => {
    const activities = require("../controllers/activity.controller.js");

    const router = require("express").Router();

    // Create a new Tutorial
    router.post("/", activities.create);

    // Retrieve all activities
    router.get("/", activities.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", activities.findOne);

    // Update a Tutorial with id
    router.put("/:id", activities.update);

    // Delete a Tutorial with id
    router.delete("/:id", activities.delete);

    app.use('/api/activities', router);
};