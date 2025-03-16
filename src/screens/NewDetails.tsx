import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { News } from "../types/types";

const NewsDetails = () => {
  const { _id } = useParams();
  const [news, setNews] = useState<News | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get(`http://localhost:5000/api/news/${_id}`);
      setNews(response.data);
    };
    fetchNews();
  }, [_id]);

  const handleLike = async () => {
    if (!news) return;
    const updatedNews = { ...news, likes: news.likes + 1 };
    setNews(updatedNews);
    await axios.post(`http://localhost:5000/api/news/${_id}/like`);
  };

  return (
    <div className="container mx-auto p-4">
      {news && (
        <div>
          <h1 className="text-xl font-bold">{news.title}</h1>
          <p>{news.text}</p>
          <button
            onClick={handleLike}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            👍 Like ({news.likes})
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsDetails;
