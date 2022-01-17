const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const path = __dirname + '/app/views/';
const app = express();

app.use(express.static(path));

const corsOptions = {
  origin: "http://localhost:8081"
};

const db = require("./app/models");
db.sequelize.sync();

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res) => {
  res.sendFile(path + "index.html");
});
require("./app/routes/activity.route")(app);
require("./app/routes/entry.route")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
