module.exports = app => {
    const entries = require("../controllers/entry.controller.js");

    const router = require("express").Router();

    router.post("/", entries.create);

    router.get("/", entries.findAll);

    router.get("/:id", entries.findOne);

    router.put("/:id", entries.update);

    router.delete("/:id", entries.delete);

    app.use('/api/entries', router);
};