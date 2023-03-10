import React from "react";
import Head from "next/head";

// import Newsletter from "../components/Newsletter";
// import About from "../components/About";
// import Music from "../components/Music";
// import Contact from "../components/Contact";



export default function Home() {
  return (
    <>
      <Head>
        <title>ell!psis</title>
        <meta name="keywords" content="ell!psis"/>
      </Head>
      <div> 
        <h1 className="main"
        >ell!psis</h1>
        <Newsletter />
        <About />
        <Music />
        <Contact />
      </div>
    </>
  );
}
