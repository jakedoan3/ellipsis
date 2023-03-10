import React from "react";
import Link from "next/link";
import Image from "next/image";
import Background from "../public/header-background.png"



const Navbar = () => {
  return (
    <nav style={{
      backgroundImage: `url(${Background.src})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: "center",
      backgroundSize: "cover"
    }}>
      <div className="logo">
        <Link href="/">
          <Image
            src="/Logo-Transparent-White.Png"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
      </div>
      {/* <Link href="/about" legacyBehavior>
        <a>About Me</a>
      </Link> */}
      <Link href="/shop" legacyBehavior>
        <a>Shop</a>
      </Link>
      {/* <Link href="/music" legacyBehavior>
        <a>Music</a>
      </Link> */}
      {/* <Link href="/news" legacyBehavior>
        <a>News</a>
      </Link> */}
      {/* <Link href="/contact" legacyBehavior>
        <a>Contact</a>
      </Link> */}
    </nav>
  );
};

export default Navbar;
