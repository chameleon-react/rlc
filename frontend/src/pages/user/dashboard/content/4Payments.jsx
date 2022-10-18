import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import backendIP from '../../../../backendIP'
import Title from '../components/Title'
import GroupButton from './components/GroupButton'

function Payments() {
const tierDetails = useSelector(state=>state.tier)
const {tier} = useSelector(state=>state.tier)
const {username} = useSelector(state=>state.user)

    useEffect(() => {
        axios.post(`${backendIP}tier/${tier}`, {...tierDetails,username}).then(res => window.alert(res.data))
    }, [])
    
    return (
        <div>
            <Title title={'Payments'} />
            <GroupButton />
        </div>
    )
}

export default Payments