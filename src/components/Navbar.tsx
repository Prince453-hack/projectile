"use client";

import React, { useEffect, useState } from "react";
import { navbarLinks } from "../../constant";
import Link from "next/link";
import { MobileNav } from "./MobileNav";
import { ModeToggle } from "./ThemeToggleButton";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
const StickyNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <nav
          className={`fixed top-0 left-0 right-0 bg-[#03005B] backdrop-blur-lg text-center shadow-md transition-all duration-300 ease-in-out hidden sm:block ${
            scrolled &&
            "top-5 w-11/12 my-0 mx-auto shadow-md rounded-full transition-all z-50"
          }`}
        >
          <div className="flex items-center justify-center space-x-4">
            <div className="flex-1">
              <img src="/main-logo.jpg" className="h-[70px] w-[140px] mx-8" />
            </div>
            <div className="flex items-center justify-center pr-4">
              {navbarLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.route}
                  className="text-white mx-1 sm:mr-2 md:mr-3 xl:mr-4 hover:underline transition-all"
                >
                  {link.label}
                </a>
              ))}

              <div className="flex items-center justify-center mr-3 focus-visible:outline-none">
                <SignedIn>
                  <UserButton
                    showName
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: "h-10 w-10",
                        userButtonBox:
                          "flex items-center justify-center border-2 border-white rounded-full focus:outline-none focus:ring-0 focus:ring-transparent",
                      },
                      variables: {
                        colorPrimary: "#1D24CA",
                      },
                    }}
                  />
                </SignedIn>
              </div>

              <SignedOut>
                <Link
                  href="/sign-in"
                  className="px-2 py-1.5 border-2 border-yellow-400 rounded-lg text-yellow-400 mr-4"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="text-black bg-yellow-400 px-2.5 py-2 rounded-lg mr-4"
                >
                  Sign Up
                </Link>
              </SignedOut>
              <ModeToggle />
            </div>
          </div>
        </nav>
      </div>
      <MobileNav />
    </>
  );
};

export default StickyNavbar;
