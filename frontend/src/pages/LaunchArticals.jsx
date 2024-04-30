import React from 'react'
import LoginNavbar from '../components/LoginNavbar'
import Footer from '../components/Footer'


const LaunchArticals = () => {
  return (
    <>
    <LoginNavbar/>
    <form className='w-full h-full pt-10 pb-10 bg-black flex justify-center items-center'>
        <div className='w-1/2 h-full border-2 border-blue-600 rounded-2xl'>
        <h1 className='text-blue-600 text-3xl pt-5 pl-7'>Write articals</h1>

        <section className='flex flex-row m-5 pr-4'>
            <div className='flex flex-col w-full pl-3'>
            <label htmlFor="artical_title" className='text-white pl-2'>Title</label>
            <input type="text" name="artical_title" id="artical_title" placeholder='Enter your Artical Title' className='w-full h-8 rounded-xl p-6 mb-8 mt-4 border-2 border-indigo-800 focus:outline-none valid:border-lime-700' />
            </div>
        </section>
        <section className='flex flex-row m-5 pr-4'>
            <div className='flex flex-col w-full pl-3'>
            <label htmlFor="artical_des" className='text-white pl-2'>Content</label>
            <textarea type="text" name="artical_des" id="artical_des" placeholder='Start writing your Description' className='w-full h-auto rounded-xl p-6 mb-8 mt-4 border-2 border-indigo-800 focus:outline-none valid:border-lime-700 resize-none ' rows='10' cols="10" />
        
            </div>
        </section>
        <div className='w-full h-16 flex items-center justify-center mb-2'>
        <button
            className="p-3 bg-blue-700 text-white mr-4 w-30 rounded-lg hover:bg-indigo-900"
        >
            Publish an Artical
        </button>
        </div>
        </div>
    </form>
    <Footer/>
    </>
  )
}

export default LaunchArticals