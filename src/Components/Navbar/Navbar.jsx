import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { gettotalcartcount } = useContext(ShopContext);
  return (
    <div className="navbar flex justify-around p-4 border">
      <div className="nav-logo flex items-center p-2">
        <p className="font-semibold text-5xl tracking-wider">PRODUX</p>
      </div>
      <ul className="nav-menu flex items-center list-none gap-5 font-semibold text-xl">
        <li
          className="flex flex-col item-center justify-center gap-2 cursor-pointer"
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/"> Shop</Link>

          {menu === "shop" ? (
            <hr className=" h-1 rounded-lg bg-red-400" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col item-center justify-center gap-2 cursor-pointer"
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/men"> Men</Link>
          {menu === "men" ? (
            <hr className=" h-1 rounded-lg bg-red-400" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col item-center justify-center gap-2 cursor-pointer"
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/women"> Women</Link>
          {menu === "women" ? (
            <hr className=" h-1 rounded-lg bg-red-400" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col item-center justify-center gap-2 cursor-pointer"
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids"> Kids</Link>
          {menu === "kids" ? (
            <hr className=" h-1 rounded-lg bg-red-400" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="nav-login-cart flex items-center">
        <Link to="/login">
          <button className="font-semibold text-xl border px-2 rounded-lg cursor-pointer active:bg-orange-200">
            Login
          </button>
        </Link>

        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count flex justify-center items-center bg-orange-600 text-white rounded-xl w-5 h-5 -mt-4 -ml-4">
          {gettotalcartcount()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
