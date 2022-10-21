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
                <NavBar />
                <div className="h-full w-full flex relative -top-20">
                    <img alt='' src="/image/home/globe.png" className='m-auto inset-0  absolute w-80 h-80' />
                    <img alt='' src="/image/home/inner.png" className='inner inset-0  absolute  m-auto  z-30 w-96 h-96' />
                    
                    <Link to={'/filter'}>
                        <img src="/image/home/flag/Japan.png" alt='' className='h-10 w-10 absolute m-auto inset-0 z-50 top-60 -left-72' />
                    </Link>
                    <Link to={'/filter'}>
                        <img src="/image/home/flag/spain.png" alt='' className='h-10 w-10 absolute m-auto inset-0 z-50 top-32 left-[-22rem]' />
                    </Link>
                    <Link to={'/filter'}>
                        <img src="/image/home/flag/srilanka.png" alt='' className='h-10 w-10 absolute m-auto inset-0 z-50 -top-32 left-[-22rem]' />
                    </Link>
                    <Link to={'/filter'}>
                        <img src="/image/home/flag/UAE.png" alt='' className='h-10 w-10 absolute m-auto inset-0 z-50 -top-60 -left-72' />
                    </Link>
                    <Link to={'/filter'}>
                        <img src="/image/home/flag/malaysia.png" alt='' className='h-10 w-10 absolute m-auto inset-0 z-50 -top-60 left-72' />
                    </Link>
                    <Link to={'/filter'}>
                        <img src="/image/home/flag/UK.png" alt='' className='h-10 w-10 absolute m-auto inset-0 z-50 -top-32 left-[22rem]' />
                    </Link>
                    <Link to={'/filter'}>
                        <img src="/image/home/flag/bahrain.png" alt='' className='h-10 w-10 absolute m-auto inset-0 z-50 top-32 left-[22rem]' />
                    </Link>








                </div>
            </div>
        </div>
    )
}

export default MobileScreen1