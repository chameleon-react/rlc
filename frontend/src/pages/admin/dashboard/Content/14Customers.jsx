import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import backendIP from '../../../../backendIP'
import Title from '../components/Title'
import GroupButton from './components/GroupButton'


function Customers() {
    const [data, setData] = useState([])
    const fetchData = () => {
        axios.get(`${backendIP}user`).then(res => {
            setData(res.data)
        })
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <Title title={'Customers'} />
            <GroupButton />
            <div className="mx-5 w-full mt-5">
                <table class="table-fixed w-full border ">
                    <thead>
                        <tr>
                            <th className='w-[20%]'>Id</th>
                            <th className='w-[20%]'>Username</th>
                            <th className='w-[20%]'>Email</th>
                            <th className='w-[20%]'>Credit</th>
                            <th className='w-[20%]'>Joind</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(e=><tr className=''>
                                <td className='w-[20%]'>{e.id}</td>
                                <td className='w-[20%]'>{e.username}</td>
                                <td className='w-[20%]'>{e.email}</td>
                                <td className='w-[20%]'>{e.credit}</td>
                                <td className='w-[20%]'>{e.createdAt}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Customers