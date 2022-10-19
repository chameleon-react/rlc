import React, { useEffect } from 'react'
import { useState } from 'react'

import NavBar from '../../common/NavBar';
import axios from 'axios';
import backendIP from '../../../backendIP';
import shuffle from '../shuffle';
import { Gold, None, Platinum, Silver } from './components/plans';
import Footer from './components/Footer';
import Search from './components/Search';
import { useSelector } from 'react-redux';

function FilterMobile() {
    const [searchbar, setSearchbar] = useState(false)
    const [data, setData] = useState([])
    const { region } = useSelector(state => state.ads)
    const [filter, setFilter] = useState({})
    const fetchData = ()=>{
        if(region){
            axios.post(`${backendIP}filter`,{region,...filter}).then(res => {
                setData(shuffle(res.data))
            })
        }else{
            axios.post(`${backendIP}filter`,{...filter}).then(res => {
                setData(shuffle(res.data))
                
            })
        }
        setSearchbar(false)
    }
    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])
console.log(filter)
    return (
        <div className='bg-[#AE0C37] pb-20'>
            <NavBar />
            <div className="w-[90%] mx-auto h-[100px] rounded-t-[5px] bg-white"></div>
            <Footer setSearchbar={setSearchbar} searchbar={searchbar} />
            <Search searchbar={searchbar} fetchData={fetchData} setFilter={setFilter} filter={filter}/>
            <Card data={data} />
            
        </div>
    )
}

export default FilterMobile




const Card = ({data})=>{
    return(
        <div className="relative z-40">
                <div className="Platium flex justify-center flex-wrap gap-3 mt-3">
                    {
                        data.map((e, index) => e?.membershipType === 'Platinum' && <Platinum key={index} profilePhoto={e.profilePhoto} id={e.id} age={e.appearance?.age} adsTitle={e.adsTitle} region={e.region} />)
                    }
                </div>
                <div className="gold flex justify-center flex-wrap gap-3 mt-10">
                    {
                        data.map((e, index) => e?.membershipType === 'Gold' && <Gold key={index} profilePhoto={e.profilePhoto} id={e.id} age={e.appearance?.age} adsTitle={e.adsTitle} region={e.region} />)
                    }

                </div>
                <div className="silver flex justify-center flex-wrap gap-3 mt-10">
                    {
                        data.map((e, index) => e?.membershipType === 'Silver' && <Silver key={index} profilePhoto={e.profilePhoto} id={e.id} age={e.appearance?.age} adsTitle={e.adsTitle} region={e.region} />)
                    }
                </div>
                <div className="none flex justify-center flex-wrap gap-3 mt-10">
                    {
                        data.map((e, index) => e?.membershipType === 'none' && <None key={index} profilePhoto={e.profilePhoto} id={e.id} age={e.appearance?.age} adsTitle={e.adsTitle} region={e.region} />)
                    }
                </div>
            </div>
    )
}








