import Profile from "../models/Profile.js";

export const createOrUpdateProfile = async (req, res) => {
  try {
    const { username, bio, avatar, website, linkedin, twitter, keywords } =
      req.body;

    if (!username) {
      return res.status(400).json({ message: "Username required" });
    }

    const cleanUsername = username.toLowerCase();

    // username collision check
    const taken = await Profile.findOne({
      username: cleanUsername,
      userId: { $ne: req.user.id },
    });

    if (taken) {
      return res.status(409).json({ message: "Username already taken" });
    }

    const profile = await Profile.findOneAndUpdate(
      { userId: req.user.id },
      {
        username: cleanUsername,
        bio,
        avatar,
        keywords,
        socialLinks: { website, linkedin, twitter },
        isCompleted: true,
      },
      { upsert: true, new: true },
    );

    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getMyProfile = async (req, res) => {
  const profile = await Profile.findOne({ userId: req.user.id });

  if (!profile) {
    return res.status(400).json({ message: "Profile not found" });
  }

  res.status(200).json(profile || null);
};
