import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      {/* Blank space */}
      <div className="py-10" />
      {/* Flex container */}
      <div className="bottom-0 flex border-t-2 border-gray-[#121212] items-center py-10 px-6 justify-between">
        {/* Left items */}
        <div className="flex items-center cursor-pointer">
          <div className="ml-24 font-semibold">Auca Coyan ®</div>
        </div>
        {/* Right items */}
        <div className="flex justify-around px-10 pr-12">
          <ul className="flex pl-10">
            <li className="px-2">
              <Link href="https://github.com/AucaCoyan">Github</Link>
            </li>
            <li className="px-2">
              <Link href="https://www.linkedin.com/in/auca-coyan-maillot/">
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
