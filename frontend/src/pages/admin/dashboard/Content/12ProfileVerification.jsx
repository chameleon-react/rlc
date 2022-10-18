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
                rejection && <Modal setShowModal={setRejection} verificationPhoto={verificationPhoto}/>
            }
            {/* {
                rejection && <div className="absolute -bottom-[10rem] -right-[8rem] w-64  border rounded-xl bg-white flex flex-col justify-center gap-5">

                    <div class="flex items-center">
                        <input id="notCorrect" type="radio" value="Verification Image is Not Correct" name="reject" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="notCorrect" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Verification Image is Not Correct</label>
                    </div>
                    
                    <div class="flex items-center">
                        <input checked id="quality" type="radio" value="Image quality in poor" name="reject" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="quality" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image quality in poor</label>
                    </div>

                    <div class="flex items-center">
                        <input checked id="recognise" type="radio" value="We Can't recognise this you" name="reject" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="recognise" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">We Can't recognise this you</label>
                    </div>
                    <div className="button w-full flex justify-center  mb-5">
                        <button className='border-2 p-2 rounded-2xl hover:rounded-xl border-[#E328AF]'>Sumbit</button>
                    </div>

                </div>
            } */}

        </div>
    )
}