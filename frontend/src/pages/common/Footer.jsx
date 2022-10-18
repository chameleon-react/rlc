import React from 'react'

function Footer() {
  return (
    <div className="footer  px-[100px] bg-[#17191E] text-white pt-3 flex flex-col gap-3 pb-5">
        <div className="w-full h-[38px] flex items-center justify-between">
            <span className='text-sm'>Want to receive the latest listings? Subscribe to our weekly newsletter!</span>
            <div className="w-[276px] h-full rounded-3xl bg-white overflow-hidden flex items-center">
              <input className='outline-none h-full w-2/3 text-black pl-5 placeholder:font-light  placeholder:text-xs' placeholder='yourmail@gmail.com' type="text" />
              <button className='h-full w-1/3 bg-[#FB0202]'>Sign Up</button>
            </div>
        </div>
        <div className="flex divide-x flex-wrap text-[#FB0202]">
         <button className='pr-[15px]'>Forum</button>
         <button className='px-[15px]'>About</button>
         <button className='px-[15px]'>Blog</button>
         <button className='px-[15px]'>Advertise Escort Services</button>
         <button className='px-[15px]'>Help for Advertisers</button>
         <button className='pl-[15px]'>Guide to seeing an escort</button>
        </div>
        <p className='text-xs'>This website only allows adult individuals to advertise their time and companionship to other adult individuals. We do not provide a booking service nor arrange meetings. Any price indicated relates to time only and nothing else. Any service offered or whatever else that may occur is the choice of consenting adults and a private matter between them. In some countries, individuals do not legally have the choice to decide this; it is your responsibility to comply with local laws.</p>
        <div className="flex gap-[18px] text-sm text-[#FB0202]">
            <span>© 2022 Red Light Club</span>
            <button>Terms and Conditions</button>
        </div>
    </div>
  )
}

export default Footer