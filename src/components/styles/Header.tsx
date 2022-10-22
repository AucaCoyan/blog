import Image from "next/image";
import Link from "next/link";
import React from "react";
import profile_pic from "../../../utils/profile_pic.jpg";

const Header = () => {
  return (
    <>
      <nav>
        <Link href="/">
          <>
            <Image
              src={profile_pic}
              height={120}
              width={120}
              layout="responsive"
              alt="profile pic"
              className="rounded-full cursor-pointer"
            />
            <p>Auca Coyan</p>
          </>
        </Link>
      </nav>
    </>
  );
};

export default Header;
