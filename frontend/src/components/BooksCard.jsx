        import React from 'react'
        import bookImage from '../assets/Java_Book.jpg'

        const BooksCard = () => {
        return (
            <> 
            <div className='w-96 h-96 rounded-2xl  m-4 bg-slate-300 hover:shadow-xl hover:shadow-cyan-500/50'>
                    <div className='w-full h-1/2 p-2'>
                    <img src={bookImage} alt="" className='w-full h-full rounded-xl'/>
                    </div>
                    <div className='w-full h-9 pl-4 pr-4'>
                    <h2 className='font-sans font-bold text-2xl'>Title</h2>
                    </div>
                    <div className='w-full h-20 pl-4 pr-4'>
                    <p className='font-sans font-semibold'>Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab modi illum, sed beatae delectus, quibusdam labore itaque</p>
                    </div>
                    <div className='w-full h-9 pl-4 pr-4'>
                        <button className='p-2 bg-orange-600 rounded-lg w-30 h-10 mr-6 font-semibold text-white'>Book Details</button>
                        <button className='p-2 bg-orange-600 rounded-lg w-30 h-10 font-semibold text-white'>Buy Now</button>
                    </div>
                </div>
            </>
        )
        }

        export default BooksCard