import Rating from '@mui/material/Rating'
import React, { useState } from 'react'
import ReviewBox from './ReviewBox'

function Activity({ setIsLogin,id }) {
    const [reviewModal, setReviewModal] = useState(false)
    return (
        <div className="w-full lg:w-[532px] h-[252px] bg-white rounded-3xl flex flex-col items-center mt-[10px]">
            <h1 className='text-xl font-medium'>Reviews</h1>
            <div className="w-[230px] h-[36px] rounded-2xl bg-[#513968] flex justify-center items-center text-white gap-[5px]">
                <Rating className='text-white rating' value={2} readOnly />
                <span className='text-xs font-light'>{2} out of 5</span>
                <span className="material-symbols-outlined cursor-pointer " onClick={() => { setReviewModal(true) }}>add_comment</span>
            </div>
            <span className='text-xs'>40 Customer Review</span>
            <div className="mt-[15px] flex flex-col items-center gap-[13px]">
            <div className="w-full lg:w-[459px] h-[20px] flex items-center justify-between">
                    <span className='text-base font-medium'>Service</span>
                    <div className="w-[200px] lg:w-[313px] h-full bg-[#FAC1EA] rounded-[20px] flex justify-between items-center overflow-hidden">
                        <div className="h-full w-[50%] rounded-[20px] bg-[#513968]"></div>
                        <span className='text-white'>50%</span>
                    </div>
                </div>
                <div className="w-full lg:w-[459px] h-[20px] flex items-center justify-between">
                    <span className='text-base font-medium'>Communication</span>
                    <div className="w-[200px] lg:w-[313px] h-full bg-[#FAC1EA] rounded-[20px] flex justify-between items-center overflow-hidden">
                        <div className="h-full w-[56%] rounded-[20px] bg-[#513968]"></div>
                        <span className='text-white'>56%</span>
                    </div>
                </div>
                <div className="w-full lg:w-[459px] h-[20px] flex items-center justify-between">
                    <span className='text-base font-medium'>Availabilility</span>
                    <div className="w-[200px] lg:w-[313px] h-full bg-[#FAC1EA] rounded-[20px] flex justify-between items-center overflow-hidden">
                        <div className="h-full w-[68%] rounded-[20px] bg-[#513968]"></div>
                        <span className='text-white'>68%</span>
                    </div>
                </div>
                <div className="w-full lg:w-[459px] h-[20px] flex items-center justify-between">
                    <span className='text-base font-medium'>Overall</span>
                    <div className="w-[200px] lg:w-[313px] h-full bg-[#FAC1EA] rounded-[20px] flex justify-between items-center overflow-hidden">
                        <div className="h-full w-[45%] rounded-[20px] bg-[#513968]"></div>
                        <span className='text-white'>45%</span>
                    </div>
                </div>
            </div>
            {
                reviewModal && <ReviewBox id={id} setReviewModal={setReviewModal}/>
            }
            
        </div>
    )
}

export default Activity