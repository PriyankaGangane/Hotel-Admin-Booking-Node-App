import HotelRoomBooking from "../Model/HotelRoomBooking.js";

export const createBooking = async (req, res) => {
  try {
    const {
      customerName,
      checkInDate,
      checkOutDate,
      roomCount,
      availableRoomCount,
    } = req.body;
    const booking = await HotelRoomBooking.create({
      customerName,
      checkInDate,
      checkOutDate,
      roomCount,
      availableRoomCount,
    });
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await HotelRoomBooking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBooking = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await HotelRoomBooking.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBooking = async (req, res) => {
  const { id } = req.params;
  try {
    await HotelRoomBooking.findByIdAndDelete(id);
    res.status(200).json({ message: "Hotel Room deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
