import React from 'react'
import LoginNavbar from '../components/LoginNavbar'
import Footer from '../components/Footer'
import CoursesCard from '../components/CoursesCard'
import heroImage from "../assets/hero.png"

const LoginHome = () => {
  return (
    <>
    <LoginNavbar/>
    <div className='w-full h-full mt-10'>
        {/* heroSection */}
        <div className='w-full h-80 flex justify-center items-center'>
            <div className='w-5/6 h-full bg-blue-300 rounded-3xl flex justify-center items-center'>
              <div className='w-1/2 h-full pl-5 pt-3'>
                <h1 className='text-5xl font-bold'>Skillr Courses For All Standards</h1>
                <p></p>
              </div>
              <div className='w-1/2 h-full pl-11'>
                <img src={heroImage} className='h-80'/>
              </div>
            </div>
        </div>
        <div className='w-full h-40 flex justify-center items-center mt-20'>
        <div className='w-4/5 h-40 flex justify-center items-center flex-wrap'>
            <button className='border-2 border-indigo-500 p-4 mr-20 w-40 rounded-xl text-black font-bold '>JAVA</button>
            <button className='border-2 border-indigo-500 p-4 mr-20 w-40 rounded-xl text-black font-bold '>PYTHON</button>
            <button className='border-2 border-indigo-500 p-4 mr-20 w-40 rounded-xl text-black font-bold '>MERN STACK</button>
            <button className='border-2 border-indigo-500 p-4 mr-20 w-40 rounded-xl text-black font-bold '>JAVASCRIPT</button>
            <button className='border-2 border-indigo-500 p-4 mr-6 w-40 rounded-xl text-black font-bold ' >C++</button>
            <button className='border-2 border-indigo-500 p-4 mr-20 w-40 rounded-xl text-black font-bold '>JAVA</button>
            <button className='border-2 border-indigo-500 p-4 mr-20 w-40 rounded-xl text-black font-bold '>PYTHON</button>
            <button className='border-2 border-indigo-500 p-4 mr-20 w-40 rounded-xl text-black font-bold '>MERN STACK</button>
            <button className='border-2 border-indigo-500 p-4 mr-20 w-40 rounded-xl text-black font-bold '>JAVASCRIPT</button>
            <button className='border-2 border-indigo-500 p-4 mr-6 w-40 rounded-xl text-black font-bold '>And More...</button>
        </div>
        </div>

        <div className='w-full h-20 flex justify-center items-center mt-10'>
             <h2 className='w-4/5 h-full text-5xl'>Our Courses</h2>
        </div>
        <div className='w-full h-auto mt-10 mb-10 flex justify-center items-center flex-wrap'>
            <CoursesCard/>
            <CoursesCard/>
            <CoursesCard/>
            <CoursesCard/>
            <CoursesCard/>
            <CoursesCard/>
        </div>
        <div className='w-full h-20 flex justify-center items-center mt-10'>
             <h2 className='w-4/5 h-full text-5xl'>Our Courses</h2>
        </div>
        <div className='w-full h-auto mt-10 mb-10 flex justify-center items-center flex-wrap'>
            <CoursesCard/>
            <CoursesCard/>
            <CoursesCard/>
            <CoursesCard/>
            <CoursesCard/>
            <CoursesCard/>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default LoginHome