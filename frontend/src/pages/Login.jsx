    import React from 'react'

    export const Login = () => {
    return (
        <>
        <div className='w-screen h-sreen bg-black flex justify-center items-center'>
            <div className='w-2/4 h-2/4 outline-1 bg-orange-400 flex justify-center items-center flex-col'>
              <input type="email" name="email" id=""  className='mb-10 w-4/5 h-10'/>
              <input type="text" name="password" id="" />
            </div>
        </div>
        </>
    )
    }
