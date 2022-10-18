import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMenuSelector } from '../../../../../redux/slice/utilSlice'

function GroupButton() {
    const {verificationCount} = useSelector(state=>state.util)
    const dispatch = useDispatch()
    return (
        <div className="secondline flex gap-5 flex-wrap">
            <div onClick={() => dispatch(setMenuSelector(12))}>
                <BigButton title={`Verification`} count={verificationCount} color='6418C3' />
            </div>

            <div onClick={() => dispatch(setMenuSelector(14))}>
                <BigButton title={'Customers'} color='5ECFFF' />
            </div>
            <div onClick={() => dispatch(setMenuSelector(15))}>
                <BigButton title={'Live Spots'} color='E328AF' />
            </div>
        </div>
    )
}

export default GroupButton

function BigButton({ title, color,count }) {
    return (
        <button className={`h-10  px-6 rounded-full md:text-xl border-2`} style={{ borderColor: `#${color}` }}>
            {title} {count && <span className='text-red-500 font-medium'>{count}</span>}
        </button>
    )
}