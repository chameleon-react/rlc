import React from 'react'

import {useNavigate} from 'react-router-dom'

function SignUpBanner() {
  const navigate = useNavigate()
  return (
    <div className='h-16  w-full flex justify-center items-center gap-10'>
        <span className='text-lg font-medium text-black p-5'>Want to get listed in our site?</span>
        <button className='text-xl font-medium text-red-700 p-5' onClick={()=>navigate('/auth')}>Sign Up Now</button>
    </div>
  )
}

export default SignUpBanner