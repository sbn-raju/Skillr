import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useUserLoginMutation } from "../apis/auth.api";

  const Login = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  // const navigate = useNavigate();
  const [userApiAuth] = useUserLoginMutation();
  let handleChangeForUsername = (event) =>{
      setUsername(event.target.value);
  }

  let handleChangeForPassword = (event) =>{
    setPassword(event.target.value);
  }


  const formSubmit = (event)=>{
    event.preventDefault();
    const userLogin = {
      username,
      password,
    }
    userApiAuth(userLogin);
  }
    return (
      <>
      <Navbar/>
        <div className="w-full h-full flex justify-center items-center pt-10 pb-20 bg-black">
          <div className="w-1/3 h-full flex justify-center items-center flex-col border-2 border-gray-700 rounded-2xl">
            <h1 className="text-4xl pb-6 pt-10 font-bold text-white">Login as Student</h1>
            <div className="w-4/5 h-4 flex justify-start items-center">
              <p className="font-semibold text-white">Username</p>
            </div>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              placeholder="Enter your Username"
              onChange={handleChangeForUsername}
              className="lable-username w-4/5 h-8 rounded-xl p-6 mb-8 mt-4 border-4 border-blue-600 focus:outline-none valid:border-lime-700"
              required
            />
            <div className="w-4/5 h-4 flex justify-start items-center">
              <p className="font-semibold text-white">Password</p>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handleChangeForPassword}
              placeholder="Enter your Password"
              className="lable-password w-4/5 h-8 rounded-xl p-6 mb-2 mt-4 border-4 border-blue-600 focus:outline-none valid:border-lime-300"
              required
            />
            <div className="w-4/5 h-4 rounded-xl mb-4 mt-1 flex justify-end">
              <p className="text-blue-700">Forgot Password?</p>
            </div>
            <button
              type="submit"
              onClick={formSubmit}
              className="w-1/2 h-10 rounded-xl mb-8 mt-4 bg-indigo-600 hover:bg-violet-700 text-white"
            >
              Login
            </button>
            <div className="w-4/5 h-8">
              <p className="text-white">or Login with..</p>
            </div>
            <div className="w-4/5 h-14 flex justify-center items-center flex-row mb-6">
              <span className="text-5xl mr-8">
                <FcGoogle />
              </span>
              <span className="text-5xl mr-8 text-blue-600">
                <FaFacebook />
              </span>
              <span className="text-5xl mr-8 text-white">
                <FaSquareGithub />
              </span>
            </div>
            <div className="w-4/5 h-16 flex justify-center items-center ">
              <p className="text-white">Don't have Account? Create Account</p>
              <h2 className="text-1xl font-bold text-blue-700">&nbsp;Sign Up</h2>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default Login;
