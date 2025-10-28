import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
const PORT = 6050;
import connectDB from "./db.js";

import StudyCenterUserInfo from "./studyCenterUserInfoSchema.js";

connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("BackEnd seems to work");
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if both fields are provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Find the user in MongoDB
    const user = await StudyCenterUserInfo.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare plain text password (since bcrypt not added yet)
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Login successful
    res.status(200).json({
      message: "Login successful ✅",
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// POST route to create a user
app.post("/createuser", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Simple validation
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    // Create and save new user
    const newUser = await StudyCenterUserInfo.create({ email, password });

    res.status(201).json({
      message: "User created successfully ✅",
      user: newUser,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`The server is running in port ${PORT}`);
});
