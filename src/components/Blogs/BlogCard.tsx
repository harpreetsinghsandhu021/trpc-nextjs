import React from "react";

const BlogCard = () => {
  return (
    <div className="max-h-96 cursor-pointer overflow-hidden">
      <div className="flex h-full gap-8">
        <div className="h-full flex-1">
          <img
            className="h-full"
            src="https://duet-cdn.vox-cdn.com/thumbor/0x0:3000x2567/1200x960/filters:focal(1500x1284:1501x1285):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25480112/Exterior_Hero_Shot.jpg"
            alt=""
          />
        </div>
        <div className="flex-1">
          <h2 className="text-4xl mb-4 font-bold">
            Rivian’s R1 vehicles are getting a gut overhaul — here’s what’s new
          </h2>
          <p className="text-base">
            The exterior design of the R1T and R1S may look the same, but
            ‘everything beneath the surface has changed,’ CEO says.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
