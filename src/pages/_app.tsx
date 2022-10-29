import "../styles/globals.css";
// import type { AppProps } from "next/app";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  //: AppProps
  return (
    <>
      {/* General styles for all the app */}
      <div className="bg-[#fffffe] dark:bg-[#000] text-black dark:text-white">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}

export default MyApp;
