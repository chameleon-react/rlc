import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setHeight, setWeight, setAge } from '../../../../redux/slice/adsSlice'
import { setAllow, setDisable, setError } from '../../../../redux/slice/utilSlice'
function Q4() {
    const dispatch = useDispatch()
    const { height, weight, age } = useSelector(state => state.ads.appearance)
    useEffect(() => {
        if (height>=100) {
            if (weight>=30) {
                if (age>=18) {
                    dispatch(setAllow())
                } else {
                    dispatch(setDisable())
                    dispatch(setError('Age restriction only allow 18 year olds or above'))
                }
            } else {
                dispatch(setDisable())
                dispatch(setError(' Enter Your Weight'))
            }
        } else {
            dispatch(setDisable())
            dispatch(setError('Enter your Height'))
        }
        // eslint-disable-next-line
    }, [height, age, weight])

    return (
        <>
            <div className="Height flex flex-col">
                <label htmlFor="Height">Height</label>
                <input placeholder='160' min={100} onChange={e => dispatch(setHeight(e.target.value))} value={height} id='Height' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type="number" />
            </div>
            <div className="Weight flex flex-col">
                <label  htmlFor="Weight">Weight in Kg</label>
                <input placeholder='55' min={45} onChange={e => dispatch(setWeight(e.target.value))} value={weight} id='Weight' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type="number" />
            </div>
            <div className="Age flex flex-col">
                <label htmlFor="Age">Age</label>
                <input placeholder='22' min={18} onChange={e => dispatch(setAge(e.target.value))} value={age} id='Age' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type="number" />
            </div>
        </>
    )
}

export default Q4