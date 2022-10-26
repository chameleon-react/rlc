import React, { useState } from 'react'
import Title from '../components/Title'
import GroupButton from './components/GroupButton'
import axios from 'axios'
import backendIP from '../../../../backendIP'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setAdsTitle, setId } from '../../../../redux/slice/adsSlice'
import { setMenuSelector } from '../../../../redux/slice/utilSlice'
import Modal from './components/Modal'
import { setProfilePhoto } from '../../../../redux/slice/userSlice'

function ManageAds() {
    const dispatch = useDispatch()
    const { username } = useSelector(state => state.user)
    const [data, setData] = useState([])
    const [showModal, setShowModal] = React.useState(false);
    const fetchData = () => {
        axios.get(`${backendIP}ads/userads`, { params: { username } }).then(res => {
            setData(res.data)
            // eslint-disable-next-line
            if (res.data == false) {
                setShowModal(true)
            } else {
                dispatch(setProfilePhoto(res.data[0].profilePhoto))
            }
        })
    }
    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])

    const [selection, setSelection] = useState(1)
    return (
        <div>
            <Title title={'Manage My Advets'} />
            <GroupButton />
            <div className="profile mt-10">
                <Title title={'Profiles'} />
            </div>
            <div className="div flex justify-center md:justify-start  w-full border-b gap-10  text-lg font-assistant">
                <button className={`${selection === 1 && 'border-b-[3px]'} border-[#6426c3]`} onClick={() => setSelection(1)}>All</button>
                <button className={`${selection === 2 && 'border-b-[3px]'} border-[#5ecfff]`} onClick={() => setSelection(2)}>Live</button>
                <button className={`${selection === 3 && 'border-b-[3px]'} border-[#e328af]`} onClick={() => setSelection(3)}>Blocked</button>
            </div>
            <div className="w-full flex gap-10 flex-wrap mt-10 pb-10">
                {
                    selection === 1 && data.map(e => <Card key={e.id} fetchData={fetchData} id={e.id} profilePhoto={e.profilePhoto} adsTitle={e.adsTitle} view={e.view} region={e.region} verified={e.verified} />)
                }
                {
                    selection === 2 && data.map(e => e.visibility && <Card key={e.id} fetchData={fetchData} id={e.id} profilePhoto={e.profilePhoto} adsTitle={e.adsTitle} view={e.view} region={e.region} verified={e.verified} />)
                }
                {
                    selection === 3 && data.map(e => !e.visibility && <Card key={e.id} fetchData={fetchData} id={e.id} profilePhoto={e.profilePhoto} adsTitle={e.adsTitle} view={e.view} region={e.region} verified={e.verified} />)
                }
            </div>
            {
                showModal && <Modal setShowModal={setShowModal} />
            }
        </div>
    )
}

export default ManageAds


const Card = ({ id, profilePhoto, adsTitle, view, region, fetchData, verified }) => {
    const dispatch = useDispatch()
    useEffect(() => {
      axios.get(`${backendIP}ads/profile`,{params:{id}}).then(res=>{
        setEnabled(res.data.visibility)
      })
    }, [])
    
    const [enabled, setEnabled] = useState(true)
    return (
        <div className={` card h-96 w-64 flex flex-col  border items-center justify-center  relative z-40`}>

            <div className="absolute right-0 top-2  flex justify-center items-center gap-1 blur-none z-50">
                <div className="flex">
                    <label class="inline-flex relative items-center  cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={!enabled}
                            readOnly
                            onChange={()=>{
                                axios.post(`${backendIP}ads/edit`,{editing:{visibility:enabled},id})
                                if(!enabled){
                                    window.alert('Your Profile will not show until vacation mode is off')
                                }
                            }}
                        />
                        <div
                            onClick={() => {
                                setEnabled(!enabled);
                                
                            }}
                            className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                        ></div>
                        
                    </label>
                </div>
                <div className="group">
                    <div className='w-4 h-4 border rounded-full flex justify-center items-center border-blue-400 text-blue-400'>i</div>
                    <div className="hidden group-hover:flex border absolute   border-blue-400 duration-200">
                        <p>Vacation Mode </p>
                    </div>
                </div>
            </div>

            <div className={`h-[40%] w-[60%] rounded-full border absolute top-2 ${!enabled && 'blur-sm'}`}>
                <img src={profilePhoto} alt="" className='h-full w-full rounded-full object-cover' />
            </div>
            <div className={`h-[15%] w-full text-center top-48 absolute flex flex-col ${!enabled && 'blur-sm'}`}>
                <span className='text-lg font-medium '>{adsTitle}</span>
                <span className='text-sm'>{region}</span>
            </div>
            <div className={`h-[15%] w-full text-center top-64 absolute ${!enabled && 'blur-sm'}`}>
                <span className='text-lg font-medium flex justify-center items-center gap-2 text-[#75848d]'>
                    <span className="material-symbols-outlined">
                        visibility
                    </span>
                    {view}
                </span>
            </div>
            <div className={`h-[15%] w-full absolute bottom-5 flex justify-around items-center ${!enabled && 'blur-sm'}`}>
                <button className='border-2 border-[#6426c3] rounded-2xl h-10 w-16 justify-center items-center flex'
                    onClick={() => {
                        if (!verified) {
                            dispatch(setId(id))
                            dispatch(setAdsTitle(adsTitle))
                            dispatch(setMenuSelector(9))
                        } else window.alert('This ads is already verified')
                    }}
                >Verify</button>

                <button className='border-2 rounded-2xl h-10 w-16 border-[#5ECFFF]'
                    onClick={() => {
                        dispatch(setId(id))
                        dispatch(setAdsTitle(adsTitle))
                        dispatch(setMenuSelector(10))
                    }}
                >Edit</button>

                <button className='border-2 rounded-2xl h-10 w-16 border-[#E328AF]' onClick={() => {
                    const confirm = window.confirm("Do you Realy Want to Delete this Ads")
                    if (confirm) {
                        axios.post(`${backendIP}ads/delete`, { id }).then(res => {
                            if (res.data) {
                                fetchData()
                                window.alert("Successfully Deleted")
                            } else window.alert('Something is error')
                        })
                    } else window.alert('Thank you')
                }}>Delete</button>

            </div>
        </div>
    )
}