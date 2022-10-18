import React from 'react'
import Appearance from './about/Appearance'
import InCall from './about/InCall'
import OutCall from './about/OutCall'

function About({ data }) {
  return (
    <div className="mt-3 flex gap-[10px] lg:gap-[30px]">
      <div className="w-[227px]">
        <span className='text-xl text-[#010315] font-medium'>More About Me</span>
        <Appearance data={data} />
      </div>
      <div className="w-[141px]">
        <span className='text-xl text-[#010315] font-medium'>Outcalls </span>
        <OutCall data={data} />
      </div>
      <div className="w-[141px]">
        <span className='text-xl text-[#010315] font-medium'>Incalls </span>
        <InCall data={data} />
      </div>
    </div>
  )
}

export default About