import Head from "next/head";
import Link from "next/link";
import Newsletter from "../frontend/components/Newsletter";
import styles from "../styles/Home.module.css";



export default function Home() {
  return (
    <>
      <Head>
        <title>ell!psis | Home</title>
        <meta name="keywords" content="ell!psis"/>
      </Head>
      <div>
        <h1 
        className={styles.title}
        >ell!psis</h1>
        <p className={styles.text}>Lorem ipsum</p>
        <Newsletter />
      </div>
    </>
  );
}
