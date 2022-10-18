import React from 'react'
import { useNavigate } from 'react-router-dom'
function GroupButton() {
    const navigate = useNavigate()
    return (
        <div className="secondline flex gap-5 flex-wrap">
            <div onClick={() => navigate('/ads/new')}>
                <BigButton title={'Create New Ads'} color='6418C3' />
            </div>

            <div onClick={() => navigate('/static/faq')}>
                <BigButton title={'FAQ'} color='5ECFFF' />
            </div>
            <div onClick={() => { }}>
                <BigButton title={'Help'} color='E328AF' />
            </div>
        </div>
    )
}

export default GroupButton

function BigButton({ title, color }) {
    return (
        <button className={`h-10  px-6 rounded-full md:text-xl border-2`} style={{ borderColor: `#${color}` }}>
            {title}
        </button>
    )
}