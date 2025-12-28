import express from "express";
import { verifyToken } from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/rolesMiddleware.js";
import { profile } from "../controllers/authController.js";
const router = express.Router();

// Only ADMIN can access this router
router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) => {
  res.json({ message: "Welcome ADMIN" });
});

// Only ADMIN and MANAGER can access this router
router.get(
  "/manager",
  verifyToken,
  authorizeRoles("manager", "admin"),
  (req, res) => {
    res.json({ message: "Welcome ADMIN and MANAGER" });
  }
);

router.get("/profile", verifyToken, profile);

export default router;
