import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
  createOrUpdateProfile,
  getMyProfile,
} from "../controllers/profileController.js";
import Profile from "../models/Profile.js";

const router = express.Router();

/* ---------------- PROTECTED ---------------- */

// Create / Update
router.post("/", protect, createOrUpdateProfile);

router.get("/me", protect, getMyProfile);

// Analytics (dashboard)
router.get("/me/analytics", protect, async (req, res) => {
  const profile = await Profile.findOne({ userId: req.user.id });
  res.json({ views: profile?.views || 0 });
});

/* ---------------- PUBLIC ---------------- */

// Public profile by username
router.get("/:username", async (req, res) => {
  const profile = await Profile.findOne({
    username: req.params.username,
  }).populate("userId", "name role");

  if (!profile) {
    return res.status(404).json({ message: "Profile not found" });
  }

  // TODO: Increment views using middleware
  // await Profile.updateOne({ _id: profile._id }, { $inc: { views: 1 } });

  res.json(profile);
});

export default router;
