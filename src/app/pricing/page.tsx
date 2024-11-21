"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Gem } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PricingSection() {
  return (
    <section className="min-h-fit absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] select-none">
      <div className="flex items-center space-x-4 mb-20 mt-[-40px]">
        <Link href="/">
          <img
            src="/main-logo-crop.png"
            className="h-[25px] w-[150px]"
            draggable="false"
          />
        </Link>
        <div className="h-8 border border-1 w-0 border-white" />
        <h1 className="text-xl font-semibold text-white">TSL Pricing</h1>
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-6 text-white">
          Flexible Pricing for Global Growth
        </h2>
        <p className="text-muted-foreground mt-1 mb-28 max-w-3xl text-center mx-auto select-none">
          "Affordable Plans Designed to Support Students, Professionals, and
          Corporate in Achieving Their Educational and Career Goals" <br /> This
          emphasizes the platform&apos;s versatility in offering tailored
          solutions for various client needs, from individual students to
          professionals and larger organizations
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Card className="border-none p-3">
            <CardHeader className="text-center mx-auto text-2xl font-semibold">
              Student
            </CardHeader>
            <CardContent className="flex flex-col space-y-5 ml-1 md:ml-12">
              <CardDescription className="flex flex-row items-center ml-0 md:ml-10 space-x-2 text-lg text-black">
                <Gem className="size-5" />
                <p>Basic</p>
              </CardDescription>
              <CardDescription className="flex flex-row items-center ml-0 md:ml-10 space-x-2 text-lg text-black">
                <Gem className="size-5" />
                <p>Standard</p>
              </CardDescription>
              <CardDescription className="flex flex-row items-center ml-0 md:ml-10 space-x-2 text-lg text-black">
                <Gem className="size-5" />
                <p>Premium</p>
              </CardDescription>
              <CardDescription className="flex flex-row items-center ml-0 md:ml-10 space-x-2 text-lg text-black">
                <Gem className="size-5" />
                <p>Elite</p>
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-center mt-5">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Get Started</Button>
                </DialogTrigger>
                <DialogContent className="w-fit h-fit">
                  <Image
                    width={250}
                    height={250}
                    alt="QR"
                    src="/qr-code/student-qr.png"
                    draggable="false"
                  />
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>

          <Card className="border border-white p-3 text-white bg-[#04005C]">
            <CardHeader className="text-center mx-auto text-2xl font-semibold">
              Professional
            </CardHeader>
            <CardContent className="flex flex-col space-y-5 ml-1 md:ml-12">
              <CardDescription className="flex flex-row items-center ml-0 md:ml-10 space-x-2 text-lg text-white">
                <Gem className="size-5" />
                <p>Basic</p>
              </CardDescription>
              <CardDescription className="flex flex-row items-center ml-0 md:ml-10 space-x-2 text-lg text-white">
                <Gem className="size-5" />
                <p>Standard</p>
              </CardDescription>
              <CardDescription className="flex flex-row items-center ml-0 md:ml-10 space-x-2 text-lg text-white">
                <Gem className="size-5" />
                <p>Premium</p>
              </CardDescription>
              <CardDescription className="flex flex-row items-center ml-0 md:ml-10 space-x-2 text-lg text-white">
                <Gem className="size-5" />
                <p>Elite</p>
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-center mt-5">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="text-black">
                    Get Started
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-fit h-fit">
                  <Image
                    width={250}
                    height={250}
                    alt="QR"
                    src="/qr-code/enterprise-qr.png"
                    draggable="false"
                  />
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>

          <Card className="border-none p-3">
            <CardHeader className="text-center mx-auto text-2xl font-semibold">
              Corporate
            </CardHeader>
            <CardContent className="flex flex-col space-y-5 ml-1 md:ml-12">
              <CardDescription className="flex flex-row items-center ml-0 md:ml-10 space-x-2 text-lg text-black">
                <Gem className="size-5" />
                <p>Basic</p>
              </CardDescription>
              <CardDescription className="flex flex-row items-center ml-0 md:ml-10 space-x-2 text-lg text-black">
                <Gem className="size-5" />
                <p>Standard</p>
              </CardDescription>
              <CardDescription className="flex flex-row items-center ml-0 md:ml-10 space-x-2 text-lg text-black">
                <Gem className="size-5" />
                <p>Premium</p>
              </CardDescription>
              <CardDescription className="flex flex-row items-center ml-0 md:ml-10 space-x-2 text-lg text-black">
                <Gem className="size-5" />
                <p>Elite</p>
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-center mt-5">
              <Button disabled variant="outline">
                Coming Soon
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <section className="w-full md:px-20 py-12 md:py-24 lg:py-32 mt-20">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-3 text-white">
                  Let's connect and make it happen.
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Ready to take the next step? We're here to help you to get
                  started.
                </p>
              </div>
              {/* <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Dialog>
                  <DialogTrigger className="inline-flex h-10 items-center justify-center rounded-md bg-white text-black px-8 text-sm font-medium shadow transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Talk to Us
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-center mb-5">
                        Submit your query, and we'll get back to you.
                      </DialogTitle>
                      <DialogDescription>
                        <form action="submit">
                          <Label htmlFor="name" className="block mb-2">
                            Name
                          </Label>
                          <Input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="mb-4"
                          />

                          <Label htmlFor="email" className="block mb-2 mt-5">
                            Email
                          </Label>
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="mb-4"
                          />

                          <Label htmlFor="query" className="block mb-2 mt-5">
                            Query
                          </Label>
                          <Textarea
                            id="query"
                            name="query"
                            required
                            className="mb-4"
                          />

                          <Button className="w-full mt-10">Submit</Button>
                        </form>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div> */}
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                alt="Connect with us"
                className="aspect-video overflow-hidden object-contain object-center rounded-2xl"
                height="400"
                src="/main-logo-crop.png"
                width="700"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
