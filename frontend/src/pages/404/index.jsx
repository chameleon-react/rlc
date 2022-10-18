import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate()
    return (
        <div className='h-screen w-full flex flex-col justify-center items-center bg-cover bg-no-repeat text-white gap-10' style={{ backgroundImage: 'url("/404/background.webp")' }}>
            <img src="/404/404.webp"  className='w-[261px] h-[162px]' alt="" />
            <div className="flex flex-col justify-center items-center gap-5">
                <h3 className='text-6xl font-bold'>Oops!</h3>
                <span className='text-xl lg:text-2xl'>The page you are looking doesn't exist.</span>
                <span className='text-sm lg:text-base'>Try to go back to the previous page or see our Help Center.</span>
            </div>
            <button className='bg-red-600 px-5 py-2 rounded-3xl' onClick={()=>navigate('/')}>GO TO HOME</button>

        </div>
    )
}

export default NotFound