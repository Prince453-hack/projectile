"use client";

import { ArrowLeft, ArrowRight, Dot } from "lucide-react";
import React, { useEffect, useState } from "react";

function Slider() {
  const slides = [
    {
      url: "/Feature2.jpg",
      type: "image",
    },
    {
      url: "/image2.jpg",
      type: "image",
    },
    {
      url: "/image3.jpg",
      type: "image",
    },
    {
      url: "/video.mp4",
      type: "video",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="h-[450px] sm:h-[650px] w-full m-auto px-4 py-12 relative group mt-0 sm:mt-10">
      <div className="w-full h-full rounded-xl bg-center bg-cover duration-500">
        {slides[currentIndex].type === "image" ? (
          <img
            src={slides[currentIndex].url}
            alt=""
            className="w-full h-full object-cover rounded-2xl border-2 border-[#00305B] shadow-md"
          />
        ) : (
          <video
            src={slides[currentIndex].url}
            className="w-full h-full object-cover rounded-2xl border-2 border-[#03005B] shadow-md"
            autoPlay
            loop
            muted
          />
        )}
      </div>

      <div className="hidden ml-7 z-10 group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ArrowLeft onClick={prevSlide} size={30} />
      </div>

      <div className="hidden mr-7 z-10 group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ArrowRight onClick={nextSlide} size={30} />
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              slideIndex === currentIndex ? "text-white" : "text-gray-400"
            }`}
          >
            <Dot size={20} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
