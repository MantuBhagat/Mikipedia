import User from "../models/User.js";

export const getFeed = async (req, res) => {
  const { page = 1, limit = 10, search, role, category, sort } = req.query;

  const query = {};

  if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } },
      { bio: { $regex: search, $options: "i" } },
    ];
  }

  if (role) query.role = role;
  if (category) query.category = category;

  let sortQuery = { createdAt: -1 };
  if (sort === "popular") sortQuery = { views: -1 };

  const users = await User.find(query)
    .select("name avatar role category bio")
    .sort(sortQuery)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await User.countDocuments(query);

  res.json({
    success: true,
    data: users,
    total,
    page,
  });
};
