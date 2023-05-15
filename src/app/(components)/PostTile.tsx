"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export type PostProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email?: string;
  } | null;
  shortDescription?: string;
  content: string;
  published: boolean;
};

const PostTile: React.FC<{ post: PostProps }> = ({ post }) => {
  const router = useRouter();

  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
      <Image
        className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
        src="/blog1.png"
        alt="blog"
        width={1024}
        height={768}
      />
      <div className="p-6">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          By {authorName}
        </h2>
        <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
          {post.title}
        </h1>
        <p
          className="leading-relaxed mb-5"
          dangerouslySetInnerHTML={{ __html: post.shortDescription || "" }}
        />
        <div className="flex items-center flex-wrap ">
          <button
            onClick={() => router.push(`/blog/${post.id}`)}
            className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg"
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostTile;
