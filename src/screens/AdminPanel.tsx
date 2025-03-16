import { useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/news", {
      title,
      text,
      tags: tags.split(","),
    });
    alert("News added!");
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-xl font-bold mb-4">Admin Panel</h1>
      <form onSubmit={handleSubmit} className="border p-4">
        <input
          className="border p-2 w-full mb-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border p-2 w-full mb-2"
          placeholder="Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-2"
          placeholder="Tags (comma-separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add News
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
