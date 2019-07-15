const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const PORT = 5000;

app.use(cors);
app.use(bodyParser.json());

mongoose.connect(keys.MongoURI, { useNewUrlParser: true }, err => {
  console.log(err);
});
const connection = mongoose.connection;

connection.once("open", () => console.log("MongoDB connected"));

app.listen(PORT, () => {
  console.log("App listening to port " + PORT);
});
