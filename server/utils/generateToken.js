import jwt from "jsonwebtoken";

const generateAccessToken = (user) => {
  return jwt.sign({ Id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "15m",
  });
};

export { generateAccessToken };
const generateRefreshToken = (user) => {
  return jwt.sign({ Id: user._id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN || "7d",
  });
};

export { generateRefreshToken };
