import Head from "next/head";
import Newsletter from "../components/Newsletter";
import styles from "../styles/Home.module.css";
import Image from "next/image";



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
        <Newsletter />
        <p className='archon-home'>
          <Image src="/images/archoncover.jpg" alt="archon cover" width={400} height={400} />
          <Image src="/images/archon-tracklist.png" alt="archon tracklist" width={400} height={400} />
        </p>
      </div>
    </>
  );
}
