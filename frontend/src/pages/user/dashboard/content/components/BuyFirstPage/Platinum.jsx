import axios from "axios"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import backendIP from "../../../../../../backendIP"
import { setAdsId, setAdsTitle, setLocation, setPosition, setProfilePhoto, setRegion, setTier } from "../../../../../../redux/slice/tierSlice"
import { setMenuSelector } from "../../../../../../redux/slice/utilSlice"
import Title from "../../../components/Title"

const PlatinumCard = ({ index }) => {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <div className="card h-72 w-56 border border-[#E8E7E7] flex flex-col justify-center items-center gap-5" onClick={() => { setShowModal(true) }}>
                <span className='text-2xl font-medium'>Platinum</span>
                <span className='text-xl font-medium'>$ 40</span>
                <span>Bid on {index} Position is Started</span>
                <span>Please Click for participation</span>
            </div>
            {
                showModal && <PlatinumModal setShowModal={setShowModal} index={index}/>
            }
        </>
    )
}

const PlatinumModal = ({setShowModal,index}) => {
    const dispatch = useDispatch()
    const [ads, setAds] = useState([])
    const { username } = useSelector(state => state.user)
    useEffect(() => {
        axios.get(`${backendIP}ads/userads`, {
            params: {
                username
            }
        }).then(res => {
            setAds(res.data)
        })
        // eslint-disable-next-line
    }, [])
    return (
        <div className="border border-black bg-[#333333] h-[40rem] w-[56rem] fixed inset-0 m-auto">
            <div className="h-16 border-b border-white flex justify-between items-center w-[95%] mx-auto">
                <span className='text-2xl text-white'>Ranked {index} in Platinum Tier</span>
                <button className='h-8 w-8   cursor-pointer' onClick={() => { setShowModal(false) }}>
                    <img src="/icon/close.svg" className='fill-current' alt="" />
                </button>
            </div>
            <div className="p-5 text-white overflow-y-scroll h-[calc(100%-4rem)] sc flex flex-col">
                <Title title={'Choose Your Ads'} />
                <div className=" flex flex-wrap gap-3 justify-center">
                    {
                        ads.map(e=><div className='h-96 w-64 flex flex-col  border items-center justify-center gap-5'>
                        <img src={e.profilePhoto} alt={e.adsTitle} className='h-[40%] w-[60%] rounded-full' />
                        <span className="text-lg font-medium ">{e.adsTitle}</span>
                        <span className="text-sm">{e.region}</span>
                        <div className="flex items-center gap-3">
                            <span class="material-symbols-outlined">visibility</span>
                            <span>{e.view}</span>
                        </div>
                        <button className="border-2 border-red-600 rounded-3xl h-10  justify-center items-center flex px-3" onClick={()=>{
                            const confirm = window.confirm('Confirm your selection?')
                            if(confirm){
                                dispatch(setAdsTitle(e.adsTitle))
                                dispatch(setAdsId(e.id))
                                dispatch(setTier('Platinum'))
                                dispatch(setPosition(index))
                                dispatch(setMenuSelector(4))
                                dispatch(setProfilePhoto(e.profilePhoto))
                                dispatch(setRegion(e.region))
                                dispatch(setLocation(e.location))
                            }
                        }}>Select</button>
                </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default PlatinumCard