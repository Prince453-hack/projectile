import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[rgb(3,0,91)] mt-16">
      <div className="py-6 px-4 sm:px-10 flex flex-col sm:flex-row gap-10 items-center justify-center">
        <div className="flex-1 flex justify-center sm:justify-start">
          <Image src="/main-logo.jpg" width={150} height={150} alt="Logo" />
        </div>
        <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5 text-white text-center sm:text-left text-sm">
          <a href="#community">Community</a>
          <a href="/articles">Articles</a>
          <a href="#event">Event</a>
          {/* <a href="#secure">About Us</a> */}
        </div>
      </div>
      <div className="text-white text-center pb-2">
        <p className="text-zinc-200 mb-2">
          RAUCH INTERNATIONAL INDIA PRIVATE LIMITED
        </p>
        <p className="text-xs text-zinc-400">
          &copy; {new Date().getFullYear()} THESECURELEAP. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
