"use client";
import Blogs from "@/components/Blogs/Blogs";
import { NavigationMenuDemo } from "./shared/ui/navbar";
import { trpc } from "./utils/trpc";

export default function Home() {
  try {
    var hello = trpc.hello.useQuery({ text: "client" });

    console.log(hello.data);
  } catch (error) {}

  return (
    <>
      <NavigationMenuDemo />
      <Blogs />
    </>
  );
}
