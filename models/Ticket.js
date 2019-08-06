const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
  user_id: {
    type: String,
    ref: "User"
  },
  from: {
    type: String,
    isRequired: true
  },
  to: {
    type: String,
    isRequired: true
  },
  price: {
    type: Number,
    isRequired: true
  }
});

module.exports = Ticket = mongoose.model("ticket", TicketSchema);
