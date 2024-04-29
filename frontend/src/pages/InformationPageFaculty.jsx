import React from 'react'
import LoginNavbar from '../components/LoginNavbar'
import Footer from '../components/Footer'



const InformationPageFaculty = () => {
  return (
    <>
    <LoginNavbar/>
    <form className='w-full h-full pt-10 pb-10 bg-black flex justify-center items-center'>
        <div className='w-4/5 h-full border-2 border-blue-600 rounded-2xl'>
           <section className='flex flex-row m-5'>
           <div className='flex flex-col w-1/2 pl-3'>
           <label htmlFor="firstname" className='text-white pl-2'>First Name</label>
           <input type="text" name="firstname" id="firstname" placeholder='Enter Firstname' className='w-full h-8 rounded-xl p-6 mb-8 mt-4 border-2 border-indigo-800 focus:outline-none valid:border-lime-700' />
           </div>
           <div className='flex flex-col w-1/2 pl-3'>
           <label htmlFor="lastname" className='text-white pl-2'>Last Name</label>
           <input type="text" name="lastname" id="lastname" placeholder='Enter Lastname' className='w-full h-8 rounded-xl p-6 mb-8 mt-4 border-2 border-indigo-800 focus:outline-none valid:border-lime-700' />
           </div>
           </section>
           <section className='flex flex-row m-5'>
           <div className='flex flex-col w-1/2 pl-3'>
           <label htmlFor="email" className='text-white pl-2'>Email</label>
           <input type="email" name="email" id="email" placeholder='Enter your email' className='w-full h-8 rounded-xl p-6 mb-8 mt-4 border-2 border-indigo-800 focus:outline-none valid:border-lime-700' />
           </div>
           </section>
           <section className='flex flex-row m-5'>
            <div className='flex flex-col w-1/2 pl-3'>
            <label htmlFor="subjects" className='text-white pl-2'>Your Subjects</label>
            <input type="text" name="subjects" id="subjects" placeholder='Enter your Subjects' className='w-full h-8 rounded-xl p-6 mb-8 mt-4 border-2 border-indigo-800 focus:outline-none valid:border-lime-700' />
            </div>
           </section>
           <section className='flex flex-row m-5'>
            <div className='flex flex-col w-1/2 pl-3'>
            <label htmlFor="experience" className='text-white pl-2'>Expreience of teaching and in your field</label>
            <input type="text" name="experience" id="experience" placeholder='Enter your Experience' className='w-full h-8 rounded-xl p-6 mb-8 mt-4 border-2 border-indigo-800 focus:outline-none valid:border-lime-700' />

            </div>
           </section>
           <section className='flex flex-row m-5'>
           <div className='flex flex-col w-1/2 pl-3'>
           <label htmlFor="profilePic" className='text-white pl-2'>Profile Pic</label>
           <input type="file" name="profilePic" id="profilePic" className='w-full h-12 rounded-xl mb-8 mt-4 border-2 pt-2 pl-2 border-indigo-800 focus:outline-none valid:border-lime-700 text-black bg-white' />
           </div>
           </section>
           <div className='w-full h-16 flex items-center justify-center mb-2'>
           <button
            className="p-3 bg-blue-700 text-white mr-4 w-24 rounded-lg hover:bg-indigo-900"
          >
            Submit
          </button>
           </div>
        </div>
    </form>
    <Footer/>
    </>
  )
}

export default InformationPageFaculty