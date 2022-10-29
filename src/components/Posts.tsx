import Link from "next/link";
import React from "react";
import SectionTitle from "./SectionTitle";

interface PostProps {
  posts: string;
}

const Posts = (props: PostProps) => {
  return (
    <>
      <section className="max-w-6xl">
        <SectionTitle title="Blog" subTitle="My articles" />
      </section>
      <Link href="/blog">
        <div className="p-16 mx-3 mt-5 text-3xl text-center rounded-full cursor-pointer bg-neutral-400 text-slate-200 hover:bg-neutral-700 hover:text-slate-100 hover:underline">
          Do you want to read my articles? 👉click here👈
        </div>
      </Link>
    </>
  );
};

export default Posts;
