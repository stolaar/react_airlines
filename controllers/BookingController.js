//const Ticket = require("../models/Ticket");
//const User = require("../models/User");
const BaseController = require("./BaseController");

class BookingController extends BaseController {
  constructor(req, res) {
    super(req, res);
  }

  async bookFlight() {
    console.log("Flight booked");
  }
  async cancelFlight() {
    console.log("Flight cancelled");
  }
}

module.exports = BookingController;
