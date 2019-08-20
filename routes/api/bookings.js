const express = require("express");
const router = express.Router();

const BookingController = require("../../controllers/BookingController");

// @route POST /api/bookings/login
// @desc Books a flight
// @access Private
router.post("/book-flight", (req, res) =>
  new BookingController(req, res).checkAuth(
    new BookingController(req, res).bookFlight()
  )
);

// @route POST /api/bookings/register
// @desc Registers user
// @access Private
router.post("/cancel-flight", (req, res) =>
  new BookingController(req, res).checkAuth(
    new BookingController(req, res).cancelFlight()
  )
);

module.exports = router;
