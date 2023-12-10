import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className="offers flex m-auto  bg-gradient-to-t from-neutral-50 to-teal-200">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button className="w-96 h-16 rounded-2xl border-none text-white cursor-pointer bg-orange-600">Check now</button>
      </div>
      <div className="offers-right flex justify-center items-center flex-1">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
