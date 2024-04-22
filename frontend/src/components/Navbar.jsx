import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { PiStudentFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
const Navbar = () => {
  return (
    <>
      <div className="w-full h-16 bg-black flex justify-center items-center flex-row">
        <div className="w-1/2 h-full flex justify-center items-center">
          <div className="w-full h-full flex justify-start items-center">
            <h1 className="font-bold text-4xl pl-20 text-indigo-700">Skillr</h1>
          </div>
        </div>
        <div className=" w-1/2 h-full flex justify-center items-center">
          <div className="w-1/2 h-full flex justify-center items-center flex-row">
            <span className="text-white text-3xl mr-2">
              <HiOutlineHome />
            </span>
            <span className="text-xl text-white mr-8">Home</span>
            <span className="text-white text-3xl mr-2">
              <PiStudentFill />
            </span>
            <span className="text-xl text-white mr-8">Student</span>
            <span className="text-white text-3xl mr-2">
              <GiTeacher />
            </span>
            <span className="text-xl text-white mr-8">Faculty</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
