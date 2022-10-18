import React from 'react'
import { useNavigate } from 'react-router-dom'

function Modal({ setShowModal }) {
    const navigate = useNavigate()
    return (
        <div className="w-[364px] h-[188px] inset-0 fixed m-auto rounded-[10px] flex flex-col gap-[15px] justify-center items-center" style={{ background: 'transparent linear-gradient(116deg, #FFE5E5 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box' }}>

            <span className="material-symbols-outlined absolute top-[16px] right-[20px]" onClick={() => setShowModal(false)}>
                close
            </span>
            <span className='text-[25px] font-medium'>Create Your First Ads</span>
            <div className="h-[47px] w-[47px] border-red-600 border-[3px] rounded-[5px] flex justify-center items-center">
                <button className='text-4xl text-red-600' onClick={() => { navigate('/ads/new') }}>+</button>
            </div>
        </div>
    )
}

export default Modal