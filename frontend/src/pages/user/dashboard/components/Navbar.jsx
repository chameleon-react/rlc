import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLogin } from '../../../../redux/slice/userSlice'
import { SetLanguage, setMenuSelector, showSidebar as show } from '../../../../redux/slice/utilSlice'

function Navbar() {
    const {profilePhoto} = useSelector(state=>state.user)
    const { showSidebar, language } = useSelector(state => state.util)
    const { username } = useSelector(state => state.user)
    const dispatch = useDispatch()
    return (
        <div className="navbar border-b h-24 w-full flex items-center justify-around   bg-white">

            <div className={`${showSidebar ? 'hidden' : ''}`}>
                <span className="material-symbols-outlined" onClick={() => dispatch(show())}>menu</span>
            </div>
            <Search />
            <MenuButtons />
            <div className="language h-16 items-center  px-5 rounded-[2rem] border cursor-pointer relative">
                <select className='h-full  text-center outline-none w-36 cursor-pointer bg-transparent' value={language} onChange={e => dispatch(SetLanguage(e.target.value))}>
                    <option value="English">English</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Franch">French</option>
                </select>
                <img src="/image/common/flag/english.png" className={`${language !== 'English' && 'hidden'} h-10 w-10 top-[.8rem] left-3 absolute`} alt="" />
                <img src="/image/common/flag/arabic.png" className={`${language !== 'Arabic' && 'hidden'} h-10 w-10 top-[.8rem] left-3 absolute rounded-full`} alt="" />
                <img src="/image/common/flag/spanish.png" className={`${language !== 'Spanish' && 'hidden'} h-10 w-10 top-[.8rem] left-3 absolute rounded-full`} alt="" />
                <img src="/image/common/flag/french.png" className={`${language !== 'Franch' && 'hidden'} h-10 w-10 top-[.8rem] left-3 absolute rounded-full`} alt="" />
            </div>
            <div className="logout rounded-full border h-12 w-12 flex justify-center items-center" onClick={()=>dispatch(setIsLogin(false))}>
                <span className="material-symbols-outlined text-lg font-semibold">
                    logout
                </span>
            </div>
            <div className="profile h-16 w-52 mr-5 rounded-2xl flex">
                <div className="photo w-16 h-full ">
                    <div className="h-full w-full rounded-full bg-[#e7e7e7]">
                        <img src={profilePhoto} className='h-full w-full rounded-full' alt="" />
                    </div>
                </div>
                <div className="username w-36 h-full flex flex-col justify-center items-center ">
                    <div className="w-36 h-1/2 flex justify-center items-center">
                        <span>{username}</span>


                    </div>
                    <div className="w-36 h-1/2 flex justify-center items-center">
                        <span>Client</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar

function Search() {
    return (
        <div className="search relative hidden md:inline-block ">
            <input type="text" className='border outline-none rounded-full  h-14 pl-16 bg-[#FAFAFA]' placeholder='Search Here' />
            <img src="/image/common/search.png" alt="" className='h-6 w-6 absolute top-4 left-4' />
        </div>
    )
}

function MenuButtons() {
    const dispatch = useDispatch()
    return (
        <div className="buttons flex gap-10">
            <div className="bell relative cursor-pointer">
                <img src="/image/common/bell.png" className='h-6 w-6' alt="" />
                <span className='rounded-full bg-[#5ECFFF] h-5 w-5 absolute flex justify-center items-center -top-2 -right-1 text-white'>0</span>
            </div>
            <div className="gift relative cursor-pointer" onClick={() => { dispatch(setMenuSelector(11)) }}>
                <img src="/image/common/gift.png" className='h-6 w-6' alt="" />
                <span className='rounded-full bg-[#5ECFFF] h-5 w-5 absolute flex justify-center items-center -top-2 -right-1 text-white' >0</span>
            </div>
            <div className="verification relative cursor-pointer" onClick={() => { dispatch(setMenuSelector(15)) }}>
                <img src="/image/common/checkbox.png" className='h-6 w-6' alt="" />
                <span className='rounded-full bg-[#5ECFFF] h-5 w-5 absolute flex justify-center items-center -top-2 -right-1 text-white' >0</span>
            </div>
        </div>
    )
}