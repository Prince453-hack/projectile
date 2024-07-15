"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface NewsArticle {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  source_id: string;
  image_url: string;
}

const NewsFeed = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const apiKey = "pub_4865201cb821877f71cf9c1d51c545c17fb82";
    const query = encodeURIComponent("education news");
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${query}`;

    const fetchNews = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data.results);
        setIsLoading(false);
      } catch (error: any) {
        setError("Failed to fetch news: " + error.message);
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleShowMore = () => {
    setVisibleCount(visibleCount + 5);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 min-h-screen">
      <Link href="/">
        <p className="flex items-center justify-start">
          <ArrowLeft className="mr-4" size={25} />
          <img src="/fav/favicon.ico" className="h-8 w-8" />
        </p>
      </Link>
      <h1 className="my-14 text-center text-5xl">Today&apos;s News</h1>

      {isLoading ? (
        <p className="text-center text-2xl animate-pulse">Loading news...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.slice(0, visibleCount).map((article, index) => (
              <div
                key={index}
                className="bg-zinc-100 border-2 rounded-lg shadow-lg p-2 mb-2 hover:scale-105 transition-all duration-200"
              >
                <h3 className="text-lg font-semibold mb-1 text-black">
                  {article.title}
                </h3>
                {article.image_url && (
                  <img
                    src={article.image_url || "/Article1.jpg"}
                    alt={article.title}
                    className="w-full h-[15rem] rounded-lg mb-1"
                  />
                )}
                <p className="text-gray-700 mb-1 text-sm description">
                  {article.description || "Read More on the link below."}
                </p>
                <a
                  href={article.link}
                  className="text-blue-500 hover:underline text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
                <p className="text-gray-600 mt-1 text-xs">
                  Published on: {new Date(article.pubDate).toLocaleDateString()}
                </p>
                <p className="text-gray-600 text-xs my-2">
                  Source ID:{" "}
                  <span className="text-white px-1 py-1 bg-blue-400 rounded-md">
                    {article.source_id}
                  </span>
                </p>
              </div>
            ))}
          </div>
          {/* {visibleCount < articles.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={handleShowMore}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Show More
              </button>
            </div>
          )} */}
        </>
      )}
    </div>
  );
};

export default NewsFeed;
