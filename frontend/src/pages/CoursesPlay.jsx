import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CoursesPlay = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-full mt-10 mb-10 flex justify-center items-center flex-row">
        <div className="w-1/2 h-full flex justify-center items-center flex-col">
          <div className="w-full h-1/2 flex justify-center items-center">
            <div className="w-full h-full bg-green-700 flex justify-center items-center">
              Videos
            </div>
          </div>
          <div className="w-full h-1/2 mt-8 flex justify-center items-center">
            <div>
              <div className="w-full ">
                <h2 className="text-2xl">Notes</h2>
              </div>
              <div className="w-full h-80 flex justify-center items-center flex-col">
                <textarea
                  name="douts"
                  id=""
                  cols="80"
                  rows="10"
                  className="border-2 border-violet-700 resize-none rounded-md focus:outline-none focus:border-violet-900 p-4"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center flex-col">
          <div className="w-full h-1/4 flex justify-around items-center flex-row">
            <select
              name="language"
              id="language"
              className="border-2 border-blue-800 rounded-lg focus:outline-none p-3"
            >
              <option value="">Select Language</option>
              <option value="">Java</option>
              <option value="">C++</option>
              <option value="">Python</option>
              <option value="">Node.js</option>
              <option value="">C</option>
            </select>
            <div>
              <button className="p-2 bg-orange-600 rounded-lg w-30 h-10 mr-6 font-semibold text-white w-32">
                Run
              </button>
            </div>
          </div>
          <div className="w-full h-1/2">
            <h1>Complier</h1>
          </div>
          <div className="w-full h-1/4 bg-black">
            <p className="text-white p-4">Terminal</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursesPlay;
