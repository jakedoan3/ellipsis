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
        <h1>about me</h1>
        <Image src="/images/Eli-Press-Pic-01.png" alt="press photo" width={500} height={500}/> 
        <div>
          <p>My name is Jake, and I am a music producer based in Chicago.</p>
          <br></br>
          {/* Currently based in Chicago, started in 2012, didnt focus until 2017 */}
          <p>From a young age I've loved music and taking in the sounds of the world around me. In 2012, I began teaching myself Ableton Live and have loved every second of the journey so far. I dove deeper into my love of music throughout college, and the ell!psis project quickly became my favorite way to share that love with others. Since moving to Chicago in 2017, this project has become one of my strongest passions and developed a truly unique sound of its own. </p>
          <br></br>
          {/* I use a simple setup of ableton, my keyboard, and my field recorder. Sampling the world around me and augmenting it.*/}
          <p>As a personal goal I try to make every track as much of a learning experience as I can, making each track a refreshing and fulfilling journey for myself. I primarily use stock Ableton tools to augment real-world recordings I made with my field recorder. I find that the best ideas start simple and can be infinitely altered into more elaborate ones.</p>
          <br></br>
          {/* Inspirations */}
          <p>I've drawn inspiration from countless sources over the years, including Baauer, Tsuruda, Madlib, J Dilla, Kaytranada, Sam Gellaitry, to name a few. I'm very fortunate to regularly cross paths with many producers, and without a doubt I primarily credit most of my inspiration to my friends.</p>
          {/* Big achievements */}
          <br></br>
          <p>In just the last few years, I've been thrilled with how my music has grown and been received. During the 2020 quarantine, I won Baauer's Bop Battle challenge, with guest judge Diplo making the final decision. I also self-release my debut EP <a href="https://open.spotify.com/album/3VoiRXfZIR13bA5VDEhL2i?si=TOolkr2pSp-4qrjZTypIDQ">"archon"</a> in October 2021 after working with some of my favorite artists and culminating my favorite tracks to date. </p>
        </div>
        
      </div>
    </>
  );
};

export default About;
