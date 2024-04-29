import React from 'react'
import profilePic from "../assets/Madam_Bomma.jpg"
import { FaRegStar } from "react-icons/fa";
import { FaRegStarHalf } from "react-icons/fa";

const FacultyIntoCard = () => {
return (
    <>
    <div className='w-96 h-96 flex justify-center items-center m-4 flex-col bg-slate-900 rounded-xl'>
        <div className='w-full h-1/2 flex justify-center items-center flex-row'>
        <div className='w-1/2 h-full p-2'>
            <img src={profilePic} className='w-full h-full'/>
        </div>  
        <div className='w-1/2 h-full mt-5'>
            <div className='pl-2'>
                <h1 className='text-white font-bold text-2xl'>Dr. SBN Raju</h1>
            </div>
            <div className='pl-2'>
                <p className='text-white'>Exprience: 2 yrs</p>
            </div>
            <div className='pl-2'>
                <p className='text-white'>Subjects: Computer Science</p>
            </div>
            <div className='pl-2 mt-2'>
                <div className='flex justify-start items-center flex-row'>
                    <span className='text-yellow-500 mr-2'><FaRegStar /></span>
                    <span className='text-yellow-500 mr-2'><FaRegStar /></span>
                    <span className='text-yellow-500 mr-2'><FaRegStar /></span>
                    <span className='text-yellow-500 mr-2'><FaRegStar /></span>
                    <span className='text-yellow-500 mr-2'><FaRegStarHalf /></span>
                </div>
                <div>
                    <p className='text-blue-600'>4.5 Rating</p>
                </div>
            </div>
        </div>
        </div>  
        <div className=' w-full h-1/2 '>
           <div className='h-1/2'>
            <p className='text-white font-semibold p-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi et ad voluptates explicabo enim reiciendis dignissimos cupiditate, maxime at? Qui?</p>
           </div>
           <div className='ml-4 pl-3 pb-3 h-1/2 flex justify-start items-center'>
           <button
            className="p-2 bg-blue-600 rounded-lg w-30 h-10 mr-6 font-semibold text-white"
          >
            Courses Details
          </button>
          <button
            className="p-2 bg-blue-600 rounded-lg w-30 h-10 font-semibold text-white"
          >
            Buy Course
          </button>
           </div>
        </div>
    </div>
    </>
)
}

export default FacultyIntoCard