import Image from "next/image";
import Link from "next/link";
import React from "react";
import profile_pic from "../../utils/profile_pic.jpg";

const Header = () => {
  return (
    <>
      {/* Nav Bar (transparent, no titles or buttons) */}
      <nav className="sticky top-0 z-10 py-3 mx-auto backdrop-saturate-180 backdrop-blur-lg shadow-semiXL bg-[121212bf]">
        <div className="flex items-center justify-between px-6 m-auto">
          <>
            <Link href="/">
              {/* Logo */}
              <div className="flex items-center justify-between cursor-pointer">
                <Image
                  src={profile_pic}
                  height={36}
                  width={36}
                  alt="profile pic"
                  className="rounded-full"
                />
                <p className="ml-4 text-xl">Auca Coyan</p>
              </div>
            </Link>

            {/* Left Links */}
            <ul className="flex pl-10">
              {/* TODO: add a .map, for loop or cycle  */}
              <li className="px-2 py-2 ">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="px-2 py-2">
                <Link href="/">About</Link>
              </li>
            </ul>
          </>
        </div>
      </nav>
    </>
  );
};

export default Header;
