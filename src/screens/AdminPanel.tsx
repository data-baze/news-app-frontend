import { useEffect, useState } from "react";
import axios from "axios";

interface NewsPost {
  _id: string;
  title: string;
  text: string;
  tags: string[];
}

const AdminPanel = () => {
  const [news, setNews] = useState<NewsPost[]>([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/news");
      setNews(response.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/news/${id}`);
      setNews(news.filter((post) => post._id !== id));
    } catch (error) {
      console.error("Error deleting news:", error);
    }
  };

  return (
    <div className="w-full mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Admin Panel Manage news/Posts </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Text</th>
              <th className="p-3 border">Tags</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {news.length > 0 ? (
              news.map((post) => (
                <tr key={post._id} className="border">
                  <td className="p-3 border">{post.title}</td>
                  <td className="p-3 border">
                    {post.text.substring(0, 50)}...
                  </td>
                  <td className="p-3 border">{post.tags.join(", ")}</td>
                  <td className="p-3 border text-center">
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center p-4">
                  No news found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
