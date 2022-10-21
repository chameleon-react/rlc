import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../common/NavBar'

function MobileScreen1() {
    return (
        <div>
            <div className="w-full h-[40px] bg-white flex justify-center items-center gap-[60px] relative">
                <span>Want to get listed in our site?</span>
                <Link to={'/auth'} className='text-[#DC2626] cursor-pointer' > Sign Up Now</Link>
            </div>
            <div className="h-[calc(100vh-40px)] w-full bg-[#010315] relative overflow-hidden text-white">
                <NavBar />
                <div className="h-full w-full flex relative -top-20">
                    <img alt='' src="/image/home/globe.png" className='m-auto inset-0  absolute w-80 h-80' />
                    <img alt='' src="/image/home/inner.png" className='inner inset-0  absolute  m-auto  z-30 w-96 h-96' />


                    <div style={{animationDuration:'2s'}} className="mobileflag rounded-full  absolute m-auto inset-0 z-50 overflow-hidden top-60 -left-72 h-10 w-10" >
                        <img alt='' className='' src="/image/home/flag/Japan.png" />
                    </div>


                    <div style={{animationDuration:'2.5s'}} className="mobileflag rounded-full  absolute m-auto inset-0 z-50 overflow-hidden top-32 left-[-22rem] h-10 w-10" >
                        <img alt='' className='' src="/image/home/flag/spain.png" />
                    </div>


                    <div style={{animationDuration:'3s'}} className="mobileflag rounded-full  absolute m-auto inset-0 z-50 overflow-hidden -top-32 left-[-22rem] h-10 w-10" >
                        <img alt='' className='' src="/image/home/flag/srilanka.png" />
                    </div>


                    <div style={{animationDuration:'3.5s'}} className="mobileflag rounded-full  absolute m-auto inset-0 z-50 overflow-hidden -top-60 -left-72 h-10 w-10" >
                        <img alt='' className='' src="/image/home/flag/UAE.png" />
                    </div>


                    <div style={{animationDuration:'4s'}} className="mobileflag rounded-full  absolute m-auto inset-0 z-50 overflow-hidden -top-60 left-72 h-10 w-10" >
                        <img alt='' className='' src="/image/home/flag/malaysia.png" />
                    </div>


                    <div style={{animationDuration:'4.5s'}} className="mobileflag rounded-full  absolute m-auto inset-0 z-50 overflow-hidden -top-32 left-[22rem] h-10 w-10" >
                        <img alt='' className='' src="/image/home/flag/UK.png" />
                    </div>

                    
                   <div style={{animationDuration:'5s'}} className='mobileflag rounded-full  absolute m-auto inset-0 z-50 top-32 left-[22rem] h-10 w-10' >
                        <img alt='' className='' src="/image/home/flag/bahrain.png" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MobileScreen1