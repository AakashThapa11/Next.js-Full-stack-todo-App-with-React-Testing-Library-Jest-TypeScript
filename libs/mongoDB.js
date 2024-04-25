import mongoose from "mongoose";

const connection = {};

const connectDB = async () => {
  if (connection.isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = db.connections[0].readyState; // Update connection status
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
