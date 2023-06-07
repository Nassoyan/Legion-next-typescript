import NextArrow from "@/public/svg/topslider-svg/NextArrow";
import PrevArrow from "@/public/svg/topslider-svg/PrevArrow";
import React, { useRef } from "react";
import Slider from "react-slick";
import { Product, topSLideData } from "@/public/data/TopSlideData";
import Image from "next/legacy/image";

function TopSlider() {
  const sliderRef = useRef<any>(null);

  const next = () => {
    sliderRef.current.slickNext();
  };
  const prev = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    
  };
  return (
    <div className="topslider_container">
      <div className="container">
        <div className="topslider_arrows_progress">
          <div></div>
          <div className="topslide_arrows">
            <span onClick={() => {
              prev()
            }}>
             <PrevArrow />
            </span>
            <span onClick={() => {
              next()
            }}>
              <NextArrow />
            </span>
          </div>
        </div>
      </div>

      <Slider ref={(x: any) => (sliderRef.current = x)} {...settings}>

        {topSLideData?.map((item:Product) => {
          return (
            <div className="topslider_each_div" key={item.id}>
              <Image
                src={item.url}
                alt="Product Image"
                width={280}
                height={324}
                objectFit="contain"
              />
            </div>
          )
        })}

      </Slider>
    </div>
  );
}

export default TopSlider;
