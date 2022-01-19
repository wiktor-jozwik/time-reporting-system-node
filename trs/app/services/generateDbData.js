const db = require("../models");
const User = db.users;
const Activity = db.activities;

const users = [
    {
        firstName: "Jan",
        lastName: "Kowalski",
        logged: true
    },
    {
        firstName: "Elon",
        lastName: "Musk",
        logged: false
    },
    {
        firstName: "John",
        lastName: "Smith",
        logged: false
    },
    {
        firstName: "Nikola",
        lastName: "Tesla",
        logged: false
    },
    {
        firstName: "Michael",
        lastName: "Schumacher",
        logged: false
    },
]

const activities = [
    {
        code: "NTR",
        budget: 5000,
        active: true
    },
    {
        code: "PIS",
        budget: 2500,
        active: true
    },
    {
        code: "PSI",
        budget: 7000,
        active: false
    },
    {
        code: "PZSP2",
        budget: 8500,
        active: true
    },
]


module.exports = generateDbData = () => {
    User.count()
        .then(count => {
            if (count === 0){
                users.forEach(user => {
                    User.create(user)
                        .then(data => console.log(`Added user: ${data.firstName} ${data.lastName}`))
                })
            }
    })

    Activity.count()
        .then(count => {
            if (count === 0){
                activities.forEach(activity => {
                    Activity.create(activity)
                        .then(data => console.log(`Added activity: ${data.code}`))
                })
            }
    })
}
