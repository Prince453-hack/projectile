"use client";

import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="flex flex-col space-y-2 items-center text-center">
        <p className="text-lg font-semibold">Application Error</p>
        <Button className="flex items-center justify-center" variant="outline">
          <Home className="size-4 mr-1" />
          <Link href="/">Homepage</Link>
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
