import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Hamburger from 'hamburger-react'

function NavBar() {
  const navigate = useNavigate()
  const [isOpen, setOpen] = useState(false)
  // style={{backgroundImage:'linear-gradient(to bottom, #1f181d, #331825, #4a1627, #5f1121, #701013)'}}
  return (
    <>
      <div className='h-20 w-full overflow-hidden hidden lg:flex justify-between items-center px-24 text-white sticky top-0 z-50 bg-[#010315]' >
        <ul className='flex gap-6    text-lg'>
          <li className='cursor-pointer' onClick={() => navigate('/')}>HOME</li>
          <li className='cursor-pointer' onClick={() => navigate('/static/about')}>ABOUT</li>
          <li className='cursor-pointer' onClick={() => navigate('/static/faq')}>FAQ</li>
        </ul>
        <div className="flex gap-4 h-12 items-center">
          <input type="text" className='h-8 w-52 bg-transparent border rounded-3xl outline-none pl-3 placeholder:text-white placeholder:text-xs flex items-center' placeholder='Search' />
          <button className='w-24 h-8  rounded-3xl bg-[#006EF8] hover:w-[6.5rem] hover:h-10 duration-200 hover:text-lg' onClick={() => navigate('/auth')}>Log In</button>
          <button className='w-40 h-8  bg-[#FB0202] rounded-3xl hover:w-[10.5rem] hover:h-10 duration-200 hover:text-lg' onClick={() => navigate('/auth')}>Place Ads</button>
        </div>
      </div>

      <div className="flex lg:hidden flex-col items-end bg-[#010315] z-50 relative">
        <Hamburger color='#fff' toggled={isOpen} toggle={setOpen} />
        {
          isOpen && <div className="w-full flex flex-col text-white items-end mr-3 gap-3 duration-200 py-3">
            <h3 className='cursor-pointer' onClick={() => navigate('/')}>HOME</h3>
            <h3 className='cursor-pointer' onClick={() => navigate('/static/about')}>ABOUT</h3>
            <h3 className='cursor-pointer' onClick={() => navigate('/static/faq')}>FAQ</h3>
            <button className='' onClick={() => navigate('/auth')}>Log In</button>
            <button  onClick={() => navigate('/auth')}>Place Ads</button>
          </div>
        }
      </div>

    </>
  )
}

export default NavBar