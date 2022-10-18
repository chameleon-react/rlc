import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Supports from './Content/10Supports'
import ReportedIssues from './Content/11ReportedIssues'
import ProfileVerification from './Content/12ProfileVerification'
import EditingProfile from './Content/13EditingProfile'
import Customers from './Content/14Customers'
import LiveSpot from './Content/15LiveSpot'
import ManageAds from './Content/1ManageAds'
import ActionInProgress from './Content/2ActionInProgress'
import PaymentAds from './Content/3PaymentAds'
import BidPayment from './Content/4BidPayment'
import PaymentHistory from './Content/5PaymentHistory'
import SiteAnalytics from './Content/6SiteAnalytics'
import ProfileAnalytics from './Content/7ProfileAnalytics'
import Banner from './Content/8Banner'
import BlackListedClients from './Content/9BlackListedClients'
import { setVerificationCount } from '../../../redux/slice/utilSlice'
import { useEffect } from 'react'
import axios from 'axios'
import backendIP from '../../../backendIP'
function AdminDashboard() {
    useEffect(() => {
      axios.get(`${backendIP}ads/verificationcount`).then(res=>{
        dispatch(setVerificationCount(res.data?.count))
      })
      // eslint-disable-next-line
    }, [])
    
    const dispatch = useDispatch()
    const { menuSelector } = useSelector(state => state.util)


    return (
        <div className='w-screen min-h-screen flex'>
            <Sidebar />
            <div className="main h-full w-full">
                <Navbar />
                <div className="content min-h-screen w-full pl-10 pt-10 bg-[#f7f7f7]">
                    {menuSelector === 1 && <ManageAds />}
                    {menuSelector === 2 && <ActionInProgress />}
                    {menuSelector === 3 && <PaymentAds />}
                    {menuSelector === 4 && <BidPayment />}
                    {menuSelector === 5 && <PaymentHistory />}
                    {menuSelector === 6 && <SiteAnalytics />}
                    {menuSelector === 7 && <ProfileAnalytics />}
                    {menuSelector === 8 && <Banner />}
                    {menuSelector === 9 && <BlackListedClients />}
                    {menuSelector === 10 && <Supports />}
                    {menuSelector === 11 && <ReportedIssues />}
                    {menuSelector === 12 && <ProfileVerification />}
                    {menuSelector === 13 && <EditingProfile />}
                    {menuSelector === 14 && <Customers />}
                    {menuSelector === 15 && <LiveSpot />}

                </div>
            </div>
        </div>
    )
}

export default AdminDashboard