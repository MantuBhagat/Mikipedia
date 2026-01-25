import express from "express";
import {
  register,
  login,
  logout,
  refreshAccessToken,
  me,
} from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.get("/me", protect, me);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh", refreshAccessToken); // Reusing login controller for token refresh

export default router;
