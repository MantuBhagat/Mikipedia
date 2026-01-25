import {
  createPost,
  getUserPosts,
  editPost,
  deletePost,
  getAllPosts,
} from "../controllers/postsController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/rolesMiddleware.js";
import express from "express";

const router = express.Router();

router.get(
  "/",
  protect,
  authorizeRoles("user", "admin", "manager"),
  getAllPosts,
);

router.post(
  "/",
  protect,
  authorizeRoles("user", "admin", "manager"),
  createPost,
);
router.put(
  "/:id",
  protect,
  authorizeRoles("user", "admin", "manager"),
  editPost,
);
router.delete(
  "/:id",
  protect,
  authorizeRoles("user", "admin", "manager"),
  deletePost,
);
export default router;
