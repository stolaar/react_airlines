const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const users = require("./routes/api/users");
const PORT = 5000;

app.use(function(req, res, next) {
  res.setHeader("Airlines powered by stola");
  next();
});

app.use(cors);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(keys.MongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.log(err));

app.use("/api/users", users);

app.listen(PORT, () => {
  console.log("App listening to port " + PORT);
});
