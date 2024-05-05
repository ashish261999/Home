const mongoose = require("mongoose");
require("dotenv").config();

const Conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        // "mongodb+srv://ashishranjanmahi07:ashishranjan@cluster0.o8junyx.mongodb.net/"
        process.env.URI
      )
      .then(() => {
        console.log("connected");
      });
  } catch (error) {
    res.status(400).json({
      message: "Not connected",
    });
  }
};

Conn();
