import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { useSelector } from 'react-redux'
import ManageAds from './content/1ManageAds'
import BuyFirstPagePosition from './content/2BuyFirstPagePosition'
import Payments from './content/4Payments'
import EarnFreeCredit from './content/5EarnFreeCredit'
import Comments from './content/6Comments'
import Settings from './content/7Settings'
import BacklistedClients from './content/8BacklistedClients'
import VerifyAds from './content/9VerifyAds'
import EditAds from './content/10EditAds'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import backendIP from '../../../backendIP'
import Home from './content/3Home'
import AdsAnalatics from './content/11AdsAnalatics'
function UserDashboard() {
    const { menuSelector } = useSelector(state => state.util)
    const { username } = useSelector(state => state.user)
    const [verified, setVerified] = useState(true)
    useEffect(() => {
        axios.get(`${backendIP}user/isverify`, {
            params: {
                username
            }
        }).then(res => {
            setVerified(res.data)
        })
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            {
                !verified && <div className="h-11 w-full bg-[#f01e2c] flex justify-center items-center gap-3">
                    <span className='text-white text-xl font-medium'>Please Verify Your Email</span>
                    <button className='border border-black px-2 py-1 rounded-xl text-xl font-medium hover:border-red-500 hover:bg-black hover:text-red-500 duration-200     '>Verify</button>
                </div>
            }

            <div className='w-screen min-h-screen flex'>
                <Sidebar />
                <div className="main h-full w-full">
                    <Navbar />
                    <div className="content min-h-screen w-full pl-10 pt-10 bg-[#f7f7f7]">
                        {menuSelector === 1 && <ManageAds />}
                        {menuSelector === 2 && <BuyFirstPagePosition />}
                        {menuSelector === 3 && <Home />}
                        {menuSelector === 4 && <Payments />}
                        {menuSelector === 5 && <EarnFreeCredit />}
                        {menuSelector === 6 && <Comments />}
                        {menuSelector === 7 && <Settings />}
                        {menuSelector === 8 && <BacklistedClients />}
                        {menuSelector === 9 && <VerifyAds />}
                        {menuSelector === 10 && <EditAds />}
                        {menuSelector === 11 && <AdsAnalatics/>}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard