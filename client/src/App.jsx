import React from "react";
import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";

// Public pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Unauthorized from "./pages/Unauthorized";
import Footer from "./components/Footer";
import ModeratorDashboard from "./dashboards/ModeratorDashboard";
import AdminDashboard from "./dashboards/AdminDashboard";

// Route guards
import PrivateRoute from "./components/PrivateRoute";
import RoleRoute from "./routes/RoleRoute";

const App = () => {
  return (
    <>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* PROTECTED COMMON ROUTES */}

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <RoleRoute roles={["user", "admin", "manager"]}>
                <Profile />
              </RoleRoute>
            </PrivateRoute>
          }
        />

        {/* ROLE BASED DASHBOARDS */}

        <Route
          path="/dashboard/moderator"
          element={
            <RoleRoute roles={["manager"]}>
              <ModeratorDashboard />
            </RoleRoute>
          }
        />

        <Route
          path="/dashboard/admin"
          element={
            <RoleRoute roles={["admin"]}>
              <AdminDashboard />
            </RoleRoute>
          }
        />

        {/* ERROR ROUTES */}
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<h1>404 | Page Not Found</h1>} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
