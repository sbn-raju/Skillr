import React from 'react'
import bookImage from "../assets/Java_Book.jpg"

const StudentBooksCard = () => {
  return (
    <> 
            <div className='w-96 h-96 rounded-2xl  m-4 bg-slate-900'>
                    <div className='w-full h-1/2 p-2'>
                    <img src={bookImage} alt="" className='w-full h-full rounded-xl'/>
                    </div>
                    <div className='w-full h-9 pl-4 pr-4'>
                    <h2 className='font-sans font-bold text-2xl text-white'>Title</h2>
                    </div>
                    <div className='w-full h-20 pl-4 pr-4'>
                    <p className='font-sans font-semibold  text-white'>Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab modi illum, sed beatae delectus, quibusdam labore itaque</p>
                    </div>
                    <div className='w-full h-9 pl-4 pr-4'>
                        <button className='p-2 bg-blue-600 rounded-lg w-30 h-10 mr-6 font-semibold text-white'>Book Details</button>
                        <button className='p-2 bg-blue-600 rounded-lg w-30 h-10 mr-6 font-semibold text-white'>Continue Reading</button>
                    </div>
                </div>
            </>
  )
}

export default StudentBooksCard