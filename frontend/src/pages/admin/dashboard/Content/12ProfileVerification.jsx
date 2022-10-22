import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import backendIP from '../../../../backendIP'
import Title from '../components/Title'
import GroupButton from './components/GroupButton'
import Modal from './components/Modal'


function ProfileVerification() {
    const [data, setData] = useState([])
    const fetchApi = () => {
        axios.get(`${backendIP}ads/verificationRequest`).then(res => {
            setData(res.data)
        })
    }

    useEffect(() => {
        fetchApi()
    }, [])


    return (
        <div>
            <Title title={'Profile Verification'} />
            <GroupButton />
            <div className="h-24 mt-10 flex gap-10 flex-wrap">
                {
                    data.map(e => <Card adsTitle={e.adsTitle} id={e.id} verificationPhoto={e.verificationPhoto} view={e.view} region={e.region} fetchData={fetchApi} />)
                }
            </div>
        </div>
    )
}

export default ProfileVerification



const Card = ({ id, verificationPhoto, adsTitle, view, region, fetchData }) => {
    const [rejection, setRejection] = useState(false)
    return (
        <div className="card h-96 w-64 flex flex-col  border items-center justify-center  relative">
            <div className="h-[40%] w-[60%] rounded-full border absolute top-2">
                <img src={verificationPhoto} alt="" className='h-full w-full rounded-full object-cover' />
            </div>
            <div className="h-[15%] w-full text-center top-48 absolute flex flex-col ">
                <span className='text-lg font-medium '>{adsTitle}</span>
                <span className='text-sm'>{region}</span>
            </div>
            <div className="h-[15%] w-full text-center top-64 absolute">
                <span className='text-lg font-medium flex justify-center items-center gap-2 text-[#75848d]'>
                    <span className="material-symbols-outlined">
                        visibility
                    </span>
                    {view}
                </span>
            </div>
            <div className="h-[15%] w-full absolute bottom-5 flex justify-around items-center ">
                <button className='border-2 rounded-2xl h-10 w-16 border-[#E328AF]' onClick={() => { setRejection(!rejection) }}>View</button>

            </div>
            {
                rejection && <Modal setShowModal={setRejection} verificationPhoto={verificationPhoto} />
            }

        </div>
    )
}