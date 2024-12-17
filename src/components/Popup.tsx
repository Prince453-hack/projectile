"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import Image from "next/image";

const Popup = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-gray-900 ring-black text-zinc-50 p-10 border-gray-950">
        <DialogHeader>
          <DialogTitle className="text-center text-lg capitalize mb-2">
            Visit our stall at TechFest at IIT Mumbai
          </DialogTitle>
          <DialogDescription className="mx-auto">
            <Image
              src="/tech-fest.png"
              alt="TechFest"
              width={350}
              height={350}
              draggable={false}
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
