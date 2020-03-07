const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = 5000;
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");

app.disable("X-Powered-By");
app.use(function(req, res, next) {
  res.setHeader("X-Powered-By", "Stola");
  next();
});
const passport = require("passport");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    reconnectTries: Number.MAX_SAFE_INTEGER
  })
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.log(err));
app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/users", require("./routes/api/users"));
app.use("/api/bookings", require("./routes/api/bookings"));

app.use(express.static(path.join(__dirname, "client/build/")));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "client/build/index.html"), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log("App listening to port " + PORT);
});
