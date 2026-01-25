import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import FloatingInput from "../components/FloatingInput";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { PiSignInBold } from "react-icons/pi";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async (e) => {
    e.preventDefault();
    await login(form);
    navigate("/dashboard");
  };

  return (
    <form
      onSubmit={submit}
      className="min-h-screen flex flex-col  justify-center items-center gap-1 w-full max-w-md px-10 mx-auto"
    >
      <h1 className="text-4xl font-semibold">Welcome back</h1>
      <p className="mb-6 text-gray-500">
        Sign in to manage your Mikify profile
      </p>
      <FloatingInput
        label="Email"
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

      <button className="w-full py-3 bg-blue-600 text-white flex justify-center items-center gap-2 rounded-full">
        <PiSignInBold /> Sign in
      </button>

      <p className="mt-4 text-gray-500">
        Don't have an account?
        <Link to="/register" className="text-blue-600 ml-1">
          Sign up
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
};
export default Login;
