import React from 'react'
import Footer from '../components/Footer'
import LoginNavbar from '../components/LoginNavbar'

const LaunchCourseForms = () => {
return (
    <>
    <LoginNavbar/>
    <form className='w-full h-full pt-10 pb-10 bg-black flex justify-center items-center'>
        <div className='w-1/2 h-full border-2 border-blue-600 rounded-2xl'>
        <h1 className='text-blue-600 text-3xl pt-5 pl-7'>Fill the details to launch the Course</h1>
        <section className='flex flex-row m-5 pr-4'>
            <div className='flex flex-col w-full pl-3'>
            <label htmlFor="title" className='text-white pl-2'>Title</label>
            <input type="text" name="title" id="title" placeholder='Enter your Title' className='w-full h-8 rounded-xl p-6 mb-8 mt-4 border-2 border-indigo-800 focus:outline-none valid:border-lime-700' />
            </div>
        </section>
        <section className='flex flex-row m-5 pr-4'>
            <div className='flex flex-col w-full pl-3'>
            <label htmlFor="courseDes" className='text-white pl-2'>Course Description</label>
            <textarea type="text" name="courseDes" id="courseDes" placeholder='Enter your Course Description' className='w-full h-auto rounded-xl p-6 mb-8 mt-4 border-2 border-indigo-800 focus:outline-none valid:border-lime-700 resize-none ' rows='10' cols="10" />
            </div>
        </section>
        <section className='flex flex-row m-5 pr-4'>
        <div className='flex flex-col w-full pl-3'>
        <label htmlFor="thubmnail" className='text-white pl-2'>Thumbnail</label>
        <input type="file" name="thubmnail" id="thubmnail" className='w-full h-12 rounded-xl mb-8 mt-4 border-2 pt-2 pl-2 border-indigo-800 focus:outline-none valid:border-lime-700 text-black bg-white' />
        </div>
        <div className='flex flex-col w-full pl-3'>
        <label htmlFor="courseImage" className='text-white pl-2'>Course Image</label>
        <input type="file" name="courseImage" id="courseImage" className='w-full h-12 rounded-xl mb-8 mt-4 border-2 pt-2 pl-2 border-indigo-800 focus:outline-none valid:border-lime-700 text-black bg-white' />
        </div>
        </section>
        <section className='flex flex-row m-5 pr-4'>
           <div className='flex flex-col w-full pl-3'>
            <label htmlFor="courseFeatureOne" className='text-white pl-2'>Feature One</label>
            <input type="text" name="courseFeatureOne" id="courseFeatureOne" placeholder='Enter course Feature' className='w-full h-8 rounded-xl p-6 mb-8 mt-4 border-2 border-indigo-800 focus:outline-none valid:border-lime-700' />
            </div>
            <div className='flex flex-col w-full pl-3'>
            <label htmlFor="courseFeatureTwo" className='text-white pl-2'>Feature Two</label>
            <input type="text" name="courseFeatureTwo" id="courseFeatureTwo" placeholder='Enter course Feature' className='w-full h-8 rounded-xl p-6 mb-8 mt-4 border-2 border-indigo-800 focus:outline-none valid:border-lime-700' />
            </div>
            <div className='flex flex-col w-full pl-3'>
            <label htmlFor="courseFeatureThree" className='text-white pl-2'>Feature Three</label>
            <input type="text" name="courseFeatureThree" id="courseFeatureThree" placeholder='Enter course Feature' className='w-full h-8 rounded-xl p-6 mb-8 mt-4 border-2 border-indigo-800 focus:outline-none valid:border-lime-700' />
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

export default LaunchCourseForms