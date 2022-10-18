import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className='h-20 w-full flex justify-between px-2 lg:px-16 items-center text-white'>
            <div className="left gap-10 flex">
                <Link to={'/'} >Home</Link>
                <Link to={'/static/about'} >About Us</Link>
            </div>
            <div className="right flex gap-10 items-center">
                <input type="text" className='border border-white h-10 rounded-3xl bg-transparent outline-none pl-5 w-72 pr-12 hidden lg:inline-block' placeholder='search' />
                <Link className='px-5 py-1 border border-red-600 rounded-3xl hover:bg-red-600 duration-500' to={'/auth'} >Login</Link>
                <Link className='px-5 py-1 border border-red-600 rounded-3xl hover:bg-red-600 duration-500' to={'/auth'}>Place Your Ad</Link>
                <Link to={'/static/FAQ'} className='hidden lg:inline-block'>FAQ</Link>
            </div>
        </div>
    )
}

export default NavBar