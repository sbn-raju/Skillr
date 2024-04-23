import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { PiStudentFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import logo from "../assets/Skillr (2).png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const register = (event) => {
    event.preventDefault();
    navigate("/student/register");
  };
  const login = (event) => {
    event.preventDefault();
    navigate("/login");
  };
  return (
    <>
      <div className="w-full h-20 bg-black flex justify-center items-center flex-row">
        <div className="w-1/2 h-full flex justify-center items-center">
          <div className="w-full h-full flex justify-start items-center">
            <span className="pl-20 w-80 h-60">
              <img src={logo} className="w-full h-full" />
            </span>
          </div>
        </div>
        <div className=" w-1/2 h-full flex justify-center items-center">
          <div className="w-1/2 h-full flex justify-center items-center flex-row">
            <span className="text-white text-3xl mr-2">
              <HiOutlineHome />
            </span>
            <span className="text-xl text-white mr-8 hover:cursor-pointer">
              <Link to="/">Home</Link>
            </span>
            <span className="text-white text-3xl mr-2">
              <PiStudentFill />
            </span>
            <span className="text-xl text-white mr-8 hover:cursor-pointer">
              <Link to="/student/register">Student</Link>
            </span>
            <span className="text-white text-3xl mr-2">
              <GiTeacher />
            </span>
            <span className="text-xl text-white mr-8 hover:cursor-pointer">
              <Link to="/faculty/register">Faculty</Link>
            </span>
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center flex-row">
          <button
            onClick={register}
            className="p-3 bg-blue-700 text-white mr-4 w-24 rounded-lg hover:bg-indigo-900"
          >
            Register
          </button>
          <button
            onClick={login}
            className="p-3 bg-blue-700 text-white mr-4 w-24 rounded-lg hover:bg-indigo-900"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
