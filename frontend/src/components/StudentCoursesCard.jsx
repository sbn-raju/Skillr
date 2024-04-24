import React from 'react'
import logo from "../assets/Java-logo.svg"
import { useNavigate } from 'react-router-dom'


const StudentCoursesCard = () => {
  const navigate = useNavigate();
  let navigateToCoursePlays =(event)=>{
       event.preventDefaulter();
       navigate("/courses/play");
  }
  return (
    <>
        <div className='w-96 h-96 rounded-2xl  m-4 bg-slate-300 hover:shadow-xl hover:shadow-cyan-500/50'>
            <div className='w-full h-1/3 p-2'>
               <img src={logo} alt="" className='w-full h-full'/>
            </div>
            <div className='w-full h-9 pl-4 pr-4'>
            <h2 className='font-sans font-bold text-2xl'>Title</h2>
            </div>
            <div className='w-full h-40 pl-4 pr-4'>
            <p className='font-sans font-semibold'>Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab modi illum, sed beatae delectus, quibusdam labore itaque quas quisquam dignissimos, assumenda consectetur libero repellendus sequi vel rerum nesciunt tempora ipsa ducimus eius sunt adipisci!</p>
            </div>
            <div className='w-full h-9 pl-4 pr-4'>
                <button className='p-2 bg-orange-600 rounded-lg w-30 h-10 mr-6 font-semibold text-white'>Course Details</button>
                <button onClick={navigateToCoursePlays} className='p-2 bg-orange-600 rounded-lg w-30 h-10 mr-6 font-semibold text-white'>Continue Watching</button>
            </div>
        </div>
        </>
  )
}

export default StudentCoursesCard