const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    isRequired: true
  },
  email: {
    type: String,
    isRequired: true
  },
  password: {
    type: String,
    isRequired: true
  },
  passportID: {
    type: String,
    isRequired: false
  }
});

module.exports = User = mongoose.model("user", UserSchema);
