import React, { useEffect } from 'react'
import { useState } from 'react'
import Title from '../components/Title'
import Buttons from './components/Buttons'
import GroupButton from './components/GroupButton'
import { Link } from 'react-router-dom'
import axios from 'axios'
import backendIP from '../../../../backendIP'
import { useDispatch } from 'react-redux'
import { setId } from '../../../../redux/slice/adsSlice'
import { setMenuSelector } from '../../../../redux/slice/utilSlice'

function ManageAds() {
    const [selection, setSelection] = useState(1)
    const [data, setData] = useState([])
    const fetchData = ()=>{
        axios.get(`${backendIP}ads/viewall`).then(res=>setData(res.data))
    }
    useEffect(() => {
      fetchData()
   
    }, [])
    return (
        <div>
            <Title title={'Manage Advets'} />
            <GroupButton />
            <Buttons />
            <div className="profile mt-10">
                <Title title={'Profiles'} />
            </div>
            <div className="div flex justify-center md:justify-start  w-full border-b gap-10  text-lg font-assistant">
                <button className={`${selection === 1 && 'border-b-[3px]'} border-green-500`} onClick={() => setSelection(1)}>Live</button>
                <button className={`${selection === 2 && 'border-b-[3px]'} border-[#5ecfff]`} onClick={() => setSelection(2)}>In Active</button>
                <button className={`${selection === 3 && 'border-b-[3px]'} border-[#e328af]`} onClick={() => setSelection(3)}>Blocked</button>
                <button className={`${selection === 4 && 'border-b-[3px]'} border-[#6426c3]`} onClick={() => setSelection(4)}>All</button>
            </div>
            <div className="w-full flex gap-10 flex-wrap mt-10 pb-10">
                {
                    selection === 1 && data.map(e=> e.visibility && <Card key={e.id} fetchData={fetchData} id={e.id} profilePhoto={e.profilePhoto} adsTitle={e.adsTitle} view={e.view} region={e.region} />)
                }
                {
                    selection === 2
                }
                {
                    selection === 3 && data.map(e=> !e.visibility && <Card key={e.id} fetchData={fetchData} id={e.id} profilePhoto={e.profilePhoto} adsTitle={e.adsTitle} view={e.view} region={e.region} />)
                }
                {
                    selection === 4 &&  data.map(e=><Card key={e.id} fetchData={fetchData} id={e.id} profilePhoto={e.profilePhoto} adsTitle={e.adsTitle} view={e.view} region={e.region} />)
                }
            </div>
        </div>
    )
}

export default ManageAds



const Card = ({ id, profilePhoto, adsTitle, view, region,fetchData }) => {
    const dispatch = useDispatch()
    return (
        <div className="card h-96 w-64 flex flex-col  border items-center justify-center  relative">
            <div className="h-[40%] w-[60%] rounded-full border absolute top-2">
                <img src={profilePhoto} alt="" className='h-full w-full rounded-full object-cover' />
            </div>
            <div className="h-[15%] w-full text-center top-48 absolute flex flex-col ">
                <span className='text-lg font-medium capitalize'>{adsTitle}</span>
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

                <Link to={`/profile/${id}`} target='_blank' className='border-2 border-[#6426c3] rounded-2xl h-10 w-16 justify-center items-center flex' >View</Link>

                <button className='border-2 rounded-2xl h-10 w-16 border-[#5ECFFF]' 
                    onClick={()=>{
                        dispatch(setId(id))
                        dispatch(setMenuSelector(13))
                    }}
                >Edit</button>

                <button className='border-2 rounded-2xl h-10 w-16 border-[#E328AF]' onClick={()=>{
                    const confirm = window.confirm("Do you Realy Want to Delete this Ads")
                    if(confirm){
                        axios.post(`${backendIP}ads/delete`,{id}).then(res=>{
                            if(res.data){
                                fetchData()
                                window.alert("Successfully Deleted")
                            } else window.alert('Something is error')
                        })
                    }else window.alert('Thank you')
                }}>Delete</button>

            </div>
        </div>
    )
}