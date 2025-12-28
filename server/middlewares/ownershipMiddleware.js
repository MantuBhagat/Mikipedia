import Content from "../models/Content.js";

const checkOwnership = async (req, res, next) => {
  const content = await Content.findById(req.params.id);

  if (!content) {
    return res.status(404).json({ message: "Content not found" });
  }

  if (content.author.toString() !== req.user.id && req.user.role !== "admin") {
    return res.status(403).json({ message: "Not owner of resource" });
  }

  req.content = content;
  next();
};

export default checkOwnership;
