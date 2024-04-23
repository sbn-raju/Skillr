import React from 'react'
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi";
import { PiStudentFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import logo from '../assets/Skillr (2).png'
import { Link } from 'react-router-dom';

const LoginNavbar = () => {
return (
    <>
      <div className="w-full h-20 bg-black flex justify-center items-center flex-row">
        <div className="w-1/2 h-full flex justify-center items-center">
          <div className="w-full h-full flex justify-start items-center">
            <span className="pl-20 w-80 h-60">
              <img src={logo} className="w-full h-full"/>
            </span>
          </div>
        </div>
        <div className=" w-1/2 h-full flex justify-center items-center">
          <div className="w-1/2 h-full flex justify-center items-center flex-row">
            <span className="text-white text-3xl mr-2">
              <HiOutlineHome />
            </span>
            <span className="text-xl text-white mr-8 hover:cursor-pointer">Home</span>
            <span className="text-white text-3xl mr-2">
              <PiStudentFill />
            </span>
            <span className="text-xl text-white mr-8 hover:cursor-pointer">Student</span>
            <span className="text-white text-3xl mr-2">
              <GiTeacher />
            </span>
            <span className="text-xl text-white mr-8 hover:cursor-pointer">Faculty</span>
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center flex-row">
        <span className="text-xl text-white  hover:cursor-pointer"><Link to="/profile">Profile</Link></span>
        <span className="text-white text-3xl ml-2">
             <CgProfile/>
            </span>
            <span className="text-xl text-white  hover:cursor-pointer ml-4">Setting</span>
            <span className="text-white text-3xl ml-2">
              <IoSettingsOutline/>
            </span>
        </div>
      </div>
    </>
)
}

export default LoginNavbar