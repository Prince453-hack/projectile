"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Article {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  source: {
    name: string;
  };
}

const NewsComponent: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(10);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const apiKey = "326f07e9f5054e3089c805e2f4f86adf";
      const query = "education AND student";
      const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(
          data.articles.map((article: any) => ({
            title: article.title,
            description: article.description,
            url: article.url,
            imageUrl: article.urlToImage,
            source: {
              name: article.source.name,
            },
          }))
        );
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const showMoreArticles = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <Link href="/">
        <p className="flex items-center mb-8">
          <ArrowLeft className="mr-2" />
          <img src="/fav/favicon.ico" className="w-7 h-7" />
        </p>
      </Link>
      <h1 className="text-4xl font-bold text-center underline underline-offset-8 mb-16">
        Education and Student News
      </h1>
      {loading ? (
        <p className="text-center min-h-screen text-2xl font-semibold animate-pulse justify-center mt-10">
          Loading...
        </p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {articles.slice(0, visibleCount).map((article, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-slate-100 p-5 rounded-lg shadow-lg"
            >
              {article.imageUrl && (
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="md:w-1/3 w-full lg:w-[16rem] h-[11rem] rounded mr-4"
                />
              )}
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
                  <p className="text-gray-800 text-md mb-4">
                    {article.description}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-600">
                    <strong>Source:</strong>{" "}
                    <span className="bg-green-400 py-1 px-2 rounded-lg text-white">
                      {article.source.name}
                    </span>
                  </p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {visibleCount < articles.length && (
        <div className="text-center mt-8">
          <button
            onClick={showMoreArticles}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsComponent;
