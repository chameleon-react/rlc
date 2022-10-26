import axios from 'axios'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import backendIP from '../../../../backendIP'
import { setMenuSelector } from '../../../../redux/slice/utilSlice'
import Title from '../components/Title'
import GroupButton from './components/GroupButton'


function Settings() {

    const dispatch = useDispatch()
    return (
        <div>
            <Title title={'Settings'} />
            <GroupButton />
            <div className="w-[800px] bg-white p-8 flex flex-col mt-10 gap-y-5 divide-y">
                <div className="w-full">
                    <div className="h-[39px] flex justify-end items-start gap-1 font-medium text-base text-[#62646a]">
                        <span>Need to update your profile?</span>
                        <button className='text-[#1dbf73]' onClick={() => dispatch(setMenuSelector(1))}>Go to My Profile</button>
                    </div>
                    <hr />
                    <Change />
                </div>
                <div className="w-full flex flex-col gap-3">
                    <div className=" mt-5 flex justify-between items-start">
                        <label htmlFor="" className='font-bold text-sm text-[#777777]'>ACCOUNT DEACTIVATION</label>
                        <div className="w-[456px]">
                            <span className='font-bold text-sm text-[#777777]'>What happens when you deactivate your account?</span>
                            <ul className='text-sm font-medium text-[#777777]'>
                                <li className=''>Your profile and Gigs won't be shown on Red Light Club anymore. </li>
                                <li className=''>Active orders will be cancelled. </li>
                                <li className=''>You won't be able to re-activate your Gigs.</li>

                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-between items-start">
                        <label htmlFor="" className='font-bold text-sm text-[#777777]'>I'm leaving because ...</label>
                        <select className='w-[456px] h-8 border rounded pl-3 text-base font-medium text-[#777] outline-none' placeholder='Confirm Password' >
                            <option value="">Choose a reason</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                        </select>
                    </div>
                    <button className='bg-[#ddd] rounded self-end mt-5 text-[#999] w-32 h-8'>Save Changes</button>
                </div>
            </div>

        </div>
    )
}

export default Settings


const Change = () => {
    const { username } = useSelector(state => state.user)
    const [edit, setEdit] = useState({
        username
    })
    const [confirmPassword, setConfirmPassword] = useState('')
    const update = ()=>{
        if(edit?.password){
            if(edit?.password === confirmPassword){
                axios.post(`${backendIP}user/edit`,edit).then(alert('Updated'))
            } else {
                alert("Password is not Matching")
            }
        } else{
            axios.post(`${backendIP}user/edit`,edit).then(alert('Updated'))
        }
    }
    return (
        <div className="mt-6">
            <div className="w-full h-[52px] flex justify-between items-start">
                <label htmlFor="" className='font-bold text-sm text-[#777777]'>USERNAME</label>
                <input type="text" className='w-[456px] h-8 border rounded pl-3 text-base font-medium text-[#777] outline-none' readOnly value={username} />
            </div>
            <div className="w-full h-[82px] flex justify-between items-start">
                <label htmlFor="" className='font-bold text-sm text-[#777777]'>EMAIL</label>
                <input type="email" className='w-[456px] h-8 border rounded pl-3 text-base font-medium text-[#777] outline-none' placeholder={`eg: ${username}@gmail.com`} onChange={e => setEdit({ ...edit, email: e.target.value })} />
            </div>
            <div className="w-full h-[82px] flex justify-between items-start">
                <label htmlFor="" className='font-bold text-sm text-[#777777]'>New Password</label>
                <input type="password" className='w-[456px] h-8 border rounded pl-3 text-base font-medium text-[#777] outline-none' placeholder='New Password' onChange={e => setEdit({ ...edit, password: e.target.value })} />
            </div>
            <div className="w-full h-[82px] flex justify-between items-start">
                <label htmlFor="" className='font-bold text-sm text-[#777777]'>Confirm Password</label>
                <input type="password" className='w-[456px] h-8 border rounded pl-3 text-base font-medium text-[#777] outline-none' placeholder='Confirm Password' onChange={e=>setConfirmPassword(e.target.value)}/>
            </div>
            <div className="w-full h-[82px] flex justify-between items-start">
                <label htmlFor="" className='font-bold text-sm text-[#777777]'>ONLINE STATUS</label>
                <div className="w-[456px]">
                    <select type="text" className='w-[153px] h-[28px] border-2 pl-3 rounded text-[#777] outline-none'>
                        <option value="">Available</option>
                        <option value="">Busy</option>
                    </select>
                </div>
            </div>
            <button className='w-28 h-8 bg-[#1dbf73] rounded float-right text-white' onClick={update}>Save Changes</button>
        </div>
    )
}