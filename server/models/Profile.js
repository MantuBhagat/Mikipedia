import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
      trim: true,
    },

    bio: String,

    keywords: {
      type: [String], // FIXED
      default: [],
    },

    avatar: String,

    metaDescription: String,

    socialLinks: {
      website: String,
      linkedin: String, // FIXED
      twitter: String,
    },

    isCompleted: {
      type: Boolean,
      default: false,
    },

    views: {
      type: Number,
      default: 0,
    },

    // 🔒 FUTURE FEATURES
    // verified: Boolean,              // TODO: Paid / admin verified badge
    // location: String,               // TODO
    // category: String,               // TODO: creator / business / freelancer
  },
  { timestamps: true },
);

export default mongoose.model("Profile", profileSchema);
