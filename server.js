const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const PORT = 5000;

app.disable("X-Powered-By");
app.use(function(req, res, next) {
  res.setHeader("X-Powered-By", "Stola");
  next();
});
const passport = require("passport");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(keys.MongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.log(err));
app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/users", require("./routes/api/users"));
app.listen(PORT, () => {
  console.log("App listening to port " + PORT);
});
