import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4001;
const mongoURI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
async function connectToMongoDB() {
  try {
    await mongoose.connect(mongoURI);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
}
connectToMongoDB();

// Routes
app.use("/book", bookRoute);   // e.g., GET /book
app.use("/user", userRoute);   // ✅ e.g., POST /user/signup

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is listening on port ${PORT}`);
});