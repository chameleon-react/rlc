import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import validator from 'validator'
import backendIP from '../../backendIP'
import NavBar from '../common/NavBar'
import Rating from '@mui/material/Rating'
import Review from './components/Review'
import QNA from './components/QNA'
import Services from './components/Services'
import Activity from './components/Activity'
import Footer from '../common/Footer'
import ReportProfile from './components/ReportProfile'
import AQ from './components/AQ'
import ReviewBox from './components/ReviewBox'
import LoginModal from './components/LoginModal'
import Meetwith from './components/Meetwith'
import About from './components/About'
import Name from './components/Name'
import Contact from './components/Contact'
import ProfileMobile from './mobile'

function Profile() {
    const [isLogin, setIsLogin] = useState(true)
    const [reviewModal, setReviewModal] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const [value, setValue] = useState(0);
    const [mainPhoto, setMainPhoto] = useState('')
    useEffect(() => {
        if (validator.isNumeric(id)) {
            axios.get(`${backendIP}ads/profile`, { params: { id } }).then(res => {
                res.data ? setData(res.data) : window.alert(`${id} is not exist`)
                res.data && setMainPhoto(res.data.profilePhoto)
            })
        } else {
            window.alert('Id is no valid')
            navigate('/')
        }
        // eslint-disable-next-line
    }, [id])
    const [scroll, setScroll] = useState(false)
    
    return (

        <>
            <div className={`hidden lg:block`}>
                {reviewModal && <ReviewBox setReviewModal={setReviewModal} value={value} />}

                <NavBar />
                <div className=" pb-[60px] h-full " style={{ background: 'transparent linear-gradient(180deg, #A18CD1 0%, #FBC2EB 100%) 0% 0% no-repeat padding-box' }}>
                    <div className="mx-auto">
                        <div className="adsbanner h-[144px] max-w-[1244px] bg-white rounded-t-[20px] mx-auto"></div>
                        <div className="h-12 max-w-[1244px] bg-[#513968] px-[18px] flex justify-between items-center text-white text-sm mx-auto">
                            {
                                Number(id) === 1 ? <button className='w-[81px] h-[29px] rounded-2xl bg-[#946FB7] hover:w-[90px] hover:h-[35px] hover:text-lg duration-200' >Previous</button> : <Link to={`/profile/${Number(id) - 1}`}>
                                    <button className='w-[81px] h-[29px] rounded-2xl bg-[#946FB7] hover:w-[90px] hover:h-[35px] hover:text-lg duration-200' >Previous</button>
                                </Link>
                            }
                            <Contact data={data} />
                            <Link to={`/profile/${Number(id) + 1}`}>
                                <button className='w-[81px] h-[29px] rounded-2xl bg-[#946FB7] hover:w-[90px] hover:h-[35px] hover:text-lg duration-200' >Next</button>
                            </Link>
                        </div>
                        <div className="w-full min-h-[835px] flex justify-center flex-wrap">
                            <div className="block lg:hidden bg-white w-full my-5">
                                <Name data={data} />
                                <span className='text-sm font-light text-[#010315]'>Last Seen Online: 27/09/2022</span>
                            </div>
                            <div className="left w-[622px] flex-shrink-0">
                                <img src={mainPhoto} className='w-full h-[771px] object-cover' alt={data.adsTitle} />
                                <div className="w-full relative -top-12 flex justify-center px-3">
                                    <img src={data.profilePhoto}  alt="" className='w-28 h-28 object-cover rounded-md' onClick={()=>setMainPhoto(data.profilePhoto)}/>
                                    {
                                        data.gallery?.map((e,index)=>index < 6 && <img src={e} alt="" className='w-28 h-28 object-cover rounded-md' onClick={()=>setMainPhoto(e)}/>)
                                    }
                                </div>
                            </div>
                            <div className="right w-[622px] min-h-[835px] bg-white rounded-b-[20px] px-5 pt-2 relative flex-shrink-0">
                                <ReportProfile id={data.id} setIsLogin={setIsLogin} />
                                <div className="hidden lg:block">
                                    <Name data={data} />
                                    <span className='text-sm font-light text-[#010315]'>Last Seen Online: 27/09/2022</span>
                                </div>
                                <Services data={data} />
                                <About data={data} />
                                <Meetwith />
                                <p className='mt-3 w-full h-28 overflow-x-auto  text-sm cursor-move text-[#010315] font-medium sb'>{data.description}</p>
                            </div>
                        </div>
                        <div className="flex justify-center mt-[11px] flex-wrap">
                            <div className="w-[622px] flex justify-center gap-[8px]">
                                <span>Your Rating:</span>
                                <Rating
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                        setReviewModal(true)
                                    }} />
                            </div>
                            <AQ setIsLogin={setIsLogin} id={data.id} />
                        </div>
                        <div className="flex justify-center flex-wrap-reverse mt-[25px] gap-y-3">
                            <div className="w-[622px] flex flex-col items-center ">
                                <Activity id={data.id} setIsLogin={setIsLogin} />
                                <div className={`${!scroll ? 'mt-[0px]' : 'mt-[25px]'}   flex flex-col items-center w-[85%] gap-[18px] h-[280px] overflow-y-scroll  duration-200 sb`} onScroll={() => { setScroll(false) }}>
                                    {
                                        data?.review?.map(e => <Review name={e.username} review={e.description} title={e.title} />)
                                    }
                                </div>
                            </div>
                            <div className="w-[622px] flex flex-col">
                                <div className={`w-full h-[34px] duration-500 flex items-center ${scroll ? 'bg-[#513968]' : 'bg-transparent'}`}>
                                    <span className={`text-white text-xl  font-medium `}>Questions</span>
                                </div>
                                <div className={`${scroll ? 'mt-0' : 'mt-[30px]'} duration-1000 flex flex-wrap gap-[35px] h-[500px] w-full overflow-y-scroll sb`} onScroll={() => { setScroll(true) }}>
                                    {
                                        data.qna?.map(e => <QNA profilePhoto={data.profilePhoto} question={e.question} answer={e.answer} username={e.username} />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    !isLogin && <LoginModal setIsLogin={setIsLogin} />
                }
                <Footer />
            </div>
            <ProfileMobile data={data} id={id} setIsLogin={setIsLogin} />
        </>
    )
}

export default Profile
