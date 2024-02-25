// // User.js
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });

// module.exports = mongoose.model('User', userSchema);
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  mobileNo: {
    type: Number,
    validate: {
      validator: function (v) {
        return /^[0-9]{10}$/.test(v.toString());
      },
      message: (props) => `${props.value} is not a valid 10-digit number!`,
    },
  },
});

const User = mongoose.model("User", userSchema);

export default User;
