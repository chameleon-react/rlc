import axios from 'axios'
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import backendIP from '../../../backendIP'

function ReportProfile({ setIsLogin, id }) {
    const [report, setReport] = useState(false)
    const [reason, setReason] = useState('')
    const {username,isLogin} = useSelector(state=>state.user)
    const submit = () =>{
        if(isLogin){
            axios.post(`${backendIP}report` ,{adsId:id,username,reason}).then(res=>{
                if(res.data){
                    setReport(false)
                    window.alert("You are Reported this profile")
                }else window.alert("Somthing is error")
            })
        } else setIsLogin(false)
    }
    return (
        <div className="absolute bottom-3 right-7 flex gap-1 text-[#513968] ">
            <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#513968]' height="24" width="24"><path d="M12 16.7q.35 0 .575-.225.225-.225.225-.575t-.225-.575Q12.35 15.1 12 15.1t-.575.225q-.225.225-.225.575t.225.575q.225.225.575.225Zm-.75-3.475h1.5V7.2h-1.5ZM8.45 20.5 3.5 15.55v-7.1L8.45 3.5h7.1l4.95 4.95v7.1l-4.95 4.95ZM9.1 19h5.8l4.1-4.1V9.1L14.9 5H9.1L5 9.1v5.8Zm2.9-7Z" /></svg>
            <span className='text-base text-[#513968] font-medium cursor-pointer' onClick={() => setReport(true)}> Report Profile</span>
            {
                report && <div className="form absolute w-64 bg-white border -inset-x-2 mx-auto top-8 p-3 rounded-lg z-40">
                    <div className="h-8 w-full border-b flex items-center justify-between">
                        <span>Report</span>
                        <AiOutlineClose onClick={() => setReport(false)} />
                    </div>
                    <div className="pt-2 flex flex-col gap-2">
                        <span className={`h-8 w-full ${reason === 'Fake Acoout' ? 'border-2 border-black' : 'border'} flex items-center pl-3 rounded-lg cursor-pointer`} onClick={() => { setReason('Fake Acoout') }}>Fake Acoout</span>
                        <span className={`h-8 w-full ${reason === 'Abuse Contact' ? 'border-2 border-black' : 'border'} flex items-center pl-3 rounded-lg cursor-pointer`} onClick={() => { setReason('Abuse Contact') }}>Abuse Contact</span>
                        <span className={`h-8 w-full ${reason === 'Spam' ? 'border-2 border-black' : 'border'} flex items-center pl-3 rounded-lg cursor-pointer`} onClick={() => { setReason('Spam') }}>Spam</span>
                        <input placeholder='Other' type={'text'} className={`h-8 w-full border  flex items-center pl-3 rounded-lg cursor-pointer`} onChange={e => setReason(e.target.value)} />
                        <div className="h-8 w-full flex justify-end gap-3">
                            <button className='h-full px-3 hover:px-4 duration-200 border border-[#E0B2E3] text-black rounded-lg' onClick={() => setReport(false)}>Close</button>
                            <button className='h-full px-3 hover:px-4 duration-200 bg-[#E0B2E3] text-black rounded-lg' onClick={submit} >Submit</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default ReportProfile