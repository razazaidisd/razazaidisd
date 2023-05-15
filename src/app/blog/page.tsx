import React from "react";
import PostTile from "../(components)/PostTile";
import prisma from "../../../lib/prisma";
import { IPost } from "../(components)/PostTile";

const Blog = async () => {
  const feed = (await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  })) as unknown as IPost[];

  console.log({ feed });
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {feed?.map((post) => (
            <div className="p-4 md:w-1/3" key={post.id}>
              <PostTile post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
