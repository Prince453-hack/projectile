import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen dark:text-black">
      <div className="bg-[#B8ECB6] h-[25vh] md:h-[30vh] lg:h-[50vh]">
        <div className="flex items-center ml-10 md:ml-12 lg:ml-20 pt-10 md:pt-12 lg:pt-20 font-semibold">
          <Link href="/">
            <h1>Home</h1>
          </Link>
          <span className="h-4 border border-black mx-3 rotate-12" />
          <p>TSL Newsletter</p>
        </div>

        <div className="ml-10 md:ml-12 lg:ml-20 mt-10 md:mt-12 lg:mt-20">
          <h1 className="font-extrabold text-3xl md:text-6xl uppercase">
            TSL Newsletters
          </h1>
        </div>

        <div className="">
          <Card className="dark:bg-white dark:text-black relative h-[15vh] lg:h-[25vh] w-[30vh] lg:w-[50vh] mt-10 md:mt-16 lg:mt-10 ml-10 md:ml-12 lg:ml-20 rounded-xl">
            <CardHeader className="p-3 md:p-5 lg:p-6">
              <CardTitle className="text-base lg:text-2xl my-2 lg:my-5">
                INSIGHTS POWER PLANT CHEMISTRY
              </CardTitle>
              <CardDescription className="font-semibold">
                Sukamal Banerjee
              </CardDescription>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-auto px-4 py-2 rounded-xl absolute right-2 md:right-4 bottom-2 md:bottom-4 dark:bg-black dark:text-white">
                    Read
                  </Button>
                </DialogTrigger>
                <DialogContent className="dark:bg-white dark:text-black">
                  <DialogHeader>
                    <DialogTitle className="text-center">
                      INSIGHTS POWER PLANT CHEMISTRY
                    </DialogTitle>
                    <DialogDescription>
                      <iframe
                        src="https://newsletterspdf.s3.amazonaws.com/chemistry.pdf#toolbar=0"
                        width="100%"
                        height="600px"
                        style={{ border: "none" }}
                      ></iframe>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default page;
