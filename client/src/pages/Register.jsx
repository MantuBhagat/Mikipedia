import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { replace, useNavigate } from "react-router-dom";
import FloatingInput from "../components/FloatingInput";
import { Link } from "react-router-dom";
import api from "../api/axios";
import { FiUserPlus } from "react-icons/fi";
import { BsArrowLeft } from "react-icons/bs";

export default function Register() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/auth/register", {
      name: form.name,
      email: form.email,
      password: form.password,
    });

    await login({ email: form.email, password: form.password });

    navigate("/dashboard", { replace: true });
  };

  return (
    <form className="min-h-screen flex flex-col  justify-center items-center gap-1 w-full max-w-md px-10 mx-auto">
      <h2 className="text-4xl font-semibold text-center">
        Create your profile
      </h2>
      <p className="text-gray-600 mb-6">
        Join Mikify and build your digital Identity
      </p>

      <FloatingInput
        label="Full Name"
        name="name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <FloatingInput
        label="Email"
        type="email"
        name="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <FloatingInput
        label="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button
        onClick={submit}
        className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-3 rounded-full"
      >
        <FiUserPlus />
        Create account
      </button>

      <p className="mt-4 text-gray-500">
        Don't have an account?
        <Link to="/login" className="text-blue-600 ml-1">
          Sign in
        </Link>
      </p>

      <div>
        <Link
          to="/"
          className="flex gap-2 justify-center text-gray-500 items-center mt-4"
        >
          <BsArrowLeft />
          Back to Home
        </Link>
      </div>
    </form>
  );
}
