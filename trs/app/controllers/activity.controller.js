const db = require("../models");
const Activity = db.activities;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.code) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const activity = {
        code: req.body.code,
        budget: req.body.budget,
        active: req.body.active ? req.body.active : false
    };

    Activity.create(activity)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Activity."
            });
        });
};

exports.findAll = (req, res) => {
    Activity.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Activity."
            });
        })
};

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};

exports.findAllActive = (req, res) => {

};