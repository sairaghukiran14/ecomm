import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className="footer flex flex-col justify-center items-center gap-11">
      <div className="footer-logo flex items-center gap-5">
        <p className=".logoname text-lg font-semibold">Produx</p>
      </div>
      <ul className="footer_links flex list-none gap-11 text-lg">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon flex gap-6">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright flex flex-col items-center gap-8 w-full text-lg">
        <hr cl />
        <p>Copyright @ 2023 All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
