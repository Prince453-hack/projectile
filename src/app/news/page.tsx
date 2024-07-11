"use client";
import React, { useState, useEffect } from "react";

interface NewsArticle {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  source_id: string;
}

const NewsFeed = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiKey = "pub_483776c294ef4dfc80dafa8f9732d05809c1a";
    const query = encodeURIComponent("education student");
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

  return (
    <div>
      {isLoading ? (
        <p>Loading news...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        articles.map((article, index) => (
          <div key={index}>
            <h3>{article.title}</h3>
            <p>{article.description || "No description available."}</p>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
            <p>
              Published on: {new Date(article.pubDate).toLocaleDateString()}
            </p>
            <p>Source ID: {article.source_id}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default NewsFeed;
