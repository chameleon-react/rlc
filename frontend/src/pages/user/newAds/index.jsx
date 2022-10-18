import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { next, back } from '../../../redux/slice/questionSlice'
import LinearProgress from '@mui/material/LinearProgress'
import { setDisable, setError } from '../../../redux/slice/utilSlice'
import Q1 from './components/Q1'
import Q2 from './components/Q2'
import Q3 from './components/Q3'
import Q4 from './components/Q4'
import Q5 from './components/Q5'
import Q6 from './components/Q6'
import Q7 from './components/Q7'
import Q8 from './components/Q8'
import Q9 from './components/Q9'
import axios from 'axios'
import backendIP from '../../../backendIP'



import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Q10 from './components/Q10'


function NewAds() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { questionNo, totalQuestion } = useSelector(state => state.question)
    const { disable, error } = useSelector(state => state.util)
    const ads = useSelector(state => state.ads)
    const { username } = useSelector(state => state.user)
    return (
        <div className='flex h-screen text-white'>
            <div className="hidden lg:inline-block w-[40%] bg-no-repeat bg-cover" style={{ backgroundImage: ('url("/image/auth/catWomen.webp")') }}>
            </div>
            <div className="w-full h-full lg:w-[60%] bg-no-repeat bg-cover" style={{ backgroundImage: ('url("/image/auth/catWomen2.webp")') }}>
                <div className="h-[80%]  w-full flex flex-col justify-center gap-10 items-center">
                    {questionNo === 1 && <Q1 />}
                    {questionNo === 2 && <Q2 />}
                    {questionNo === 3 && <Q3 />}
                    {questionNo === 4 && <Q4 />}
                    {questionNo === 5 && <Q5 />}
                    {questionNo === 6 && <Q6 />}
                    {questionNo === 7 && <Q7 />}
                    {questionNo === 8 && <Q8 />}
                    {questionNo === 9 && <Q9 />}
                    {questionNo === 10 && <Q10 />}

                </div>
                <div className="h-[10%]">

                    {
                        questionNo > 5 && <div className=" h-full flex justify-center items-end">
                            <img src="/image/common/almost-there.png" className='h-14' alt="" />
                        </div>
                    }
                </div>
                <div className="h-[1%] w-full text-red-600">
                    <LinearProgressWithLabel color='inherit' className='h-full w-full ' variant="determinate" value={questionNo / totalQuestion * 100} />
                </div>
                <div className="h-[9%] px-10 flex items-center justify-between">
                    {
                        questionNo === 1 && <Link to={'/dashboard'} className='border h-10  px-6 rounded-full md:text-xl   border-red-500 shadow-md shadow-red-600 flex justify-center items-center'>Go Back</Link >
                    }

                    {
                        questionNo !== 1 && <button className='border h-10  px-6 rounded-full md:text-xl   border-red-500 shadow-md shadow-red-600' onClick={() => {
                            dispatch(back())
                        }}>Back</button>
                    }

                    {
                        questionNo !== totalQuestion && <button className='border h-10  px-6 rounded-full md:text-xl   border-red-500 shadow-md shadow-red-600' onClick={() => {
                            if (!disable) {
                                dispatch(next());
                                dispatch(setDisable())
                                dispatch(setError('Some thing is error'))
                            } else window.alert(error)
                        }}>Next</button>
                    }
                    {
                        questionNo === totalQuestion && <button className='border h-10  px-6 rounded-full md:text-xl   border-red-500 shadow-md shadow-red-600' onClick={() => {
                            axios.post(`${backendIP}ads/`, { username, ...ads }).then(res => {
                                if (res.data) {
                                    window.alert("Ads is successfully added")
                                    navigate('/dashboard')
                                } else {
                                    window.alert("Somthing is error")
                                }
                            })
                        }}>Done</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default NewAds





function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }} >
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography className='text-white' style={{ color: 'white' }} variant="body2" color="text.secondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}