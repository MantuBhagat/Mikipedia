import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Unauthorized from "./pages/Unauthorized";
import CreatePostForm from "./components/forms/CreatePostForm";
import RoleRoute from "./routes/RoleRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import GuestRoute from "./routes/GuestRoute";
import AllPosts from "./pages/AllPosts";
import DashboardRouter from "./routes/DashboardRouter";
import AdminUsers from "./pages/Admin/AdminUsers";
import LoggedInHome from "./pages/LoggedInHome";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Footer from "./components/Footer";
import Discover from "./pages/Discover";
import ProfileSetup from "./components/ProfileSetup";
import ProfileGuard from "./components/ProfileGuard";
import PublicProfile from "./pages/PublicProfile";
import DashboardAnalytics from "./components/DashboardAnalytics";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="box-border">
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={user ? <LoggedInHome /> : <Home />} />
        <Route
          path="/login"
          element={
            <GuestRoute>
              <Login />
            </GuestRoute>
          }
        />
        <Route
          path="/register"
          element={
            <GuestRoute>
              <Register />
            </GuestRoute>
          }
        />
        {/* PROTECTED COMMON ROUTES */}
        <Route
          path="/profile-setup"
          element={
            <ProtectedRoute>
              <RoleRoute roles={["user", "admin", "manager"]}>
                <ProfileSetup />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <RoleRoute roles={["user", "admin", "manager"]}>
                <DashboardAnalytics />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/profile"
          element={
            <ProtectedRoute>
              <RoleRoute roles={["user", "admin", "manager"]}>
                <Profile />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route path="/discover" element={<Discover />} />
        {/* GET PROFILE BY USERNAME  */}
        <Route path="/:username" element={<PublicProfile />} />
        {/* ROLE BASED DASHBOARDS */}
        <Route path="/dashboard" element={<DashboardRouter />} />
        <Route path="/dashboard/users" element={<AdminUsers />} />
        {/* Create POst  */}
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <RoleRoute roles={["user", "admin", "manager"]}>
                <CreatePostForm />
              </RoleRoute>
            </ProtectedRoute>
          }
        />

        {/* PROTECTED COMMON ROUTES */}
        <Route
          path="/feed"
          element={
            <ProtectedRoute>
              <RoleRoute roles={["user", "admin", "manager"]}>
                <AllPosts />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        {/* ERROR ROUTES */}
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<h1>404 | Page Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

// TODO: Follow / Connect button
// TODO: Report profile
// TODO: Share profile
// TODO: Verified badge
// TODO: Contact form model
// TODO: SEO meta tags(username based)
// TODO: Custom domain mapping (username.mikify.in)
