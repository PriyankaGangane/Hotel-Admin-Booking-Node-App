import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  pickupLocation: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  bookingTime: {
    type: Date,
    default: Date.now,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
