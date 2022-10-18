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
                <Menu goto={1} title='Manage Adverts' icon={'edit'} />
                <Menu goto={2} title='Auction in Progress' icon={'pending'} />
                <Menu goto={3} title='Payments For Advets' icon={'payments'} />
                <Menu goto={4} title='Bid Payments' icon={'rocket'} />
                <Menu goto={5} title='Payments History' icon={'bar_chart'} />
                <Menu goto={6} title='Site Analytics' icon={'analytics'} />
                <Menu goto={7} title='Profile Analytics' icon={'signal_cellular_alt'} />
                <Menu goto={8} title='Banner' icon={'pages'} />
                <Menu goto={9} title='Blacklisted Clients' icon={'person_off'} />
                <Menu goto={10} title='Support' icon={'support_agent'} />
                <Menu goto={11} title='Reported Issues' icon={'bug_report'} />
            </div>
            <div className="blue w-[90%] h-40 border mx-auto rounded-2xl bg-[#44D7FD] mt-5 flex flex-col text-white text-xl p-5">
                <span>Finding a customer takes a while,</span>
                <span>but needs seconds to lose one!</span>
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
