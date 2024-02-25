// models/HotelRoomBooking.js

import mongoose from "mongoose";

const hotelRoomBookingSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  roomCount: { type: Number, required: true },
  availableRoomCount: { type: Number, required: true },
});

const HotelRoomBooking = mongoose.model(
  "HotelRoomBooking",
  hotelRoomBookingSchema
);

export default HotelRoomBooking;
