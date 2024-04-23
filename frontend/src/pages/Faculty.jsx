import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import profilePic from "../assets/Madam_Bomma.jpg";
import CoursesCard from "../components/CoursesCard";
import BooksCard from "../components/BooksCard";
import Articals from "../components/Articals";

const Faculty = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-full mt-10 mb-10">
        <div className="w-full h-80 flex justify-center items-center">
          <div className="w-5/6 h-full bg-blue-300 rounded-3xl flex justify-center items-center">
            <div className="w-1/2 h-full flex justify-center items-center">
              <div className="w-1/2 h-4/5 bg-red-600 rounded-xl">
                <img src={profilePic} className="w-full h-full rounded-xl" />
              </div>
            </div>
            <div className="w-1/2 h-full flex justify-center items-center flex-col">
              {/* Title */}
              <div className="w-full h-10 mt-8 mb-2 ">
                <h1 className="font-bold text-4xl pb-8">Dr.Jenny</h1>
              </div>
              {/* Description */}
              <div className="w-full h-40 mt-2 mb-2 pr-5">
                <p>
                  Professor at IIT Hyderabad, Proficiency in computer
                  Science,Experienced Assistant Professor at Poornima Group of
                  Colleges in the Department of Computer Science and Engineering
                  and Teaching Assistant at The Northcap University. Skilled in
                  OpenMP, Computer Networking, Operating Systems, Data
                  Structures, Algorithms, Distributed Operating Systems,
                  Distributed and Parallel Computing, High-Performance
                  Computing, C, C++, and HTML.
                </p>
              </div>
              {/* Buttons */}
              <div className="w-full h-10 mb-8">
                <button className="w-40 h-10 bg-lime-600 rounded-xl mr-2 hover:bg-lime-900 text-xl text-white">
                  Contact Me
                </button>
                <button className="w-40 h-10 bg-lime-600 rounded-xl hover:bg-lime-900 text-xl text-white">
                  Subscribe Me
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-20 flex justify-center items-center mt-10'>
             <h2 className='w-4/5 h-full text-5xl font-semibold'>My Courses</h2>
        </div>
        <div className='w-full h-auto  mb-10 flex justify-center items-center flex-wrap'>
            <CoursesCard/>
            <CoursesCard/>
            <CoursesCard/>
        </div>
        <div className='w-full h-20 flex justify-center items-center mt-10'>
             <h2 className='w-4/5 h-full text-5xl font-semibold'>My Publications</h2>
        </div>
        <div className='w-full h-auto  mb-10 flex justify-center items-center flex-wrap'>
            <BooksCard/>
            <BooksCard/>
            <BooksCard/>
        </div>
        <div className='w-full h-20 flex justify-center items-center mt-10'>
             <h2 className='w-4/5 h-full text-5xl font-semibold'>My Articals</h2>
        </div>
        <div className='w-full h-auto mb-10 flex justify-center items-center flex-wrap'>
            <Articals/>
            <Articals/>
            <Articals/>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Faculty;
