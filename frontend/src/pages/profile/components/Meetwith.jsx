import React from 'react'

function Meetwith() {
    return (
        <div className="mt-3 w-full">
            <span className='text-xl text-[#010315] font-medium'>I meet with</span>
            <div className="mt-[10px] flex gap-[35px]">
                <img className='h-[65px]' src="/image/profile/icon/men.png" alt="" />
                <img className='h-[65px]' src="/image/profile/icon/women.png" alt="" />
                <img className='h-[65px]' src="/image/profile/icon/couples-not.png" alt="" />
                <img className='h-[65px]' src="/image/profile/icon/group-not.png" alt="" />
            </div>
        </div>
    )
}

export default Meetwith