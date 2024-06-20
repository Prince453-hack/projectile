"use client";

import Image from "next/image";
import React, { useState } from "react";

interface StoriesProps {
  data: any;
}

const Stories: React.FC<StoriesProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="grid place-items-center h-screen w-full overflow-hidden bg-gray-700">
      <div className="flex gap-4 max-w-[900px] w-[calc(100%-100px)] mx-auto px-4 overflow-hidden">
        {data.map((data: any, index: number) => (
          <div
            key={index}
            className={`relative ${
              activeIndex === index ? "w-full" : "w-[60px]"
            } h-[400px] rounded-[1rem] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)]`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              // width={100}
              // height={100}
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)] rounded-[1rem]"
            />
            <span
              className={`block absolute left-4 top-2 bg-black px-4 py-2 rounded-full text-white text-xl transition-all duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)] ${
                activeIndex === index ? "scale-100" : "scale-0"
              }`}
            >
              {data.title}
            </span>

            <span
              className={`block absolute left-4 top-14 px-4 py-2 rounded-full text-white text-sm transition-all duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)] ${
                activeIndex === index ? "scale-100" : "scale-0"
              }`}
            >
              {data.data}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
