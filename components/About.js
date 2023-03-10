import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="bio">
        {/* <h1>about me</h1> */}
        <Image src="/images/Eli-Press-Pic-01.png" alt="press photo" width={350} height={350}/> 
        <div className='archon-home'>
        <Image src="/images/archoncover.jpg" alt="archon cover"  width={250} height={250} />
        <Image src="/images/archon-tracklist.png" alt="archon tracklist" width={250} height={250} />
        </div>
        
        <div className="bio-text">
          {/* Currently based in Chicago, started in 2012, didnt focus until 2017 */}
          <p>My name is Jake, and I am a music producer based in Chicago. I taught myself Ableton Live and have loved every second of the journey so far. 
            Since moving to Chicago in 2017, this project has become one of my strongest passions and developed a truly unique sound of its own. </p>
          <br></br>
          {/* I use a simple setup of ableton, my keyboard, and my field recorder. Sampling the world around me and augmenting it.*/}
          {/* <p>As a personal goal I try to make every track as much of a learning experience as I can, making each track a refreshing and fulfilling journey for myself. I primarily use stock Ableton tools to augment real-world recordings I made with my field recorder. I find that the best ideas start simple and can be infinitely altered into more elaborate ones.</p> */}
          {/* <br></br> */}
          {/* Inspirations */}
          <p>I've drawn inspiration from countless sources over the years, including Baauer, Tsuruda, Madlib, J Dilla, Kaytranada, Sam Gellaitry, to name a few. I'm very fortunate to regularly cross paths with many producers, and without a doubt I primarily credit most of my inspiration to my friends.</p>
          {/* Big achievements */}
          <br></br>
          <p>In just the last few years, I've been thrilled with how my music has grown and been received. I won Baauer's Bop Battle challenge, with guest judge Diplo making the final decision. I also self-release my debut EP <a className="archon-embed" href="https://open.spotify.com/album/3VoiRXfZIR13bA5VDEhL2i?si=TOolkr2pSp-4qrjZTypIDQ">"archon"</a> in October 2021 after working with some of my favorite artists. </p>
        </div>
        
      </div>
    </>
  );
};

export default About;
