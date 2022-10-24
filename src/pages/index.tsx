import type { NextPage } from "next";
import Head from "next/head";
import Biography from "../components/styles/Biography";
import Contact from "../components/styles/Contact";
import Header from "../components/styles/Header";
import Posts from "../components/styles/Posts";

const Home: NextPage = () => {
  return (
    <>
      <Head>text</Head>
      <Header />
      <main className="bg-black">
        <Biography />
        <Posts />
        <Contact />
      </main>
    </>
  );
};

export default Home;
