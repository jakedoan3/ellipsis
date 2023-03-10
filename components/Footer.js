import React from "react";
import { ImTwitter } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaSoundcloud } from "react-icons/fa";
import { SlSocialSpotify } from "react-icons/sl";
import { SiBandcamp } from "react-icons/si";
import NewsletterSub from "./NewsletterSub";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
      <NewsletterSub />
      <div className="socials">
        <a href="https://twitter.com/ell1psis_">
          <ImTwitter size={30}/>
        </a>
        <a href="https://instagram.com/ell1psis_">
          <GrInstagram size={30} />
        </a>
        <a href="https://soundcloud.com.com/ell1psis">
          <FaSoundcloud size={30} />
        </a>
        <a href="https://twitter.com/ell1psis_">
          <SlSocialSpotify size={30} />
        </a>
        <a href="https://ell1psis.bandcamp.com">
          <SiBandcamp size={30}/>
        </a>
      </div>

      <p>Copyright 2023 ell!psis </p>
    </footer>
    </div>
  );
};

export default Footer;
