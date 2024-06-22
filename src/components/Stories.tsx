"use client";
/* eslint-disable no-use-before-define */

import React, { useState } from "react";

const Stories = ({ data }: { data: any }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid place-items-center mt-6 mb-12 w-full overflow-hidden">
      <div className="flex lg:flex-row flex-col gap-4 max-w-[90rem] sm:max-w-7xl w-[calc(100%-90px)] mx-auto px-4 overflow-hidden">
        {data.map((item: any, index: number) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg transition-all duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)] ${
              activeIndex === index
                ? "lg:w-full w-full lg:h-96 h-[500px] sm:h-60"
                : "lg:w-16 w-full lg:h-96 h-14 sm:h-16"
            } cursor-pointer`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={item.image}
              alt={item.title}
              title={item.title}
              className="object-cover w-full h-full transition-all duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)]"
            />
            <span
              className={`absolute left-2 top-2 bg-black text-white text-sm md:text-md px-2 py-1 rounded-md md:rounded-full transition-all duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)] ${
                activeIndex === index ? "scale-100 delay-300" : "scale-0"
              }`}
            >
              {item.title}
            </span>

            <span
              className={`absolute left-2 top-14 mt-0 md:mt-2 backdrop-blur-md rounded-md text-white text-xs md:text-sm p-2 transition-all duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)] ${
                activeIndex === index ? "scale-100 delay-300" : "scale-0"
              }`}
            >
              {item.data}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
