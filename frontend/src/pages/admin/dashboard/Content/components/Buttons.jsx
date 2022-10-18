import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { setMenuSelector } from '../../../../../redux/slice/utilSlice'

function Buttons() {
    const {verificationCount} = useSelector(state=>state.util)
    const dispatch = useDispatch()
    return (
        <div className='w-full flex gap-10 mt-10'>
            <div className="Actice Ads h-48 w-80 bg-white rounded-2xl">
                <Button color={'#6418C3'} icon='live_tv' title={'Active Ads'} amount={80} image='/image/common/graph/graph1.png' />
                <div className="w-full h-[30%] bg-[#6418C3] rounded-b-2xl flex items-center pl-5">
                    <MonthlyProgress progress={18} />
                </div>
            </div>

            <div className="Actice Ads h-48 w-80 bg-white rounded-2xl">
                <Button color={'#5ECFFF'} icon='block' title={'Inactive Ads'} amount={151} image='/image/common/graph/graph2.png' />
                <div className="w-full h-[30%] bg-[#5ECFFF] rounded-b-2xl flex items-center pl-5">
                    <MonthlyProgress progress={12} />
                </div>
            </div>

            <div className="Actice Ads h-48 w-80 bg-white rounded-2xl" onClick={() => dispatch(setMenuSelector(12))}>
                <Button color={'#E328AF'} icon='verified' title={'Pending Verification'} amount={verificationCount} image='/image/common/graph/graph3.png' />
                <div className="w-full h-[30%] bg-[#E328AF] rounded-b-2xl flex items-center pl-5">
                    <MonthlyProgress progress={15} />
                </div>
            </div>

        </div>
    )
}

export default Buttons


function MonthlyProgress({ progress }) {
    return (
        <>
            <div className="">
                <img src="/image/common/up.png" className='w-5 h-5' alt="" />
            </div>
            <div className="pl-5 text-white">
                <span> + </span>
                <span className='font-semibold text-lg'> {progress} % </span>
                <span>than last</span>
                <br />
                <span>Month</span>
            </div>
        </>
    )
}


function Button({ color, icon, title, amount, image }) {
    return (
        <div className="w-full h-[70%] rounded-t-2xl flex p-6">
            <div className="w-[60%]  flex flex-col gap-5">
                <div className="Active Ads flex items-center gap-5">
                    <span className="material-symbols-outlined " style={{ color: color }}>
                        {icon}
                    </span>
                    <span>{title}</span>
                </div>
                <div className="">
                    <span className='font-bold text-2xl'>{amount}</span>
                </div>
            </div>
            <div className="w-[40%] flex justify-center items-center">
                <img src={image} className='w-full max-h-full' alt="" />
            </div>
        </div>
    )
}