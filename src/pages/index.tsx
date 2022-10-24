import type { NextPage } from "next";
import Head from "next/head";
import Biography from "../components/Biography";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Posts from "../components/Posts";

const Home: NextPage = () => {
  return (
    <>
      <Head>text</Head>
      <Header />
      <main className="max-w-6xl mx-auto bg-black">
        <Biography />
        <Posts posts="" />
        <Contact />
      </main>
    </>
  );
};

export default Home;
