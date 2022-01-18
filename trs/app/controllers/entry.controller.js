const db = require("../models");
const getLoggedUserId = require("../services/user.service");
const Entry = db.entries;

exports.create = async (req, res) => {
    const userId = await getLoggedUserId()
    const entry = {
        date: req.body.date,
        subCode: req.body.subCode,
        time: req.body.time,
        description: req.body.description,
        activityId: req.body.activityId,
        userId: userId
    };

    Entry.create(entry)
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
    return Entry.findAll()
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
    const id = req.params.id;

    Entry.findByPk(id, {include: ['activity']})
        .then((entry) => {
            res.send(entry);
        })
};

exports.update = (req, res) => {
    const id = req.params.id;

    Entry.update(req.body, {where: {id}})
        .then(result => {
            if (result.includes(1)) {
                res.send({
                    message: "Activity was updated successfully."
                });
            } else {
                console.log(result)
                res.send({
                    message: `Cannot update Activity with id=${id}. Maybe Activity was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating Activity with id=${id}, err: ${err}`
            });
        });

};

exports.delete = (req, res) => {
    const id = req.params.id;

    Entry.destroy({where: {id}})
        .then(result => {
            if (result === 1) {
                res.send({
                    message: "Activity was deleted successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete Activity with id=${id}. Maybe Activity was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error deleting Activity with id=${id}, err: ${err}`
            });
        });
};