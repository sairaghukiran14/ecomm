import React from "react";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <div className="newsletter flex flex-col justify-center items-center m-auto bg-gradient-to-t from-slate-50 to-purple-300 gap-8">
      <h1 className="text-3xl font-semibold">
        Get Exclusive Offers on your Email
      </h1>
      <p className="text-xl">Subscribe to our newsletter and stay updated</p>
      <div className="flex items-center justify-between bg-white border">
        <input
          type="email"
          placeholder="Enter your Email Address"
          className="border-none outline-none text-lg"
        />
        <button className="bg-black text-white text-lg cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
