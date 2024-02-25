// models/Hotel.js
import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  // other fields as needed
});

const Hotel = mongoose.model("Hotel", hotelSchema);

export default Hotel;
