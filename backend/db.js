import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function connectDB() {
  const connect = await mongoose.connect(process.env.MONGO_URI);
  console.log("Database connected successfully ✅");
}

export default connectDB;
