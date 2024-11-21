"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { projectAyannaMembers } from "../../../constant/projectAyannaMembers";

const ProjectAyanna = () => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen p-5">
      <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-5">
        <Button variant="ghost" asChild>
          <Link href="/">Home</Link>
        </Button>
        <div className="border border-black h-10 sm:rotate-12" />
        <Button
          variant="ghost"
          className={cn(
            pathname === "/project-ayanna" && "border text-black border-black"
          )}
          disabled
        >
          Project Ayanna
        </Button>
      </div>

      <div className="mt-12">
        <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0">
          <h1 className="font-semibold text-2xl sm:text-4xl max-w-[250px] sm:max-w-[200px] text-center sm:text-left">
            Project Ayanna
          </h1>
          <div className="border border-black w-full sm:my-1" />
        </div>
        <div className="mt-10">
          <p className="font-normal text-sm sm:text-base sm:ml-48 text-justify">
            The Project Ayanna is a social transformation joint initiative
            undertaken by Rauch Education and the Billion Steps Foundation.
            Project Ayanna is dedicated to empowering underprivileged children
            through education. This project aims to create lasting societal
            change by ensuring that vulnerable children in rural areas,
            marginalized sectors, particularly girls, have access to quality
            educational resources and support.
          </p>
          <p className="mt-10 text-sm sm:text-base sm:ml-48 text-justify">
            Young students play a crucial role in the Project Ayanna. By
            applying their knowledge and skills to facilitate the holistic
            academic development of these children through hands-on involvement
            in various educational initiatives, they not only enhance their own
            learning experience but also contribute to the empowerment of
            marginalized communities. Project Ayanna is a win-win for such young
            students. Our young students who help these children develop a
            strong sense of societal empathy. This lifelong learning transforms
            them to be better leaders in any field of interest they choose. What
            will be the world if technology, policy, healthcare and other
            collective societal benefits are not accessed by certain sections of
            society? Our leaders will make sure they are!!
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0">
          <div className="border border-black w-full sm:my-1" />
          <h1 className="font-semibold text-2xl sm:text-4xl max-w-[250px] sm:max-w-[200px] text-right sm:text-right">
            Our Students
          </h1>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-7">
          {projectAyannaMembers.map(({ name, country, college, details }) => (
            <Card
              className="border-none shadow-none bg-zinc-100/45 h-56 relative"
              key={name}
            >
              <CardHeader className="flex flex-row items-center space-x-1">
                <p className="font-medium capitalize text-lg">{name}</p>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <div>{details}</div>
                </CardDescription>
                <CardFooter className="absolute bottom-1 right-1">
                  <p className="text-sm">{college}</p>
                </CardFooter>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectAyanna;
