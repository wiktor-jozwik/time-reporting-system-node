const db = require("../models");
const User = db.users;

exports.create = (req, res) => {
    console.log(req.body)
    const userData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        logged: false
    }

    User.create(userData)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message
            });
        });}

exports.getLoggedUser = (req, res) => {
    User.findOne({where: {logged: true}, include: ['entries']})
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message
            });
        });
};

exports.logUser = (req, res) => {
    const id = req.params.id

    User.update({logged: false}, {where: {logged: true}})
        .catch(err => {
            res.status(500).send({
                message: `Error logging user with ${id} , err: ${err}`
            });
        });

    User.update({logged: true}, {where: {id}})
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send({
                message: `Error logging user with ${id} , err: ${err}`
            });
        });
}

exports.findAll = (req, res) => {
    return User.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message
            });
        })
}