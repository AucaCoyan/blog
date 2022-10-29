import type { NextPage } from "next";
import Biography from "../components/Biography";
import Contact from "../components/Contact";
import Posts from "../components/Posts";

const Home: NextPage = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Biography />
        <Posts posts="" />
        <Contact />
      </div>
    </>
  );
};

export default Home;
