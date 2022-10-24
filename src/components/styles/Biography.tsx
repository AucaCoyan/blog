import Image from "next/image";
import React from "react";
import profile_pic from "../../../utils/profile_pic.jpg";

const Biography = () => {
  return (
    <section className="">
      <p className="px-6 pt-12 text-5xl text-center">
        Hi there! I&#39;m <b>Auca Coyan</b> {/*  TODO: animate*/}
        {/*         <span className=" animate-spin"> */}
        👋
        {/*           </span> */}
      </p>
      <div className="flex items-center justify-center pt-24 text-center gap-x-24">
        <p className="px-6 pt-2 text-2xl ">
          Nice to meet you! I&#39;m a <b>fullstack programmer</b> from Buenos
          Aires.
        </p>
        <Image
          src={profile_pic}
          height={250}
          width={250}
          alt="profile pic"
          className="mt-24 rounded-full lg:ml-16 md:mt-1 md:m-auto md:mb-0"
        />
      </div>
    </section>
  );
};

export default Biography;
