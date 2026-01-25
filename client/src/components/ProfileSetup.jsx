import { useState, useContext } from "react";
import FloatingInput from "./FloatingInput";
import Button from "../components/Button";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProfileSetup = () => {
  const { setProfile, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    bio: "",
    website: "",
    twitter: "",
    linkedin: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post("/profile", form);
    setProfile(res.data);
    navigate(`/${res.data.username}`); // 🔥 public profile
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-xl p-8 rounded-2xl border"
      >
        <h2 className="text-3xl font-bold mb-1">Complete your profile</h2>
        <p className="text-gray-500 mb-6">
          This helps people discover and trust you on Mikify
        </p>

        <FloatingInput
          label="Username"
          name="username"
          value={form.username}
          onChange={handleChange}
        />

        <FloatingInput
          label="Bio (what do you do?)"
          name="bio"
          value={form.bio}
          onChange={handleChange}
        />

        <FloatingInput
          label="Website"
          name="website"
          value={form.website}
          onChange={handleChange}
        />

        <FloatingInput
          label="Twitter"
          name="twitter"
          value={form.twitter}
          onChange={handleChange}
        />

        <FloatingInput
          label="LinkedIn"
          name="linkedin"
          value={form.linkedin}
          onChange={handleChange}
        />

        <Button>Finish & Go Live 🚀</Button>

        {/* TODO: avatar upload */}
        {/* TODO: keywords / services */}
      </form>
    </div>
  );
};

export default ProfileSetup;
