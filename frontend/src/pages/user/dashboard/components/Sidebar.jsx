import React from 'react'
import { hideSidebar, setMenuSelector } from '../../../../redux/slice/utilSlice'
import { useDispatch, useSelector } from 'react-redux'
function Sidebar() {
    const dispatch = useDispatch()
    const { showSidebar } = useSelector(state => state.util)
    return (
        <div className={`${!showSidebar && 'hidden'} sidebar min-h-screen w-64 border-r shrink-0 text-[#a5a5a5]`}>
            <div className="h-20 w-full  flex justify-around items-center">
                <div className="">
                    <img src="/image/common/logo-rounded.png" className='w-10 h-10' alt="" />
                </div>
                <div className="">
                    <h1 className='font-semibold text-xl text-black'>Red Light Club</h1>
                </div>

                <span className="material-symbols-outlined text-lg text-black" onClick={() => { dispatch(hideSidebar()) }}>
                    menu
                </span>

            </div>
            <h6 className='ml-5 font-light text-sm'>MAIN MENU</h6>
            <div className="menuselector ml-5 mt-5 flex flex-col items-start">
                <Menu goto={3} title='Home' icon={'house'} />
                <Menu goto={1} title='Manage My Adverts' icon={'edit'} />
                <Menu goto={2} title='Buy First Page Position' icon={'leaderboard'} />
                <Menu goto={11} title='Ads Analytics' icon={'analytics'} />
                {/* <Menu goto={4} title='Payments' icon={'rocket'} /> */}
                <Menu goto={5} title='Earn Free Credit' icon={'bar_chart'} />
                <Menu goto={6} title='Comments' icon={'comment'} />
                <Menu goto={7} title='Settings' icon={'settings'} />
                <Menu goto={8} title='Blacklisted Clients' icon={'person_off'} />
            </div>
            <div className="blue w-[90%] h-40 border mx-auto rounded-2xl bg-[#44D7FD] mt-5 flex flex-col text-white text-xl p-5">
                <span>Increase Your Revenue,</span>
                <span>With Red Light Club!</span>
            </div>
            <span className='text-[#A5A5A5] py-3 text-center w-full flex justify-center'>
                Made with
                <span className="material-symbols-outlined ">
                    favorite
                </span>
                by Red Light Club
            </span>
        </div>

    )
}

export default Sidebar


const Menu = ({ title, icon, goto }) => {
    const { menuSelector } = useSelector(state => state.util)
    const dispatch = useDispatch()
    return (
        <button className='text-[#A5A5A5] w-full flex  py-3 relative' onClick={() => dispatch(setMenuSelector(goto))}>
            <span className={`material-symbols-outlined mr-6 ${menuSelector === goto && 'text-[#6418C3]'}`}>
                {icon}
            </span>
            <span className={`${menuSelector === goto && 'text-[#6418C3]'}`}>
                {title}
            </span>
            {
                menuSelector === goto && <div className="h-12 w-1 rounded-2xl bg-blue-700 absolute right-0 top-0"></div>
            }

        </button>
    )
}
