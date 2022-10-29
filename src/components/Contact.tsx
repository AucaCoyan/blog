import Link from "next/link";
import React from "react";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  return (
    <section className="max-w-6xl">
      <SectionTitle title="Contact" subTitle="How to reach me" />
      <p className="pt-4 text-lg text-center">
        You can feel free to ask for help, questions or just want to say hi or
        thanks!
      </p>
      <div className="flex justify-around">
        <Link href="mailto:aucacoyan@gmail.com">
          <div className="px-10 py-2 mx-3 mt-5 text-xl text-left rounded-full cursor-pointer max-w-fit bg-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-700 text-slate-200 hover:bg-neutral-700 hover:text-slate-100 hover:underline">
            Send me an email!
          </div>
        </Link>
        <Link href="https://github.com/AucaCoyan">
          <div className="px-10 py-2 mx-3 mt-5 text-xl text-left rounded-full cursor-pointer max-w-fit bg-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-700 text-slate-200 hover:bg-neutral-700 hover:text-slate-100 hover:underline">
            My GitHub
          </div>
        </Link>
        <Link href="https://www.linkedin.com/in/auca-coyan-maillot/">
          <div className="px-10 py-2 mx-3 mt-5 text-xl text-left rounded-full cursor-pointer max-w-fit bg-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-700 text-slate-200 hover:bg-neutral-700 hover:text-slate-100 hover:underline">
            My LinkedIn
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
