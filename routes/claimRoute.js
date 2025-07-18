// routes/claim.js or in your main router file
import express from "express";
const router = express.Router();
import User from "../models/userModel.js";

router.post("/", async (req, res) => {
  try {
    const { userId } = req.body;

    // Generate random number between 1 and 10
    const points = Math.floor(Math.random() * 10) + 1;

    // Update user in database
    const user = await User.findByIdAndUpdate(
      userId,
      { $inc: { points: points } }, // increment points
      { new: true }
    );

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "Points claimed!", user, claimedPoints: points });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
