//const Ticket = require("../models/Ticket");
//const User = require("../models/User");
const BaseController = require("./BaseController");

class BookingController extends BaseController {
  constructor(req, res) {
    super(req, res);
  }

  async bookFlight() {
    return this.ok("Flight booked");
  }
  async cancelFlight() {
    return this.ok("Flight cancelled");
  }
}

module.exports = BookingController;
