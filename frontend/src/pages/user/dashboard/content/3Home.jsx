import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import backendIP from '../../../../backendIP'
import { setAdsTitle, setId } from '../../../../redux/slice/adsSlice'
import { setMenuSelector } from '../../../../redux/slice/utilSlice'
import Title from '../components/Title'
import GroupButton from './components/GroupButton'

function Home() {
    const [data, setData] = useState([])
    const { username } = useSelector(state => state.user)
    const fetchData = () => {
        axios.get(`${backendIP}ads/userads`, { params: { username } }).then(res => {
            setData(res.data)

        })
    }
    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])
    const [selection, setSelection] = useState(1)
    return (
        <div className='pb-10'>
            <Title title={'Home'} />
            <GroupButton />
            <div className="div flex justify-center md:justify-start  w-full border-b gap-10  text-lg font-assistant mt-10">
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
            <Title title={'Plan & Price'} />
            <div className="mt-10 w-[972px]  border-t  border-[#6418C3] border-opacity-40  flex text-[25px]">
                <div className="h-full w-[243px] border-x border-[#6418C3] border-opacity-40">
                    <div className="h-[55px] w-full border-b border-opacity-40 border-[#6418C3] flex justify-center items-center  font-bold">Benifits</div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Pictures</div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Videos</div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Verified</div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Chat Support</div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Top Spot</div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Social Media</div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Email Newsletters</div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">View</div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Traffic Booster </div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Ads Available</div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Position</div>
                </div>
                <div className="h-full w-[204px] border-r border-[#6418C3] border-opacity-40">
                    <div className="h-[55px] w-full border-b border-opacity-40 border-[#6418C3] flex justify-center items-center font-bold">Free</div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">3</div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center"><Cross /></div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center"><Cross /></div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center"><Cross /></div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center"><Cross /></div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center"><Cross /></div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center"><Cross /></div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">50</div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center"><Cross /></div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Unlimited</div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Free Ads Section</div>
                </div>
                <div className="h-full w-[175px]  border-[#6418C3] border-opacity-40" style={{ backgroundImage: 'linear-gradient(to bottom, #c8c7c7, #d5d5d5, #e3e3e3, #f1f1f1, #ffffff)' }}>
                    <div className="h-[55px] w-full border-b  border-opacity-40 border-[#6418C3] flex justify-center items-center font-bold">Silver</div>
                    <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center">Unlimited</div>
                    <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center"><Tick /></div>
                    <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center"><Tick /></div>
                    <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center"><Tick /></div>
                    <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center"><Tick /></div>
                    <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center"><Tick /></div>
                    <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center"><Cross /></div>
                    <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center">Unlimited</div>
                    <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center">Moderate</div>
                    <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center">16</div>
                    <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center">Lower</div>
                    <button className='h-[52px] w-full border-b-2  border-x-2 bg-[#6418C3] rounded-b-[20px] text-white'>Upgrade</button>
                </div>
                <div className="h-full w-[174px] border-[#6418C3] border-opacity-40" style={{ backgroundImage: 'linear-gradient(to bottom, #e0ba60, #e9c981, #f1d8a3, #f8e8c4, #fff7e6)' }}>
                    <div className="h-[55px] w-full border-b border-opacity-40 border-[#6418C3] flex justify-center items-center font-bold">Gold</div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Unlimited</div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center"><Tick /></div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center"><Tick /></div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center"><Tick /></div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center"><Tick /></div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center"><Tick /></div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center"><Tick /></div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Unlimited</div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">High</div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">8</div>
                    <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Middle</div>
                    <button className='h-[52px] w-full border-b-2  border-x-2 bg-[#6418C3] rounded-b-[20px] text-white'>Upgrade</button>
                </div>
                <div className="h-full w-[174px]  border-[#6418C3] border-opacity-40" style={{ backgroundImage: 'linear-gradient(to bottom, #7d7d7d, #9c9c9c, #bcbcbc, #dddddd, #ffffff)' }}>
                    <div className="h-[55px] w-full border-b border-r border-opacity-40 border-[#6418C3] flex justify-center items-center font-bold">Platinum</div>
                    <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center ">Unlimited</div>
                    <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center "><Tick /></div>
                    <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center "><Tick /></div>
                    <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center ">24/7</div>
                    <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center "><Tick /></div>
                    <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center "><Tick /></div>
                    <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center "><Tick /></div>
                    <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center ">Unlimited</div>
                    <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center ">Very High</div>
                    <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center ">3</div>
                    <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center ">Top</div>
                    <button className='h-[52px] w-full border-b-2  border-x-2 bg-[#6418C3] rounded-b-[20px] text-white'>Upgrade</button>
                </div>
            </div>
        </div>
    )
}

export default Home


const Cross = () => {
    return (
        <img src="/icon/cross.png" className='h-[25px] w-[25px]' alt="" />
    )
}

const Tick = () => {
    return (
        <img src="/icon/tick.png" className='h-[25px] w-[25px]' alt="" />
    )
}


const Card = ({ id, profilePhoto, adsTitle, view, region, fetchData, verified }) => {
    const dispatch = useDispatch()
    return (
        <div className="card h-96 w-64 flex flex-col  border items-center justify-center  relative">
            <div className="h-[40%] w-[60%] rounded-full border absolute top-2">
                <img src={profilePhoto} alt="" className='h-full w-full rounded-full object-cover' />
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