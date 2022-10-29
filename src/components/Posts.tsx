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
      <p>Article 1</p>
      <p>Article 1</p>
      <p>Article 1</p>
      <p>Article 1</p>
      <p>Article 1</p>
      <p>Article 1</p>
      <p>Article 1</p>
      <p>Article 1</p>
    </>
  );
};

export default Posts;
