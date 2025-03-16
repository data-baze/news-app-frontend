import { useState, useEffect } from "react";
import axios from "axios";
import { News } from "../types/types";
import { Link } from "react-router-dom";

const NewsScreen = () => {
  const [news, setNews] = useState<News[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchNews = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:5000/api/news?page=${page}&limit=3`
      );
      setNews((prev) => [...prev, ...response.data]);
      setHasMore(response.data.length > 0);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 200 &&
        hasMore
      ) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore]);

  return (
    <main className="flex justify-center p-20">
      <div className="container p-4">
        <h1 className="text-xl font-bold mb-4 text-red-600">Latest News</h1>
        {news.map((article) => (
          <div key={article._id} className="border p-4 mb-4">
            <h2 className="text-lg font-semibold">{article.title}</h2>
            <p>{article.text.substring(0, 100)}...</p>
            <Link to={`/news/${article._id}`} className="text-blue-500">
              Read more
            </Link>
          </div>
        ))}
        {loading && <p>Loading more news...</p>}
      </div>
    </main>
  );
};

export default NewsScreen;
