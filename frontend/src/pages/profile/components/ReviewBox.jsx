import axios from 'axios'
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import backendIP from '../../../backendIP'
import LoginModal from './LoginModal'
function ReviewBox({setReviewModal,value,id}) {
    const [islogin, setIsLogin] = useState(true)
    const navigate = useNavigate()
    const {username,isLogin} = useSelector(state=>state.user)
    const [review, setReview] = useState({
        title:'',
        description:''
    })
    const submitReview = ()=>{
        if(isLogin){
            if(review.title && review.description && id){
                axios.post(`${backendIP}review`,{username,review,id}).then(res=>{
                    if(res.data){
                        window.alert('Review is Created')
                    }else window.alert('Somthing is error')
                })
            }
        } else setIsLogin(false)
    }
    return (
        <div className="fixed inset-0 m-auto h-80 w-[600px] border bg-white z-50 rounded-xl p-5" >
            <div className="w-full h-1/5 flex items-center justify-between text-xl border-b">
                <span>Write Your Reviews</span>
                <AiOutlineClose onClick={() => { setReviewModal(false) }} />
            </div>
            <div className="w-full h-3/5 flex flex-col gap-5 mt-5">
                <input type="text" className='h-10 w-full border px-2 outline-none rounded-lg capitalize' placeholder='Review Title' onChange={e=>setReview({...review,title:e.target.value})}/>
                <textarea className='w-full h-[calc(100%-4rem)] border outline-none rounded-lg p-2 ' placeholder='Review Description' onChange={e=>setReview({...review,description:e.target.value})}/>
            </div>
            <div className="w-full h-1/5 ">
                <button className='border px-3 py-1 float-right rounded-lg border-[#e8b7e5]' onClick={submitReview}>Submit</button>
            </div>
            {
               !islogin && <LoginModal setIsLogin={setIsLogin} />
            }
        </div>
    )
}

export default ReviewBox