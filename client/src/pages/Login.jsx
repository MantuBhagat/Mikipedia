import React, { useState, useContext } from "react";
import { loginUser } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import FloatingInput from "../components/FloatingInput";
import { Link } from "react-router-dom";

export default function Login() {
  const { setUser } = useContext(AuthContext);
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(form);

      // ✅ SAVE TOKEN + USER
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);

      // ✅ REDIRECT
      navigate("/profile", { replace: true });
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
    }
  };

  return (
    <form
      onSubmit={submit}
      className="min-h-screen flex flex-col  justify-center items-center gap-1 w-full max-w-md px-10 mx-auto"
    >
      <h1 className="text-2xl font-semibold mb-8">Welcome back</h1>
      <FloatingInput
        label="Username"
        name="username"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />

      <FloatingInput
        label="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button className="w-full py-3 bg-black text-white rounded-md">
        Login
      </button>

      <p className="mt-4">
        Don't have an account?
        <Link to="/register" className="text-blue-600 ml-1">
          Sign up
        </Link>
      </p>
    </form>
  );
}
