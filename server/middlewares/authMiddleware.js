import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  try {
    const token = req.cookies.accessToken;

    if (!token) {
      return res.status(401).json({ message: "No access token" });
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decoded.id).populate("role");
    if (!user) return res.status(401);

    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ message: "Access token expired" });
  }
};
