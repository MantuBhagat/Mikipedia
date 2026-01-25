import User from "../models/User.js";

// GET ALL USERS
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
      .select("name email role isAccountVerified createdAt")
      .sort({ createdAt: -1 });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ success: false, message: "Users not found", error });
  }
};

// UPDDATE USER DETAILS
export const updateUserRole = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { role },
      { new: true },
    ).select("name email role isAccountVerified createdAt");
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, message: "User role updated", user });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Could not update user role", error });
  }
};
