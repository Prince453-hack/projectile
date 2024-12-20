import Contact from "@/components/Contact";
import { cn, constructMetadata } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { Lexend } from "next/font/google";
import "./globals.css";

const inter = Lexend({ subsets: ["latin"], weight: ["400"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body
          className={cn(
            "bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]",
            inter.className
          )}
        >
          {children}
          <Contact />
        </body>
      </html>
    </ClerkProvider>
  );
}
