import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setUsername, setPassword, setEmail, setIsLogin } from '../../../redux/slice/userSlice'
import validator from 'validator'
import axios from 'axios'
import backendIP from '../../../backendIP'

function UserRegister() {
    const dispatch = useDispatch()
    const { username, password, email } = useSelector(state => state.user)
    const navigate = useNavigate()
    const [checked, setChecked] = useState(false)

    const signup = () => {
        if(checked){
        if (username) {
            if (validator.isEmail(email)) {
                if (password) {
                    axios.post(`${backendIP}user`, { username, password, email, statusCode: 3 }).then(res => {
                        if (res.data) {
                            dispatch(setIsLogin(true))
                            navigate('/')
                        } else {
                            window.alert('Username already exist')
                        }
                    })
                } else window.alert('Please Provide a valid Password')
            } else window.alert('Please Provide a Valid email')

        } else window.alert('Please Provide  a valid username')
    } else window.alert('Please accept T and C')
    }

    return (
        <div className='min-h-screen w-full flex flex-col lg:flex-row bg-no-repeat bg-cover bg-center text-white' style={{ backgroundImage: 'url("/image/auth/banner.png")' }}>
            <div className="min-h-screen w-full lg:w-1/2 backdrop-blur-2xl relative" >
                <div className="signup w-[70%] flex justify-center">

                    <div className="form flex flex-col mt-10  w-[70%]">
                        <img src="/image/common/logo-rounded.png" className='h-48 w-48' alt="" />

                        <h1 className='text-2xl mt-10'>Register now, it's free!</h1>

                        <div className="username mt-5">
                            <label htmlFor="username">Username</label>
                            <input value={username} onChange={e => { dispatch(setUsername(e.target.value)) }} id='username' type="text" className='h-12 w-[75vw] lg:w-full rounded-lg pl-5 text-black outline-none flex-shrink-0' />
                        </div>

                        <div className="Email mt-5">
                            <label htmlFor="Email">Email</label>
                            <input value={email} onChange={e => dispatch(setEmail(e.target.value))} id='Email' type="Email" className='h-12 w-[75vw] lg:w-full rounded-lg pl-5 text-black outline-none' />
                        </div>

                        <div className="Password mt-5">
                            <label htmlFor="Password">Password</label>
                            <input value={password} onChange={e => { dispatch(setPassword(e.target.value)) }} id='Password' type="Password" className='h-12 w-[75vw] lg:w-full rounded-lg pl-5 text-black outline-none' />
                        </div>

                        <div className="flex gap-5 mt-5">
                            <input type="checkbox" onClick={e=>setChecked(e.target.checked)} />
                            <span className='cursor-pointer flex-shrink-0'>
                                I accept the
                                <span className='hover:text-[#B74DD9]' onClick={() => { navigate('/static/TermsAndConditions') }}>
                                    &nbsp; Terms and Conditions &nbsp;
                                </span>
                                of use
                            </span>
                        </div>

                        <div className="sign up flex gap-10 mt-5 items-center">
                            <button className={`${checked? 'bg-red-800 border-red-800' : 'bg-gray-600 border-gray-600'} h-12 w-28  border  rounded-xl text-lg flex-shrink-0`} onClick={signup}>Register</button>
                            <span className='text-lg flex-shrink-0' onClick={() => navigate('/auth')}>Already a user? Sign In</span>
                        </div>

                        <div className="mt-5 ">
                            <span className='text-lg hidden lg:inline'>Didn't receive confirmation email?</span>
                        </div>

                        <div className="mt-5 ">
                            <span className='text-lg' onClick={() => navigate('/auth/register/advertiser')}>Go to new Advertiser Registration</span>
                        </div>

                    </div>

                </div>
                <div className="absolute top-3 right-0 flex flex-col items-center gap-3">
                    <img src="/image/auth/men.png" className='h-12 w-8' alt="" />
                    <span>User Register</span>
                </div>

            </div>
            <RightSide/>
        </div>
    )
}

export default UserRegister


const RightSide = () =>{
    return(
        <div className="min-h-full w-full  lg:w-1/2 items-center justify-center hidden lg:flex">

                <div className="flex w-full h-3/4 flex-col mx-20 justify-center items-center">
                    <div className="flex flex-col gap-3 text-lg">
                        <span>We know you want to!</span>
                    </div>
                    <div className="w- h-full p-5 mt-10 backdrop-blur-2xl flex divide-x rounded-2xl">
                        <img src="/image/auth/userRegister.png" className='w-full h-64' alt="" />
                    </div>

                </div>

            </div>
    )
}