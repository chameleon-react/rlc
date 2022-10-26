import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { setUsername,setPassword,setEmail } from '../../redux/slice/userSlice'
import backendIP from '../../backendIP'
import axios from 'axios'
import { setIsLogin as adminLogin } from '../../redux/slice/adminSlice'
import { setIsLogin as userLogin } from '../../redux/slice/userSlice'
function Auth() {
  const dispatch = useDispatch()
  const {email,password} = useSelector(state=>state.user)
  const navigate = useNavigate()

  const login = ()=>{

      if (email) {
          if (password) {
              axios.post(`${backendIP}user/login`,{email,password}).then(res=>{
                  if(res.data){
                      if(res.data.statusCode === 1){
                          dispatch(userLogin(true))
                          dispatch(setUsername(res.data.username))
                          navigate('/dashboard')
                      }else if(res.data.statusCode === 2){
                          dispatch(adminLogin(true))
                          dispatch(setUsername(res.data.username))
                          navigate('/dashboard')
                      }else if(res.data.statusCode === 3){
                        dispatch(userLogin(true))
                        dispatch(setUsername(res.data.username))
                        window.history.back()
                      }
                  }else window.alert("Please Check your email and Password")
              })
          } else window.alert('Please Provide a Valid Password')
      } else window.alert('Please Provide a Valid Email')
  }

  useEffect(() => {
    dispatch(adminLogin(false))
    dispatch(userLogin(false))
    // eslint-disable-next-line
  }, [])
  



  return (
    <div className='h-screen w-full flex flex-col lg:flex-row bg-no-repeat bg-cover bg-center text-white pb-20' style={{ backgroundImage: 'url("/image/auth/banner.webp")' }}>
      <div className="h-1/2 lg:h-full w-full lg:w-1/2 backdrop-blur-2xl" style={{ backgroundImage: '' }}>
        <div className="signup w-[70%] flex justify-center">

          <div className="form flex flex-col w-[70%] mt-10">

            <img src="/image/common/logo-rounded.png" className='h-48 w-48 hidden lg:flex' alt="" /> 
            <h1 className='text-2xl mt-10'>Sign In</h1>

            <div className="username mt-5">
              <label htmlFor="username">Email Address</label>
              <input value={email} onChange={e=>{dispatch(setEmail(e.target.value))}} id='username' type={'email'} className='h-12 w-[75vw] lg:w-full rounded-lg pl-5 text-black outline-none' />
            </div>

            <div className="Password mt-5">
              <label htmlFor="Password">Password</label>
              <input value={password} onChange={e=>{dispatch(setPassword(e.target.value))}} id='Password' type="Password" className='h-12 w-[75vw] lg:w-full rounded-lg pl-5 text-black outline-none' />
            </div>

            <div className="flex gap-5 mt-5">
              <input type="checkbox" />
              Remember me
            </div>

            <div className="sign up flex gap-10 mt-10 items-center">
              <button className='h-12 w-28 bg-red-800 border border-red-800 rounded-xl text-lg flex-shrink-0' onClick={login}>Sign In</button>
              <span className='text-lg flex-shrink-0'>Forgot Your Password?</span>
            </div>

            <div className="mt-10 ">
              <span className='text-lg hidden lg:inline'>Didn't receive confirmation email?</span>
            </div>

          </div>

        </div>
      </div>
      <RightSide/>
      
    </div>
  )
}

export default Auth


const RightSide = () =>{
  const navigate = useNavigate()
  return(
    <div className=" h-1/2 lg:h-full w-full lg:w-1/2 flex items-center justify-center">

        <div className="flex w-full h-1/2 flex-col mx-20">
          <div className="hidden lg:flex flex-col gap-3 text-lg">
            <span className=''>Don't have an account yet?</span>
            <span className=''>Register now - it's free!</span>
          </div>

          <div className="lg:w-full h-72 mt-10 backdrop-blur-2xl flex divide-x rounded-2xl justify-center">
            
            <div className="h-full w-48 lg:w-1/2 flex flex-col items-center justify-center gap-8">
              <span className='text-lg'>User</span>
              <img src="/image/auth/men.png" className='w-12 h-16' alt="" />
              <div className="flex flex-col items-center">
                <span>Keep update on</span>
                <span>activity in your area!</span>
              </div>
              <button className='h-10 w-28 bg-white border text-red-700 rounded-xl text-lg' onClick={()=>navigate('/auth/register/user')}>Register</button>
            </div>

            <div className="h-full w-48 lg:w-1/2 flex flex-col items-center justify-center gap-8">
              <span className='text-lg'>Advertiser</span>
              <img src="/image/auth/women.png" className='w-14 h-14' alt="" />
              <div className="flex flex-col items-center">
                <span>Get listed for free </span>
                <span>today!</span>
              </div>
              <button className='h-10 w-28 bg-white border text-red-700 rounded-xl text-lg' onClick={()=>navigate('/auth/register/advertiser')}>Register</button>
            </div>
            
          </div>
        </div>
      </div>
  )
}