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

      <h1 className="text-4xl text-center justify-center mt-20 animate-pulse">
        Coming Soon...
      </h1>
    </div>
  );
};

export default NewsFeed;
