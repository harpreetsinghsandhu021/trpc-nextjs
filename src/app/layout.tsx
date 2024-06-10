"use client";

import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { trpc } from "./utils/trpc";

const space_Grotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const RootLayout = function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={space_Grotesk.className}>
        <main className="max-w-6xl my-8 mx-auto"> {children} </main>
      </body>
    </html>
  );
};

export default trpc.withTRPC(RootLayout);
