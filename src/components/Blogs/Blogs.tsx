import React from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <section className="my-10">
      <h2 className="text-7xl font-bold">INSIGHTS</h2>
      <ul className="my-10 flex flex-col gap-10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </ul>
    </section>
  );
};

export default Blogs;
