import React from 'react'
import {ImTwitter} from "react-icons/im";
import {GrInstagram} from "react-icons/gr";
import {FaSoundcloud} from "react-icons/fa";
import {SlSocialSpotify} from "react-icons/sl";
import {SiBandcamp} from "react-icons/si";
import NewsletterSub from './NewsletterSub';

const Footer = () => {
  return (
    <footer>
        <NewsletterSub />
        <a href='https://twitter.com/ell1psis_'><ImTwitter /></a>
        <a href='https://instagram.com/ell1psis_'><GrInstagram /></a>
        <a href='https://soundcloud.com.com/ell1psis'><FaSoundcloud /></a>
        <a href='https://twitter.com/ell1psis_'><SlSocialSpotify /></a>
        <a href='https://ell1psis.bandcamp.com'><SiBandcamp /></a>
        <p>Copyright 2022 ell!psis </p>
    </footer>
  )
}

export default Footer