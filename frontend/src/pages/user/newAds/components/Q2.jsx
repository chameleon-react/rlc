import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setIntroduction } from '../../../../redux/slice/adsSlice'
import { setDisable, setAllow, setError } from '../../../../redux/slice/utilSlice'
function Q2() {
    const dispatch = useDispatch()
    const { introduction } = useSelector(state => state.ads)

    useEffect(() => {
        if (introduction) {
            dispatch(setAllow())
        } else {
            dispatch(setError(' Please enter your introduction '))
            dispatch(setDisable())
        }
        // eslint-disable-next-line
    }, [introduction])

    const intro = 'I’m Stacy, born on 14 April 1998, brought up and raised in a well-to-do Christian family who is fair and tall. I’ve completed my qualification at the Moscow state university, Russia in interior designing. As I had a keen interest in the modelling career I luckily had received opportunities to endorse various brands and have done various commercials ads as well where I was one amongst to walk on the ramp for Louis Vuitton in 2018.'
    return (

        <div className="introduction flex flex-col">
            <label htmlFor="introduction">Introduction</label>
            <textarea placeholder={intro} cols="10" onChange={e => dispatch(setIntroduction(e.target.value))} value={introduction} id='introduction' className='h-36 md:w-64 bg-transparent border-b outline-none' type="text" />
        </div>

    )
}

export default Q2