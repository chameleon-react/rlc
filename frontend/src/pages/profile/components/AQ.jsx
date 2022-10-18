import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import backendIP from '../../../backendIP'

function AQ({setIsLogin,id}) {
    const {username,isLogin} = useSelector(state=>state.user)
    const [question, setQuestion] = useState('')
    const submit = ()=>{
        if(isLogin){
            axios.post(`${backendIP}qna`,{question,id,username}).then(res=>{
                if(res.data){
                    window.alert("You are Asked")
                }else window.alert("Somthing is error")
            })
        }else setIsLogin(false)
    }
    return (
        <form className="w-[622px] flex justify-center relative" onSubmit={e=>{e.preventDefault()}}>
            <input type="text" className='w-[571px] h-[45px] rounded-[10px] bg-[#CA9ED2] outline-none border-[#513968] border pl-[25px] text-white placeholder:text-white' onChange={e=>{setQuestion(e.target.value)}} placeholder='Ask me a question !' />
            {
                question && <button className='absolute right-10 inset-y-2 my-0 text-white border duration-200 hover:border-2 h-[30px] px-3 border-[#513968] rounded-lg' onClick={submit}>Submit</button>
            }
        </form>
    )
}

export default AQ