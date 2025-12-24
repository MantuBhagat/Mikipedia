import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import FloatingInput from "../components/FloatingInput";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/register",
        form
      );
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Register failed");
    }
  };

  return (
    <div className="min-h-screen flex gap-2 items-center justify-center bg-gray-100">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

        <FloatingInput
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          icon={<FaUser />}
        />

        <FloatingInput
          label="Username"
          name="username"
          value={form.username}
          onChange={handleChange}
          icon={<FaUser />}
        />

        <FloatingInput
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          icon={<FaEnvelope />}
        />

        <FloatingInput
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          icon={<FaLock />}
        />

        <button className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition">
          Register
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-500 font-medium">
            Login
          </Link>
        </p>
      </motion.form>
    </div>
  );
};

export default Register;
