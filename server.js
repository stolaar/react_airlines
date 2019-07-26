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

app.disable("x-powered-by");
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
