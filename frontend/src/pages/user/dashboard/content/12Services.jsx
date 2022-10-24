import axios from 'axios'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import backendIP from '../../../../backendIP'
import { selectAllService, selectService } from '../../../../redux/slice/adsSlice'
import Title from '../components/Title'
import GroupButton from './components/GroupButton'


function Services() {
    const dispatch = useDispatch()
    const { id } = useSelector(state => state.ads)
    const { service } = useSelector(state => state.ads)
    const keys = Object.keys(service.select)
    const update = () => {
        const editing = { service }
        axios.post(`${backendIP}ads/edit`, { editing, id }).then(res => {
            window.alert('Done')
        })
    }
    return (
        <div>
            <Title title={'Services'} />
            <GroupButton />
            <div className="flex flex-wrap gap-3 mt-10">
                <button onClick={() => { dispatch(selectAllService(!service.all)) }} className={`border h-10  px-6  rounded-full  hover:rounded-3xl ${service.all ? 'border-2 border-green-500  shadow-green-500 shadow-inner' : 'hover:border-2'}`}>Select All</button>
                {
                    keys.map((e, index) => <button key={index} onClick={() => { dispatch(selectService(e)) }} className={`border h-10  px-6  rounded-full  hover:rounded-3xl ${service.select[e] ? 'border-2 border-green-500 shadow-md shadow-green-500' : 'hover:border-2'}`}>{e.replace(/([A-Z])/g, " $1").charAt(0).toUpperCase() + e.replace(/([A-Z])/g, " $1").slice(1)}</button>)
                }
            </div>
            <button className='px-5 border rounded-lg h-12 fixed right-10 bottom-5 bg-[#6d00bc] text-white flex justify-center items-center gap-2 font-semibold text-lg' onClick={update}>
                <span className="material-symbols-outlined">
                    settings
                </span>
                Save Your Editing
            </button>
        </div>
    )
}

export default Services