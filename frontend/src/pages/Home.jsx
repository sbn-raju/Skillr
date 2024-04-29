import React from 'react'
import Navbar from '../components/Navbar'
import CoursesCard from '../components/CoursesCard'
import Footer from '../components/Footer'
import heroImage from "../assets/hero.png"
import FacultyIntoCard from '../components/FacultyIntoCard'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='w-full h-full pt-10 pb-10 bg-black'>
        {/* heroSection */}
        <div className='w-full h-80 flex justify-center items-center'>
            <div className='w-5/6 h-full bg-blue-400 rounded-3xl flex justify-center items-center'>
              <div className='w-1/2 h-full pl-5 pt-3 flex justify-center items-center flex-col'>
                <h1 className='text-5xl font-bold'>Skillr Courses For All Standards</h1>
                <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ad, molestias magni autem et similique deleniti voluptatum facilis harum tenetur ipsa animi dignissimos cupiditate deserunt temporibus molestiae totam blanditiis, voluptatibus ab nobis sunt fugit repellat enim delectus. Atque mollitia omnis ad magni quam repellendus consequuntur.</p>
                <div className='w-full h-1/5 mt-4 mb-4'>
                  <button className='p-3 bg-blue-800 text-white font-semibold rounded-lg w-28 hover:bg-blue-900'><Link to="/login">Login</Link>
                  </button>
                </div>
              </div>
              <div className='w-1/2 h-full pl-11'>
                <img src={heroImage} className='h-80'/>
              </div>
            </div>
        </div>
        <div className='w-full h-40 flex justify-center items-center mt-20'>
        <div className='w-4/5 h-40 flex justify-center items-center flex-wrap'>
            <button className='border-2 border-indigo-500 p-4 mr-20 w-40 rounded-xl text-white font-bold '>JAVA</button>
            <button className='border-2 border-indigo-500 p-4 mr-20 w-40 rounded-xl text-white font-bold '>PYTHON</button>
            <button className='border-2 border-indigo-500 p-4 mr-20 w-40 rounded-xl text-white font-bold '>MERN STACK</button>
            <button className='border-2 border-indigo-500 p-4 mr-20 w-40 rounded-xl text-white font-bold '>JAVASCRIPT</button>
            <button className='border-2 border-indigo-500 p-4 mr-6 w-40 rounded-xl text-white font-bold ' >C++</button>
            <button className='border-2 border-indigo-500 p-4 mr-20 w-40 rounded-xl text-white font-bold '>JAVA</button>
            <button className='border-2 border-indigo-500 p-4 mr-20 w-40 rounded-xl text-white font-bold '>PYTHON</button>
            <button className='border-2 border-indigo-500 p-4 mr-20 w-40 rounded-xl text-white font-bold '>MERN STACK</button>
            <button className='border-2 border-indigo-500 p-4 mr-20 w-40 rounded-xl text-white font-bold '>JAVASCRIPT</button>
            <button className='border-2 border-indigo-500 p-4 mr-6 w-40 rounded-xl text-white font-bold '>And More...</button>
        </div>
        </div>

        <div className='w-full h-20 flex justify-center items-center mt-10'>
             <h2 className='w-4/5 h-full text-5xl  text-white'>Our Courses</h2>
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
             <h2 className='w-4/5 h-full text-5xl text-white'>Our Mentors And Faculty</h2>
        </div>
        <div className='w-full h-auto mt-10  flex justify-center items-center flex-wrap'>
            <FacultyIntoCard/>
            <FacultyIntoCard/>
            <FacultyIntoCard/>
            <FacultyIntoCard/>
            <FacultyIntoCard/>
            <FacultyIntoCard/>
        </div>
    </div>
    <div className='w-full h-1/5 bg-black flex justify-center items-center'>
        <p className='text-white'>Want to be the educator?<Link to="/faculty/register"><span className='text-blue-700'>&nbsp;Sign up</span></Link></p>
    </div>
    <Footer/>
    </>
  )
}

export default Home