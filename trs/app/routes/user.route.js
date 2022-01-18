module.exports = app => {
    const users = require("../controllers/user.controller.js");

    const router = require("express").Router();

    router.post("/", users.create);

    router.get("/", users.findAll);

    router.post("/login/:id", users.logUser);

    router.get("/logged", users.getLoggedUser);

    app.use('/api/users', router);
}