"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Plus } from "lucide-react";
import Link from "next/link";
import { navbarLinks } from "../../constant";

export function MobileNav() {
  return (
    <Sheet>
      <nav className="w-full bg-[#03005B] flex items-center justify-center px-3 sm:hidden">
        <div className="flex-1">
          <Link href="/">
            <img
              src="/main-logo.jpg"
              className="object-cover h-[50px] ml-3"
              alt="Logo"
            />
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
                  alt="Logo"
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
        <div className="flex flex-col ml-3 mt-2 font-semibold">
          <h1 className="text-white">Projects</h1>
          <div className="flex items-center text-white mt-2 ml-1">
            <Plus className="size-4 mr-1" />
            <Link href="/project-ayanna">
              <p>Project Ayanna</p>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
