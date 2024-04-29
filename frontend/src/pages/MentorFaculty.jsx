import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FacultyIntoCard from '../components/FacultyIntoCard'
import { Link } from 'react-router-dom'

const MentorFaculty = () => {
  return (
    <>
      <Navbar/>
     <div className='w-full h-full pt-10 pb-10 bg-black'>
          <div className='pl-10'>
             <h1 className='text-white text-5xl pl-4 font-semibold'>Our Top Noch Faculty</h1>
          </div>
          <div className=' w-auto h-auto ml-3 mt-6 flex justify-center items-center flex-wrap'>
          <FacultyIntoCard/>
          <FacultyIntoCard/>
          <FacultyIntoCard/>
          <FacultyIntoCard/>
          <FacultyIntoCard/>
          <FacultyIntoCard/>
          <FacultyIntoCard/>
          <FacultyIntoCard/>
          <FacultyIntoCard/>
          <FacultyIntoCard/>
          <FacultyIntoCard/>
          <FacultyIntoCard/>
          </div>
     </div>
     <div className='w-full h-20 bg-black'>
        <div className='flex justify-center items-start'>
            <h2 className='text-white text-3xl'>Want to become and educator and teach ?<span className='text-blue-700'><Link to="/faculty/register">&nbsp;Sign up</Link></span></h2>
        </div>
     </div>
     <Footer/>
    </>
  )
}

export default MentorFaculty