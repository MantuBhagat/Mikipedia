import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

const CreatePostForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/posts", {
      title: form.title,
      content: form.content,
    });

    navigate("/feed", { replace: true });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="create-post-form p-6 max-w-4xl mx-auto mt-10"
    >
      <h2 className="text-2xl font-bold mb-6">Create New Post</h2>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block mb-2 font-medium" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium" htmlFor="content">
            Content
          </label>
          <textarea
            id="content"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Create Post
        </button>
      </form>
    </motion.div>
  );
};

export default CreatePostForm;
