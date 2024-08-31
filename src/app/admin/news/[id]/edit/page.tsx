import React from "react";
import NewsForm from "../../news-form";
import db from "@/db/db";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const newsId = parseInt(id, 10);
  const news = await db.news.findUnique({ where: { id: newsId } });

  return (
    <div className="p-4">
      <div className="text-2xl font-semibold mb-6">
        <h1>Edit News</h1>
      </div>
      <NewsForm news={news} />
    </div>
  );
};

export default page;
