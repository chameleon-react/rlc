import Rating from '@mui/material/Rating'
import React from 'react'

function Review({ name,rating,review,title }) {
    return (
        <div className="w-[445px] h-[132px] relative text-white">
            <img src="/image/common/comment-box.png" className='h-full w-full' alt="" />
            <h3 className='absolute left-[84px] top-[10px] text-sm font-medium '>{name}</h3>
            <h3 className='absolute left-[84px] top-[35px] text-base font-medium'>{title}</h3>
            <p className='absolute left-[84px] top-[55px] w-[347px] h-[60px] overflow-y-scroll sc text-xs'>{review}</p>
            <div className="absolute top-[10px] right-[30px]">
                <Rating readOnly value={rating} />
            </div>
        </div>
    )
}

export default Review