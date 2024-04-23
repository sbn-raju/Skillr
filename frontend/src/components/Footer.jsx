import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import skillrFullLogo from "../assets/Skillr.png";

const Footer = () => {
  return (
    <>
      <div className="w-full h-96 bg-black pt-12">
        <div className="w-full h-48 flex justify-center items-center">
          <div className="w-1/2 h-full">
            <img src={skillrFullLogo} alt="" className="w-60 h-60 pb-9 pl-12"/>
          </div>
          <div className="w-1/2 h-full flex justify-end items-center pr-16">
            <span className="text-3xl mr-4 text-blue-700">
              <FaFacebook />
            </span>
            <span className="text-3xl mr-4">
              <FcGoogle />
            </span>
            <span className="text-3xl mr-4 text-pink-500">
              <FaInstagram />
            </span>
            <span className="text-3xl mr-4 text-blue-600">
              {" "}
              <FaLinkedin />
            </span>
            <span className="text-3xl mr-4 text-blue-500">
              <FaTwitter />
            </span>
            <span className="text-3xl mr-4 text-red-600">
              {" "}
              <FaYoutube />
            </span>
          </div>
        </div>
        <div className="w-full h-16 flex justify-center items-center"></div>
        <div className="w-full h-16 flex justify-around items-center">
          <h2 className="text-white pl-80">
            Made with{" "}
            <span className="font-bold">
              Curiosity <span className="text-rose-500">&hearts;</span>
            </span>
          </h2>
          <p className="text-white pr-80">&copy;&nbsp;All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
