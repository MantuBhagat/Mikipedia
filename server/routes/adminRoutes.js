import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/rolesMiddleware.js";
import { getAllUsers, updateUserRole } from "../controllers/adminController.js";

const router = express.Router();

// Admin routes would go here
router.get("/users", protect, authorizeRoles("admin"), getAllUsers);
router.patch(
  "/users/:id/role",
  protect,
  authorizeRoles("admin"),
  updateUserRole,
);

export default router;
