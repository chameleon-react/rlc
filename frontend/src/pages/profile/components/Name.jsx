import React from 'react'

function Name({ data }) {
    return (
        <div className="name region flex justify-between items-center">
            <span className='capitalize text-3xl font-medium text-[#010315]'>{data.adsTitle?.split(' ')[0]}</span>
            <div className="w-[250px] h-[43px] rounded-[21px] border border-[#513968] flex items-center justify-between px-[10px] ">
                <div className="flag flex gap-2">
                    <img src="/image/home/flag/UAE.png" className='h-[29px] w-[29px] rounded-full' alt="" />
                    <span className='text-xl font-medium' >{data.nationality}</span>
                </div>
                <div className="Region flex gap-2">
                    <span className='flex-shrink-0 text- '>Region :</span>
                    <span className='flex-shrink-0  font-medium'>{data.region}</span>
                </div>
            </div>
        </div>
    )
}

export default Name