import React from "react";
import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Head>
        <title>ell!psis | About Me</title>
        <meta name="keywords" content="bio" />
      </Head>
      <div>
        <h1>About Me</h1>
        <Image src="/images/Eli-Press-Pic-01.png" alt="press photo" width={600} height={600}/> 
        <p>I'm a pretty cool guy. I promise!</p>
      </div>
    </>
  );
};

export default About;
