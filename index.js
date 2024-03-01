import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./Routes/authRoutes.js";
import hotelRoutes from "./Routes/hotelRoutes.js";
import bookingRoutes from "./Routes/bookingRoutes.js";
import hotelRoomBookingRoutes from "./Routes/hotelRoomBookingRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

app.use(cors());

// Connect to MongoDB
mongoose
  .connect(
    `mongodb://reactapp:8UtIpPOyAvjQxjFq9ohHYImgeltEkaM5SRC5jth2xFLKJUcic2jVQklo3GGuM4DDTij4eW9xsXyoACDbJaOz9g==@reactapp.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@reactapp@`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: false,
    }
  )
  .then(() => {
    console.log("Connection to CosmosDB successful");
    // Start the server once the database connection is successful
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to CosmosDB:", err);
    process.exit(1); // Exit the application if unable to connect to the database
  });

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/roombookings", hotelRoomBookingRoutes);
