import axios from 'axios'
import React, { useEffect, useState } from 'react'
import backendIP from '../../../../backendIP'
import Title from '../components/Title'
import GroupButton from './components/GroupButton'

function SiteAnalytics() {
    const [selection, setSelection] = useState(1)
    const [data, setData] = useState('')
    const [datas, setDatas] = useState([])
    useEffect(() => {
        if (selection == 1) {
            axios.get(`${backendIP}analatics/report/today`).then(res => {
                setData(res.data)
            })
        }
        else if (selection == 2) {
            axios.get(`${backendIP}analatics/report/yesterday`).then(res => {
                setData(res.data)
            })
        }
        else if (selection == 3) {
            axios.get(`${backendIP}analatics/report/weekly`).then(res => {
               
                setDatas(res.data)
            })
        }
        else if (selection == 4) {
            axios.get(`${backendIP}analatics/report/monthly`).then(res => {
                setDatas(res.data)
            })
        }
        else if(selection == 7){
            axios.get(`${backendIP}analatics/report/all`).then(res => {
                setDatas(res.data)
            })
        }

    }, [selection])


    return (
        <div>
            <Title title={'Site Analytics'} />
            <GroupButton />
            <div className="div flex justify-center md:justify-start  w-full border-b gap-10  text-lg font-assistant mt-10">
                <button className={`${selection === 1 && 'border-b-[3px]'} border-green-500`} onClick={() => setSelection(1)}>Today</button>
                <button className={`${selection === 2 && 'border-b-[3px]'} border-[#5ecfff]`} onClick={() => setSelection(2)}>Yesterday</button>
                <button className={`${selection === 3 && 'border-b-[3px]'} border-[#6426c3]`} onClick={() => setSelection(3)}>weekly</button>
                <button className={`${selection === 4 && 'border-b-[3px]'} border-[#e328af]`} onClick={() => setSelection(4)}>Monthly</button>
                <button className={`${selection === 5 && 'border-b-[3px]'} border-[#e328af]`} onClick={() => setSelection(5)}>Date</button>
                <button className={`${selection === 6 && 'border-b-[3px]'} border-[#6426c3]`} onClick={() => setSelection(6)}>Between</button>
                <button className={`${selection === 7 && 'border-b-[3px]'} border-[#e328af]`} onClick={() => setSelection(7)}>All</button>
            </div>
            <table className='w-full'>
                <thead className='w-full'>
                    <tr className='w-full'>
                        <td className='w-1/3'>ID</td>
                        <td className='w-1/3'>Date</td>
                        <td className='w-1/3'>View</td>
                    </tr>
                </thead>
                <tbody className='w-full'>

                    {
                        (selection === 1 || selection === 2) &&
                        <Table id={data.id} date={data.date} view={data.view} />
                    }
                    {
                       (selection === 3 || selection === 4 || selection === 7)  && datas.map(e=><Table id={e.id} view={e.view} date={e.date}  />)
                    }
                </tbody>
            </table>

        </div>
    )
}

export default SiteAnalytics


const Table = ({ id, date, view }) => {
    return(
    <tr className='w-full'>
        <td className='w-1/3'>{id}</td>
        <td className='w-1/3'>{date}</td>
        <td className='w-1/3'>{view}</td>
    </tr>
    )
}