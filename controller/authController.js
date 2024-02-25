// authController.js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// const User = require('../models/User');

import User from "../Model/User.js";

// export const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if the user already exists
//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // Create a new user
//     user = new User({ email, password });

//     // Hash the password
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(password, salt);

//     // Save the user to the database
//     await user.save();

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server Error");
//   }
// };

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    res.status(200).json({ message: "User logged in successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

export const registerUser = async (req, res) => {
  try {
    const { email, password, firstName, lastName, mobileNo } = req.body;

    // Check if the user already exists
    const user = await User.findOne({
      email,
      password,
      firstName,
      lastName,
      mobileNo,
    });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    const newUser = new User({
      email,
      password,
      firstName,
      lastName,
      mobileNo,
    });

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

// export const registerUser = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Check if the user exists
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ message: 'Invalid credentials' });
//         }

//         // Check if the password is correct
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: 'Invalid credentials' });
//         }

//         // Create and return a JSON Web Token (JWT)
//         const payload = {
//             user: {
//                 id: user.id
//             }
//         };

//         jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
//             if (err) throw err;
//             res.json({ token });
//         });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send('Server Error');
//     }
// };
