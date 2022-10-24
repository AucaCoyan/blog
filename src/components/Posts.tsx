import React from "react";
import SectionTitle from "./SectionTitle";

interface PostProps {
  posts: string;
}

const Posts = (props: PostProps) => {
  return (
    <>
      <section className="max-w-6xl">
        <SectionTitle title="Posts" subTitle="My articles" />
      </section>
    </>
  );
};

export default Posts;
