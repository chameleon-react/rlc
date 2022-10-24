import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAdsTitle, setPhoneNo, setEmail } from '../../../../redux/slice/adsSlice'
import { setAllow, setDisable, setError } from '../../../../redux/slice/utilSlice'
import codes from 'country-calling-code';
import validator from 'validator'
function Q1() {
    const dispatch = useDispatch()
    const { adsTitle, phoneNo, email } = useSelector(state => state.ads)
    useEffect(() => {
        if (adsTitle) {
            if (validator.isMobilePhone(phoneNo)) {
                if (validator.isEmail(email)) {
                    if (!validator.isNumeric(adsTitle)) {
                        dispatch(setAllow())
                    }
                    else {
                        dispatch(setError('numbers are not permitted in names.'))
                        dispatch(setDisable())
                    }
                } else {
                    dispatch(setError("Please Enter valid Email id"))
                    dispatch(setDisable())
                }

            } else {
                dispatch(setError("Please Enter valid Phone Number"))
                dispatch(setDisable())
            }
        } else {
            dispatch(setError("Please Enter Ads Title"))
            dispatch(setDisable())
        }
        // eslint-disable-next-line
    }, [adsTitle, phoneNo, email])
    const [code, setCode] = useState('')
    return (
        <>
            <div className="Ads flex flex-col">
                <label htmlFor="Ads">Ads Title</label>
                <input placeholder='Stacy' onChange={e => dispatch(setAdsTitle(e.target.value))} value={adsTitle} id='Ads' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type="text" />
            </div>
            <div className="Phone flex flex-col items-start">
                <label htmlFor="Phone">Phone No</label>
                <div className='flex gap-3  justify-start '>
                    <select name="" id="" className='h-10 w-24  bg-transparent border-b outline-none ' value={code} onChange={e=>{setCode(e.target.value)}}>
                        {codes.map(e=><option className='text-black' value={`+${e.countryCodes[0]}`}> {`+${e.countryCodes[0]}`} {e.country} </option>)}
                    </select>
                    
                    <input placeholder='9632587569' onChange={e => dispatch(setPhoneNo(e.target.value))} value={phoneNo} id='Phone' className='h-10 w-56 md:w-40 bg-transparent border-b outline-none' type="text" />
                
                </div>
            </div>
            <div className="Email flex flex-col">
                <label htmlFor="Email">Email Id</label>
                <input placeholder='stacy@example.com' onChange={e => dispatch(setEmail(e.target.value))} value={email} id='Email' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type="text" />
            </div>
        </>

    )
}

export default Q1