"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { navbarLinks } from "../../constant";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function MobileNav() {
  return (
    <Sheet>
      <nav className="w-full bg-[#03005B] flex items-center justify-center px-3 sm:hidden">
        <div className="flex-1">
          <Link href="/">
            <img src="/main-logo.jpg" className="object-cover h-[50px] ml-3" />
          </Link>
        </div>
        <SheetTrigger asChild>
          <Menu className="text-white" />
        </SheetTrigger>
      </nav>
      <SheetContent side={"left"} className="bg-[#03005B] w-[300px]">
        <SheetHeader>
          <SheetTitle>
            <nav className="mt-5 rounded-lg">
              <Link href="/">
                <img
                  src="/main-logo.jpg"
                  className="object-cover h-[80px] w-[160px]"
                />
              </Link>
            </nav>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col mt-3 font-semibold">
          {navbarLinks.map((link) => (
            <Link
              href={link.route}
              key={link.label}
              className="my-3 ml-3 text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col">
          <div className="absolute bottom-1 left-2 ml-5 mb-2">
            <SignedIn>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "h-10 w-10",
                    userButtonBox: "flex items-center",
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
              className="px-2 py-2 border-2 border-yellow-400 rounded-lg text-yellow-400 ml-2 my-3 text-center"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="text-black bg-yellow-400 px-2.5 py-2.5 rounded-lg ml-2 text-center"
            >
              Sign Up
            </Link>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
}
