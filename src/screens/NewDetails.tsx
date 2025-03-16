import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { News } from "../types/types";

const NewsDetails = () => {
  const { id } = useParams();
  const [news, setNews] = useState<News | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get(`http://localhost:5000/api/news/${id}`);
      setNews(response.data);
    };
    fetchNews();
  }, [id]);

  const handleLike = async () => {
    if (!news) return;
    const updatedNews = { ...news, likes: news.likes + 1 };
    setNews(updatedNews);
    await axios.patch(`http://localhost:5000/api/news/${id}/like`);
  };

  return (
    <div className="container mx-auto p-4">
      {news && (
        <div className="space-y-4">
          <h1 className="text-xl font-bold">{news.title}</h1>
          <p>{news.text}</p>

          <div className="flex justify-between">
            <button
              onClick={handleLike}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              👍 Like ({news.likes})
            </button>
            <button
              onClick={handleLike}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              👍 Dislike ({news.dislikes})
            </button>
          </div>
          <div className="flex justify-between italic font-light text-sm">
            <p>Date Posted-{news.createdAt}</p>
            <p>Views - {news.views}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsDetails;
