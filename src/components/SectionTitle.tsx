import React from "react";

interface SectionTitleType {
  title: string;
  subTitle?: string;
}

const SectionTitle = (props: SectionTitleType) => {
  return (
    <>
      <div className="mt-6 text-3xl font-bold">{props.title}</div>{" "}
      <div className="text-2xl font-normal text-gray-500 ">
        {props.subTitle}
      </div>
    </>
  );
};

export default SectionTitle;
