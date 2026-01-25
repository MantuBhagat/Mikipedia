import { createContext, useEffect, useState } from "react";
import api from "../api/axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // auth user
  const [profile, setProfile] = useState(null); // optional
  const [loading, setLoading] = useState(true);

  // 🔁 Restore session
  const restoreSession = async () => {
    try {
      // 1️⃣ Check auth
      const authRes = await api.get("/auth/me");
      setUser(authRes.data);

      // 2️⃣ Try loading profile (may be null)
      try {
        const profileRes = await api.get("/profile/me");
        setProfile(profileRes.data); // can be null
      } catch (err) {
        if (err.response?.status !== 404) {
          console.error("Profile load error", err);
        }
        setProfile(null);
      }
    } catch (err) {
      // ❌ Only auth failure logs user out
      setUser(null);
      setProfile(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    restoreSession();
  }, []);

  // 🔐 Login
  const login = async (data) => {
    await api.post("/auth/login", data);
    await restoreSession();
  };

  // 🔓 Logout
  const logout = async () => {
    await api.post("/auth/logout");
    setUser(null);
    setProfile(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        isAuthenticated: !!user,
        isProfileCompleted: !!profile?.isCompleted,
        login,
        logout,
        setProfile, // for profile-setup page
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
