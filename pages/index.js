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
          <h3>Stream my debut EP, "archon"  <a href="https://open.spotify.com/album/3VoiRXfZIR13bA5VDEhL2i?si=0MxdQ6zcTEGmCWZVEy4VcA">here</a></h3>
          <p>or purchase it <a href="https://ell1psis.bandcamp.com/album/archon">here</a></p>
          <Image src="/images/archoncover.jpg" alt="archon cover"  width={500} height={500} />
          <Image src="/images/archon-tracklist.png" alt="archon tracklist" width={500} height={500} />
        </p>
      </div>
    </>
  );
}
