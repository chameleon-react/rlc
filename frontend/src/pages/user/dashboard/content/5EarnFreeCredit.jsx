import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Title from '../components/Title'
import GroupButton from './components/GroupButton'
import backendIP from '../../../../backendIP'
import { useSelector } from 'react-redux'

function EarnFreeCredit() {
    const [url, setUrl] = useState('')
    const {username} = useSelector(state=>state.user)
    return (
        <div>
            <Title title={'EarnFreeCredit'} />
            <GroupButton />
            <div className="border w-full mt-8 pb-5 rounded-xl">
                <div className=" w-full h-12  flex justify-left items-center text-lg font-semibold border-b pl-5">
                    Already Placed our banner? Inform us where we can find it
                </div>
                <div className="flex justify-end w-full">
                </div>
                <div className="h-24 pl-5 flex items-center gap-10">
                    <span className='font-semibold'>Banner place on</span>
                    <input type={'text'} className='border-2 h-10 w-[40%] rounded-lg px-5  border-black' placeholder='https://' value={url} onChange={e => setUrl(e.target.value)} />
                    <div className="bg-red-500 h-8 px-5 flex justify-center items-center rounded-xl font-semibold">
                        Not Submitted
                    </div>
                    <button className=' h-10  px-6 rounded-full md:text-xl   shadow-md shadow-red-500 hover:shadow-lg hover:shadow-red-500' onClick={() => {
                        axios.post(`${backendIP}banner/apply`, { username, url }).then(res => {
                            if (res.data) {
                                window.alert('You are request for free credit is processing')
                            } else window.alert('You are requested with same website or \n Somthing is error in the url')
                        })
                    }}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default EarnFreeCredit