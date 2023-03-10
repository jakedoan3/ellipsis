import Head from "next/head";
import Newsletter from "../components/Newsletter";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import About from "../components/About";
import Music from "../components/Music";
import Contact from "../components/Contact";



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
