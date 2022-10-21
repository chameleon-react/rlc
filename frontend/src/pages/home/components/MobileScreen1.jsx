import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../common/NavBar'

function MobileScreen1() {
  return (
    <div>
        <div className="w-full h-[40px] bg-white flex justify-center items-center gap-[60px] relative">
                <span>Want to get listed in our site?</span>
                <Link to={'/auth'} className='text-[#DC2626] cursor-pointer' > Sign Up Now</Link>
            </div>
            <div className="h-[calc(100vh-40px)] w-full bg-[#010315] relative overflow-hidden text-white">
                <NavBar/>
                <div className="h-full w-full flex relative">
                    <img src="/image/home/globe.png" className='inset-x-0 top-10 m-auto absolute w-80 h-80' alt="" />
                    <img src="/image/home/inner.png" className='inner absolute inset-x-0 top-3 m-auto  z-30 w-96 h-96' alt="" />
                </div>
            </div>
    </div>
  )
}

export default MobileScreen1