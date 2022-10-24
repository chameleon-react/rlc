import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import axios from 'axios'
import backendIP from '../../backendIP'

function NavBar() {
  const navigate = useNavigate()
  const [isOpen, setOpen] = useState(false)
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`${backendIP}ads/viewall`).then(res => {
      setData(res.data)
    })
  }, [])
  const [adsTitle, setAdsTitle] = useState('')
  return (
    <>
      <div className='h-20 w-full overflow-hidden hidden lg:flex justify-between items-center px-24 text-white sticky top-0 z-50 bg-[#010315]' >
        <ul className='flex gap-6    text-lg'>
          <li className='cursor-pointer'>
            <NavLink to={'/'}>
              HOME
            </NavLink>
          </li>
          <li className='cursor-pointer'>
            <NavLink to={'/static/about'}>
              ABOUT
            </NavLink>
          </li>
          <li className='cursor-pointer'>
            <NavLink to={'/static/faq'}>
              FAQ
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-4 h-12 items-center">


          <>
            <input type="text" className='h-8 w-52 bg-transparent border rounded-3xl outline-none pl-3 placeholder:text-white placeholder:text-xs flex items-center capitalize' onChange={e => setAdsTitle(e.target.value)} placeholder='Search' />

            <button className='px-3 h-8  bg-[#FB0202] rounded-3xl hover:px-4 hover:h-10 duration-200 hover:text-lg'
              onClick={() => {
                const profile = data.find(e => e.adsTitle.toLowerCase()?.includes(adsTitle.toLowerCase()))
                if (profile) {
                  navigate(`/profile/${profile?.id}`)
                } else window.alert('Profile not found')
              }}>Search</button>

            {/* <datalist id='ads'>
              {data.map(e => <option value={e.adsTitle} key={e.id} className='bg-black capitalize'>{e.adsTitle}</option>)}
            </datalist> */}
          </>

          {/* <select  className='h-8 w-52 bg-transparent border rounded-3xl outline-none pl-3 placeholder:text-white placeholder:text-xs flex items-center capitalize' onChange={e=>navigate(`/profile/${e.target.value}`)} placeholder='Search'>
              {data.map(e=><option value={e.id} key={e.id} className='bg-black capitalize'>{e.adsTitle}</option>)}
          </select> */}



          <NavLink to={'/auth'}>
            <button className='w-24 h-8  rounded-3xl bg-[#006EF8] hover:w-[6.5rem] hover:h-10 duration-200 hover:text-lg'>Log In</button>
          </NavLink>
          <NavLink to={'/auth'}>
            <button className='w-40 h-8  bg-[#FB0202] rounded-3xl hover:w-[10.5rem] hover:h-10 duration-200 hover:text-lg'>Place Ads</button>
          </NavLink>
        </div>
      </div>

      <div className="flex lg:hidden flex-col items-end bg-[#010315] z-50 relative">
        <Hamburger color='#fff' toggled={isOpen} toggle={setOpen} />
        {
          isOpen && <div className="w-full flex flex-col text-white items-end mr-3 gap-3 duration-200 py-3">
            <NavLink to={'/'} className='cursor-pointer'>HOME</NavLink>
            <NavLink to={'/static/about'} className='cursor-pointer'>ABOUT</NavLink>
            <NavLink to={'/static/faq'} className='cursor-pointer'>FAQ</NavLink>
            <NavLink to='/auth'>
              <button >Log In</button>
            </NavLink>
            <NavLink to={'/auth'}>
              <button >Place Ads</button>
            </NavLink>
          </div>
        }
      </div>

    </>
  )
}

export default NavBar