const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys");
//const users = require("./routes/api/users");
const graphqlHttp = require("express-graphql");
const PORT = 5000;
const rootSchema = require("./graphql/schema/index");
const rootResolvers = require("./graphql/resolvers/index");

app.disable("X-Powered-By");
app.use(function(req, res, next) {
  res.setHeader("Airlineser", "powered by Stola");
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
//app.use("/api/users", users);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With, X-powered-by, Airlineser"
  );
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(
  "/graphql",
  graphqlHttp({
    schema: rootSchema,
    resolvers: rootResolvers,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log("App listening to port " + PORT);
});
