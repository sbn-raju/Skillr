import React from 'react'

const Articals = () => {
  return (
    <>
      <div className='w-4/5 h-40 rounded-xl border-2 border-gray-800 mt-10'>
        {/* title */}
        <div className='w-full h-1/4'>
            <h1 className='w-full font-serif font-bold text-3xl border-b-2 border-b-black pl-4'>Title</h1>
        </div>
        <div>
            <p className='font-medium h-auto pl-4'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur aspernatur explicabo consequuntur ullam suscipit quidem illo voluptate omnis, culpa earum corrupti quia, quo eaque ex harum. Perspiciatis, voluptatem aperiam. Cupiditate nisi dolorem nulla! Distinctio.
            </p>
        </div>
        <button className='p-3 bg-blue-700 text-white ml-4 w-24 rounded-lg hover:bg-indigo-900 mt-2'>View</button>
      </div>
    </>
  )
}

export default Articals