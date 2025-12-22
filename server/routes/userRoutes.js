import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

// Create a new user
router.post("/users", registerUser);

// User login
router.post("/users/login", loginUser);

export default router;
