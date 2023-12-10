import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
const Hero = () => {
  return (
    <div className="hero flex bg-gradient-to-t from-gray-50 to-red-300 text-2xl">
      <div className="hero-left flex-1 flex flex-col justify-center gap-4 pl-10 ">
        <h2 className="font-semibold ">New Arrivals Only</h2>
        <div>
          <div className="hero-hand-icon flex items-center gap-3">
            <p>New</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collections</p>
          <p>for every one</p>
        </div>
        <div className="hero-latest-btn flex justify-center items-center gap-4 mt-8 bg-orange-600 text-white text-2xl font-semibold rounded-2xl">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right flex flex-1 justify-center items-center">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
