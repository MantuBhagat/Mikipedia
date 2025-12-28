import { useState } from "react";
import { registerUser } from "../api/auth";
import { useNavigate } from "react-router-dom";
import FloatingInput from "../components/FloatingInput";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="min-h-screen flex flex-col  justify-center items-center gap-1 w-full max-w-md px-10 mx-auto">
      <h2 className="text-2xl font-semibold mb-8 text-center">
        Mikify - Evolving knowledge
      </h2>

      <FloatingInput
        label="Username"
        name="username"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
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
        className="w-full bg-black text-white py-3 rounded-md"
      >
        Register
      </button>

      <p className="mt-4">
        Don't have an account?
        <Link to="/login" className="text-blue-600 ml-1">
          Sign in
        </Link>
      </p>
    </form>
  );
}
