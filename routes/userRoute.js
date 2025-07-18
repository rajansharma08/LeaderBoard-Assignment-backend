import express from "express";
import User from "../models/userModel.js";

const router = express.Router();

// Add a new user
router.post("/", async (req, res) => {
  try {
    const { name, points, avatarUrl } = req.body;
    const user = new User({ name, points, avatarUrl });
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to save user" });
  }
});

// Get all users (sorted by points)
router.get("/", async (req, res) => {
  try {
    const topUsers = await User.find().sort({ points: -1 });
    res.status(200).json(topUsers);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

export default router;
