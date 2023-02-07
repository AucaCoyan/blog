import Image from "next/image";
import Link from "next/link";
import React from "react";
import profile_pic from "../../utils/profile_pic.jpg";

const Biography = () => {
  return (
    <section className="mx-auto max-w-6xl">
      <p className="px-6 pt-12 text-center text-5xl">
        Hi there! I&#39;m <b>Auca Coyan</b> {/*  TODO: animate*/}
        {/*         <span className=" animate-spin"> */}
        👋
        {/*           </span> */}
      </p>
      <div className="flex items-center justify-center gap-x-24 pt-24 text-center">
        <div className="px-6 pt-2 text-2xl ">
          <p>
            Nice to meet you! I&#39;m a <b>fullstack engineer</b> from Buenos
            Aires, Argentina. 🇦🇷
          </p>
          <br />
          <p>
            I graduated as a Civil Engineer 👷‍♂️ but my passion has always been
            coding 👨‍💻. A couple of years ago I decided to make the change and
            now I work remote 💻 from home at{" "}
            <span className="underline hover:text-blue-500 dark:hover:text-orange-500">
              <Link href="https://www.farmacity.com/">Farmacity</Link>
            </span>
            <br /> <br />
            I&#39;m an avid self-learner. In my free time, I play boardgames &
            tabletop RPG with my friends, practise Kung Fu and Tai Chi Chuan,
            play videogames and catch up with my reading.
          </p>
        </div>
        <Image
          src={profile_pic}
          alt="profile pic"
          className="mt-10 rounded-full md:m-auto md:mt-1 md:mb-0 lg:ml-16"
        />
      </div>
    </section>
  );
};

export default Biography;
