
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setEye, setHair } from '../../../../redux/slice/adsSlice'
import { setAllow, setDisable, setError } from '../../../../redux/slice/utilSlice'
function Q5() {
    const dispatch = useDispatch()
    const { eye, hair, measurement } = useSelector(state => state.ads.appearance)

    useEffect(() => {
        if (eye) {
            if (hair) {
                if (measurement) {
                    dispatch(setAllow())
                } else {
                    dispatch(setDisable())
                    dispatch(setError('Enter your measurement'))
                }
            } else {
                dispatch(setDisable())
                dispatch(setError('Enter your Hair property'))
            }
        } else {
            dispatch(setDisable())
            dispatch(setError('Enter your Eye Property'))
        }
        // eslint-disable-next-line
    }, [eye, hair, measurement])


    return (
        <div className='w-80 h-full flex flex-col justify-center gap-10 items-start'>
            <div className="Eye flex flex-col">
                <label htmlFor="Eye">Eye Color</label>
                <select placeholder='Black' onChange={e => dispatch(setEye(e.target.value))} value={eye} id='Eye' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type="text" >
                    <option className='text-black' value="">Select Your Eye color</option>
                    <option className='text-black' value="Brown">Brown</option>
                    <option className='text-black' value="Blue">Blue</option>
                    <option className='text-black' value="Hazel">Hazel</option>
                    <option className='text-black' value="Amber">Amber</option>
                    <option className='text-black' value="Green">Green</option>
                    <option className='text-black' value="Gray">Gray</option>
                </select>
            </div>
            <div className="Hair flex flex-col">
                <label htmlFor="Hair">Hair Color</label>
                <select placeholder='Brown' onChange={e => dispatch(setHair(e.target.value))} value={hair} id='Hair' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type="text" >\
                    <option className='text-black' value="">Select Your Hair color</option>
                    <option className='text-black' value="Black">Black</option>
                    <option className='text-black' value="Brown">Brown</option>
                    <option className='text-black' value="Blond">Blond</option>
                    <option className='text-black' value="White/Gray">White/Gray</option>
                    <option className='text-black' value="Red">Red</option>
                </select>
            </div>
            <div className="Measurments flex flex-col ">
                <label htmlFor="Measurments">Measurments</label>
                <div className="flex gap-12">
                    <input type="number" max={99} className='h-10 w-10 bg-transparent border-b outline-none text-center' />
                    <input type="number" max={99} className='h-10 w-10 bg-transparent border-b outline-none text-center' />
                    <input type="number" max={99} className='h-10 w-10 bg-transparent border-b outline-none text-center' />
                </div>
                {/* <input onChange={e => dispatch(setMeasurement(e.target.value))} value={measurement} id='Measurments' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type="text" /> */}
            </div>
        </div >
    )
}

export default Q5