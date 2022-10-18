import React from 'react'

function QNA({question,answer,profilePhoto,username}) {
    return (
        <div className="max-w-[546px] h-[186px] flex-shrink-0 relative">
                <img src="/image/common/qna.png" className='w-full h-full' alt="" />
                <span className='absolute top-[19px] left-[84px] text-sm font-medium'>{username}</span>
                <p className='absolute top-[40px] left-[84px] text-xs '>{question}</p>
                <span className='absolute top-[114px] left-[131px] text-sm font-medium'>Username</span>
                <p className='absolute top-[135px] left-[131px] text-xs '>{answer}</p>
                <div className="profile photo absolute h-12 w-12 rounded-full  -right-5 top-[80px] overflow-hidden">
                    <img src={profilePhoto} alt="profile photo" className='h-12 w-12'/>
                </div>
        </div>
    )
}

export default QNA