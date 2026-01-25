import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProfileGuard = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return null;

  if (!user) return <Navigate to="/login" />;

  if (!user.isProfileCompleted) {
    return <Navigate to="/profile-setup" />;
  }

  return children;
};

export default ProfileGuard;
