import Image from "next/image";
import React from "react";
import carImage from "../../public/images/Benefits/Set-copy 1.png";
import comic from "../../public/images/Benefits/Comic 1.png";
import game from "../../public/images/Benefits/Game 1.png";
import premier from "../../public/images/Benefits/premier 1.png";

function BenefitBox() {
  return (
    <>
      <div className="benefit-box-left">
        <div className="benefit-box-left-inner">
          <p>
            Film Productions
          </p>
          <p> You will have access to cast and crew interviews, be able to see the day-to-day activities and even participate in the creative aspects   including outfit of characters, designs of creatives and sets through your ability to vote. </p>
        </div>
        <div className="benefit-box-left-image">
            <Image src={carImage} alt="img" />
        </div>
      </div>

      <div className="benefit-box-right">
        <div className="benefit-box-left-image">
            <Image src={comic} alt="img" />
        </div>

        <div className="benefit-box-left-inner">
          <p>
          Comic Books
          </p>
          <p>You will have access to early artwork and be able to see the comic book production pipeline. You will also have the opportunity to be among the first to purchase each of the comic books. </p>
        </div>
      </div>

      <div className="benefit-box-left benefit-third-box">
        <div className="benefit-box-left-inner">
          <p>
          Video Games
          </p>
          <p> You will have the opportunity to be involved in events and promotions as well as early access to merchandise.</p>
        </div>
        <div className="benefit-box-left-image">
            <Image src={game} alt="img" />
        </div>
      </div>

      <div className="benefit-box-right">
        <div className="benefit-box-left-image">
            <Image src={premier} alt="img" />
        </div>

        <div className="benefit-box-left-inner">
          <p>
          Events & Promotions
          </p>
          <p> You will have access to cast and crew interviews, be able to see the day-to-day activities and even participate in the creative aspects   including outfit of characters, designs of creatives and sets through your ability to vote. </p>
        </div>
      </div>
    </>
  );
}

export default BenefitBox;
