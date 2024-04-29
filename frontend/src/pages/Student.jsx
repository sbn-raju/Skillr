  import React from 'react'
  import Navbar from '../components/Navbar'
  import Footer from '../components/Footer'
  import profilePic from "../assets/Madam_Bomma.jpg"
  import StudentBooksCard from '../components/StudentBooksCard'
  import StudentCoursesCard from '../components/StudentCoursesCard'

  const Student = () => {
    return (
      <>
      <Navbar/>
      <div className="w-full h-full pt-5 pb-5 bg-black">
        <div className="w-full h-80 flex justify-center items-center">
            <div className="w-5/6 h-full bg-blue-400 rounded-3xl flex justify-center items-center">
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
                <div className="w-full h-10 mb-8">
                  <button className="w-40 h-10 bg-blue-700 rounded-xl mr-2 hover:bg-blue-900 text-white">
                    Update Profile
                  </button>
              
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-20 flex justify-center items-center mt-10'>
              <h2 className='w-4/5 h-full text-5xl font-semibold text-white'>My Learning Paths</h2>
          </div>
          <div className='w-full h-auto  mb-10 flex justify-center items-center flex-wrap'>
              <StudentCoursesCard/>
              <StudentCoursesCard/>
              <StudentCoursesCard/>
          </div>
          <div className='w-full h-20 flex justify-center items-center mt-10'>
              <h2 className='w-4/5 h-full text-5xl font-semibold  text-white'>Purchased Books</h2>
          </div>
          <div className='w-full h-auto  mb-10 flex justify-center items-center flex-wrap'>
              <StudentBooksCard/>
              <StudentBooksCard/>
              <StudentBooksCard/>
          </div>
          <div className='w-full h-20 flex justify-center items-center mt-10'>
              <h2 className='w-4/5 h-full text-5xl font-semibold  text-white'>My Douts</h2>
          </div>
          <div>
            <div className='w-full h-80 flex justify-center items-center flex-col'>
            <textarea name="douts" id="" cols="150" rows="10" className='border-4 border-blue-700 resize-none rounded-md focus:outline-none focus:border-violet-900 p-4 bg-slate-600 text-white'></textarea>
            <button className='p-3 bg-blue-700 text-white mr-4 mt-8 w-24 rounded-lg hover:bg-indigo-900'>Ask Douts</button>
            </div>
          </div>
          </div>
          <Footer/>
      </>
    )
  }

  export default Student