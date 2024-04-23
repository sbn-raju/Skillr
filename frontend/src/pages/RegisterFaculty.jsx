import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterFaculty = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [fullname, setFullname] = useState("");
  let [email, setEmail] = useState("");
  let navigate = useNavigate();

  let handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };
  let handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  let handleFullNameChange = (event) => {
    setFullname(event.target.value);
  };
  let handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const formSubmit= (event) =>{
    event.preventDefault();
    axios.post("/api/facultyRegister",{
      username,
      fullname,
      email,
      password
     }).then((response)=>{
      if(response){
        console.log(response);
        navigate('/home');
      }
     }).catch((error)=>{
      console.log(error.response.data.message)
     })
  }

  return (
    <>
      <Navbar />
      <div className="w-full h-full flex justify-center items-center mt-10 mb-20">
        <form
          onSubmit={formSubmit}
          className="w-1/3 h-full flex justify-center items-center flex-col border-2 border-gray-700 rounded-2xl"
        >
          <h1 className="text-4xl pb-6 pt-10 font-bold">Sign in as Faculty</h1>

          <div className="w-4/5 h-4 flex justify-start items-center">
            <p className="font-semibold">Username</p>
          </div>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={handleUserNameChange}
            placeholder="Enter your Username"
            className="lable-username w-4/5 h-8 rounded-xl p-6 mb-8 mt-4 border-2 border-indigo-800 focus:outline-none valid:border-lime-700"
            required
          />
          <div className="w-4/5 h-4 flex justify-start items-center">
            <p className="font-semibold">Fullname</p>
          </div>
          <input
            type="text"
            name="fullname"
            id="fullname"
            value={fullname}
            onChange={handleFullNameChange}
            placeholder="Enter your Fullname"
            className="lable-password w-4/5 h-8 rounded-xl p-6 mb-8 mt-4 border-2 border-indigo-800 focus:outline-none valid:border-lime-700"
            required
          />
          <div className="w-4/5 h-4 flex justify-start items-center">
            <p className="font-semibold">Email</p>
          </div>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className="lable-username w-4/5 h-8 rounded-xl p-6 mb-8 mt-4 border-2 border-indigo-800 focus:outline-none valid:border-lime-700"
            required
          />
          <div className="w-4/5 h-4 flex justify-start items-center">
            <p className="font-semibold">Password</p>
          </div>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your Password"
            className="lable-password w-4/5 h-8 rounded-xl p-6 mb-2 mt-4 border-2 border-indigo-800 focus:outline-none valid:border-lime-700"
            required
          />
          <button
            type="submit"
            className="w-1/2 h-10 rounded-xl mb-8 mt-8 bg-indigo-600 hover:bg-violet-700 text-white"
          >
            Sign In
          </button>
          <div className="w-4/5 h-8">
            <p>or Sign up with..</p>
          </div>
          <div className="w-4/5 h-16 flex justify-center items-center flex-row mb-6">
            <span className="text-5xl mr-8">
              <FcGoogle />
            </span>
            <span className="text-5xl mr-8 text-blue-600">
              <FaFacebook />
            </span>
            <span className="text-5xl mr-8">
              <FaSquareGithub />
            </span>
          </div>
          <div className="w-4/5 h-16 flex justify-center items-center ">
            <p>Already have an Account?</p>
            <h2 className="text-1xl font-bold text-blue-700">&nbsp;Login</h2>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterFaculty;
