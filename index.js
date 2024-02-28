// // var mongoose = require('mongoose');
// // var dotenv=require("dotenv")
// // var env = require('dotenv').config();   //Use the .env file to load the variables
// // const authRoutes=require("./Routes/authRoutes")

// // const express = require('express');
// // index.js
// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// // index.js

// import authRoutes from './Routes/authRoutes.js';
// // Other code remains the same

// // Load environment variables from .env file
// dotenv.config();

// // Initialize Express app
// const app = express();

// // Middleware to parse JSON bodies
// app.use(express.json());
// mongoose.connect("mongodb://"+process.env.COSMOSDB_HOST+":"+process.env.COSMOSDB_PORT+"/"+process.env.COSMOSDB_DBNAME+"?ssl=true&replicaSet=globaldb", {
//    auth: {
//      username: process.env.COSMOSDB_USER,
//      password: process.env.COSMOSDB_PASSWORD
//    },
//  useNewUrlParser: true,
//  useUnifiedTopology: true,
//  retryWrites: false
//  })
//  .then(() => console.log('Connection to CosmosDB successful'))
//  .catch((err) => console.error(err));
// //  const Family = mongoose.model('Family', new mongoose.Schema({
// //     lastName: String,
// //     parents: [{
// //         familyName: String,
// //         firstName: String,
// //         gender: String
// //     }],
// //     children: [{
// //         familyName: String,
// //         firstName: String,
// //         gender: String,
// //         grade: Number
// //     }],
// //     pets:[{
// //         givenName: String
// //     }],
// //     address: {
// //         country: String,
// //         state: String,
// //         city: String
// //     }
// // }));
// // const Login=mongoose.model('Login',new mongoose.Schema({
// //     firstName:String,
// //     password:Number
// // }))
// // const family = new Family({
// //     lastName: "Volum",
// //     parents: [
// //         { firstName: "Thomas" },
// //         { firstName: "Mary Kay" }
// //     ],
// //     children: [
// //         { firstName: "Ryan", gender: "male", grade: 8 },
// //         { firstName: "Patrick", gender: "male", grade: 7 }
// //     ],
// //     pets: [
// //         { givenName: "Buddy" }
// //     ],
// //     address: { country: "USA", state: "WA", city: "Seattle" }
// // });
// // family.save((err, saveFamily) => {
// //     console.log(JSON.stringify(saveFamily));
// // });
// // const VacationDestinations = mongoose.model('VacationDestinations', new mongoose.Schema({
// //     name: String,
// //     country: String
// //    }));
// //    const vacaySpot = new VacationDestinations({
// //     name: "Honolulu",
// //     country: "USA"
// //    });

// //    vacaySpot.save((err, saveVacay) => {
// //     console.log(JSON.stringify(saveVacay));
// //    });

// // const family = new Family({
// //     lastName: "Volum",
// //     parents: [
// //         { firstName: "Thomas" },
// //         { firstName: "Mary Kay" }
// //     ],
// //     children: [
// //         { firstName: "Ryan", gender: "male", grade: 8 },
// //         { firstName: "Patrick", gender: "male", grade: 7 }
// //     ],
// //     pets: [
// //         { givenName: "Buddy" }
// //     ],
// //     address: { country: "USA", state: "WA", city: "Seattle" }
// // });
// // const login=new Login({

// // firstName:"Priyanka",
// // password:12345

// // })
// // family.save()
// //     .then(saveFamily => {
// //         console.log(JSON.stringify(saveFamily));
// //     })
// //     .catch(err => console.error(err));

// //     login.save().then(saveLogin=>{
// //         console.log(JSON.stringify(saveLogin
// //             ));
// //     }
// //         )
// // const vacaySpot = new VacationDestinations({
// //     name: "Honolulu",
// //     country: "USA"
// // });

// // vacaySpot.save()
// //     .then(saveVacay => {
// //         console.log(JSON.stringify(saveVacay));
// //     })
// //     .catch(err => console.error(err))
// // Use routes
// app.use('/api/auth', authRoutes);

// // Start server

// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import authRoutes from './Routes/authRoutes.js';

// dotenv.config();

// const app = express();

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(`mongodb://${process.env.COSMOSDB_HOST}:${process.env.COSMOSDB_PORT}/${process.env.COSMOSDB_DBNAME}?ssl=true&replicaSet=globaldb`, {
//   auth: {
//     username: process.env.COSMOSDB_USER,
//     password: process.env.COSMOSDB_PASSWORD
//   },
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   retryWrites: false
// })
// .then(() => {
//   console.log('Connection to CosmosDB successful');
//   // Start the server once the database connection is successful
//   app.listen(PORT, () => {
//     console.log(`Server started on port ${PORT}`);
//   });
// })
// .catch((err) => {
//   console.error('Error connecting to CosmosDB:', err);
//   process.exit(1); // Exit the application if unable to connect to the database
// });

// // Use routes
// app.use('/api/auth', authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server started on port ${PORT}`);
// });

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

// Connect to MongoDB
mongoose
  .connect(
    `mongodb://reactapp:8UtIpPOyAvjQxjFq9ohHYImgeltEkaM5SRC5jth2xFLKJUcic2jVQklo3GGuM4DDTij4eW9xsXyoACDbJaOz9g==@reactapp.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@reactapp@`
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
