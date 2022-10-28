import type { NextPage } from "next";
import Head from "next/head";
import Biography from "../components/Biography";
import Contact from "../components/Contact";
import Posts from "../components/Posts";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AucaCoyan&#39;s Blog</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <div className="max-w-6xl mx-auto ">
        <Biography />
        <Posts posts="" />
        <Contact />
      </div>
    </>
  );
};

export default Home;