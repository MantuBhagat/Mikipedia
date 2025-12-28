import permissions from "../config/permission.js";

const checkPermission = (action) => {
  return (req, res, next) => {
    const role = req.user.role;

    if (
      permissions[role]?.includes(action) ||
      permissions[role]?.includes("*")
    ) {
      return next();
    }

    return res.status(403).json({
      message: "Permission denied",
    });
  };
};

export default checkPermission;
