import React from 'react'
import { useNavigate } from 'react-router-dom'
function LoginModal({setIsLogin}) {
    const navigate = useNavigate()
    return (
        <div className="fixed h-[80px] w-96 border inset-0 m-auto border-[#513968] bg-white rounded-xl divide-y z-50">
            <div className="w-full h-[60%] flex items-center pl-3">
                <p>First you need to login</p>
            </div>
            <div className="w-full h-[40%] flex items-center px-10 justify-between">
                <button className='text-blue-500 font-medium' onClick={() => navigate('/auth')}>Login</button>
                <button className='text-blue-500 font-medium' onClick={() => setIsLogin(true)}>Close</button>
            </div>
        </div>
    )
}

export default LoginModal