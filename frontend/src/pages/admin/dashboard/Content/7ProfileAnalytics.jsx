import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import backendIP from '../../../../backendIP'
import Title from '../components/Title'
import GroupButton from './components/GroupButton'

function ProfileAnalytics() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`${backendIP}ads/viewall`).then(res => {
            setData(res.data)
        })
    }, [])
    const [id, setId] = useState('')
    const [date, setDate] = useState([])
    const [view, setView] = useState([])
    useEffect(() => {
        axios.get(`${backendIP}ads/analytics`, { params: { id } }).then(res => {
            setDate(Object.keys(res.data).reverse())
            setView(Object.values(res.data).reverse())

        })
    }, [id])

    const datas = {
        labels: date,
        datasets: [{
            label: 'views',
            data: view,
            pointRadius: 5,
            pointHoverRadius: 10,
            borderColor: '#1A73E8',
            tension: 0.3
        }]
    }

    return (
        <div>
            <Title title={'Ads Analatics'} />
            <GroupButton />
            <div className="w-[800px] flex justify-end">
                <select className='h-12 px-3 outline-none rounded-lg capitalize' onChange={e => { setId(e.target.value) }}>
                    <option value={''}>Select Your Ads</option>
                    {
                        data.map(e => <option value={e.id}>{e.adsTitle}</option>)
                    }
                </select>
            </div>
            <div className="w-[825px]">
                <Line data={datas} />
            </div>
        </div>
    )
}
export default ProfileAnalytics