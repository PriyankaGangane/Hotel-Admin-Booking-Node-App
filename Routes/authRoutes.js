// // authRoutes.js
// // authRoutes.js
// import express from 'express';
// import { authController } from '../controllers/authController.js'; // Use import
// const router = express.Router();
// // Register route
// router.post('/register', authController.register);

// // Login route
// router.post('/login', authController.login);
// // export const authRoutes = express.Router(); // Export named constant

// export default router;

// src/routes/authRoutes.js

import express from "express";
import { loginUser, registerUser } from "../controller/authController.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);

export default router;
