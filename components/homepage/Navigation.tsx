import Image from "next/image";
import React from "react";
import headerlogo from "../../public/images/navigationImg/header_logo.png";
import Link from "next/link";
import NavFlag from "@/public/svg/header-svg/nav-flag";
import NavArrow from "@/public/svg/header-svg/nav-arrow";
import hero from "../../public/images/navigationImg/navcontentHero.png"

function Navigation() {
  return (
    <div className="nav_wrapper">

      <div className="container">
        <div className="navigation">
          <Image
            src={headerlogo}
            alt="logo.img"
            width={143}
            height={43}
          />
          <div className="navigation_roadmap">
            <Link href="/roadmap">Roadmap</Link>
            <Link href="/about">About</Link>
            <div className="nav_flag">
              <NavFlag /> <NavArrow />
            </div>

            <div className="nav_wallet">Connect Wallet</div>
          </div>
        </div>
      </div>

      <div className="container nav_content">
        <div className="nav_content_leftside">
          <p><span>Next</span>-Generation Superheroes</p>
          <p>Five super-powered film franchises, one universe, from a team that has worked on Avatar, Avengers, and with Stan Lee. Get VIP privileges in films, video games, and comic books with your Polygon Legion Universe NFT</p>
          <Link href="#">Mint now</Link>
        </div>

        <div className="hero">
          <Image
            src={hero}
            alt="Hero/image"
            width={368}
            height={552}
            loading="lazy"
          />
        </div>
      </div>
      {/* <div className="linear_gradient"></div> */}
    </div>
  );
}

export default Navigation;
