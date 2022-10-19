import { Rating } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../common/Footer'
import NavBar from '../../common/NavBar'
import About from '../components/About'
import Activity from '../components/Activity'
import AQ from '../components/AQ'
import Contact from '../components/Contact'
import Meetwith from '../components/Meetwith'
import QNA from '../components/QNA'
import ReportProfile from '../components/ReportProfile'
import Review from '../components/Review'
import Services from '../components/Services'

function ProfileMobile({ data, id, setIsLogin }) {
    return (
        <div className='block lg:hidden'>
            <NavBar />
            <div className="w-[90%] mx-auto h-[100px] rounded-t-[5px] bg-white"></div>
            <div className="h-12 max-w-[1244px] bg-[#513968] px-[18px] flex justify-between items-center text-white text-sm mx-auto">
                <Link to={`/profile/${Number(id) - 1}`}>
                    <button className='w-[81px] h-[29px] rounded-2xl bg-[#946FB7] hover:w-[90px] hover:h-[35px] hover:text-lg duration-200' >Previous</button>
                </Link>
                <Contact data={data} />
                <Link to={`/profile/${Number(id) + 1}`}>
                    <button className='w-[81px] h-[29px] rounded-2xl bg-[#946FB7] hover:w-[90px] hover:h-[35px] hover:text-lg duration-200' >Next</button>
                </Link>
            </div>
            <div className="name region flex justify-between items-center h-20 px-5">
                <span className='capitalize text-3xl font-medium text-[#010315]'>{data.adsTitle?.split(' ')[0]}</span>
                <div className="min-w-[250px] h-[43px] rounded-[21px] border border-[#513968] flex items-center justify-between px-[10px] ">
                    <div className="flag flex gap-2">
                        <img src="/image/home/flag/UAE.png" className='h-[29px] w-[29px] rounded-full' alt="" />
                        <span className='text-xl font-medium' >{data.nationality}</span>
                    </div>
                    <div className="Region flex gap-2">
                        <span className='flex-shrink-0 text- '>Region :</span>
                        <span className='flex-shrink-0  font-medium'>{data.region}</span>
                    </div>
                </div>
            </div>
            <img src={data.profilePhoto} className='w-full h-[600px] object-cover' alt={data.adsTitle} />
            <Services data={data} />
            <About data={data} />
            <Meetwith />
            <p className='mt-3 w-full h-48 overflow-x-auto  text-sm cursor-move text-[#010315] font-medium sb px-5'>{data.description}</p>
            <ReportProfile id={id} setIsLogin={setIsLogin} />
            <div className="w-full flex justify-center gap-[8px]">
                <span>Your Rating:</span>
                <Rating
                // value={value}
                // onChange={(event, newValue) => {
                //     setValue(newValue);
                //     setReviewModal(true)
                // }} 
                />
            </div>
            <Activity id={data.id} setIsLogin={setIsLogin} />
            <div className={`flex flex-col items-center w-full gap-[18px] h-[280px] overflow-y-scroll  duration-200 sb`} >
                {
                    data?.review?.map(e => <Review name={e.username} review={e.description} title={e.title} />)
                }
            </div>
            <AQ setIsLogin={setIsLogin} id={data.id} />
            <div className={`duration-1000 flex flex-wrap gap-[35px] max-h-[500px] min-h-[100px] w-full overflow-y-scroll sb`}>
                {
                    data.qna?.map(e => <QNA profilePhoto={data.profilePhoto} question={e.question} answer={e.answer} username={e.username} />)
                }
            </div>
            <Footer/>
        </div>
    )
}

export default ProfileMobile