import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/rolesMiddleware.js";
import {
  getProfile,
  deleteAccount,
  editProfile,
  // createPost,
  // getUserPosts,
  // editPost,
  // deletePost,
} from "../controllers/userController.js";
import Profile from "../models/Profile.js";

const router = express.Router();

// GET PROFILE ENDPOINT
router.get(
  "/profile",
  protect,
  authorizeRoles("user", "admin", "manager"),
  getProfile,
);

// GET PROFILE BY USERNAME
router.get("/:username", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      username: req.params.username,
    }).populate("userId");

    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// EDIT PROFILE ENDPOINT
router.put(
  "/profile",
  protect,
  authorizeRoles("user", "admin", "manager"),
  editProfile,
);
// DELETE ACCOUNT ENDPOINT
router.delete(
  "/delete",
  protect,
  authorizeRoles("user", "admin", "manager"),
  deleteAccount,
);

// // CREATE POST ENDPOINT
// router.post(
//   "/post",
//   protect,
//   authorizeRoles("user", "admin", "manager"),
//   createPost,
// );

// // GET USER POSTS ENDPOINT
// router.get(
//   "/posts",
//   protect,
//   authorizeRoles("user", "admin", "manager"),
//   getUserPosts,
// );

// // EDIT POST ENDPOINT
// router.put(
//   "/post/:id",
//   protect,
//   authorizeRoles("user", "admin", "manager"),
//   editPost,
// );
// // DELETE POST ENDPOINT
// router.delete(
//   "/post/:id",
//   protect,
//   authorizeRoles("user", "admin", "manager"),
//   deletePost,
// );

export default router;
