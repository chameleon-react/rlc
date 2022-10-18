import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAllow, setDisable, setError } from '../../../../redux/slice/utilSlice'
import { setIncallCurrencyType,setOutcallCurrencyType,setOutcallOneHour,setOutcallTwoHour,setOutcallThreeHour, setIncallOneHour, setIncallTwoHour, setIncallThreeHour } from '../../../../redux/slice/adsSlice'
function Q7() {
    const dispatch = useDispatch()
    
    const { inCall, outCall } = useSelector(state => state.ads.currencyType)
    const inCallCharge = useSelector(state => state.ads.charge.inCall)
    const outCallCharge = useSelector(state => state.ads.charge.outCall)
    useEffect(() => {
        if(inCall&&outCall){
            dispatch(setAllow())
        }else{
            dispatch(setDisable())
            dispatch(setError('Please select Some Currency'))
        }
        // eslint-disable-next-line
    }, [inCall,outCall])
    return (
        <>
            <div className=" flex gap-5">
                <div className=" flex flex-col">
                    <select onChange={e => dispatch(setOutcallCurrencyType(e.target.value))} value={outCall} id='' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' placeholder='OutCall Currency' type="text" >
                        <option className='text-black' value="">OutCall Currency</option>
                        <option className='text-black' value="AED">UAE Dirham (AED)</option>
                        <option className='text-black' value="USD"> United States Dollar (USD)</option>
                        <option className='text-black' value="BHD">Bahraini Dinar (BHD)</option>
                        <option className='text-black' value="GBP">British Pound (GBP)</option>
                        <option className='text-black' value="HKD">Hong Kong Dollar (HKD)</option>
                        <option className='text-black' value="EUR">Euro (EUR)</option>
                    </select>
                </div>
                <div className=" flex flex-col">
                    <select onChange={e => dispatch(setIncallCurrencyType(e.target.value))} value={inCall} id='' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' placeholder='InCall Currency' type="text" >
                        <option className='text-black' value="">OutCall Currency</option>
                        <option className='text-black' value="AED">UAE Dirham (AED)</option>
                        <option className='text-black' value="USD"> United States Dollar (USD)</option>
                        <option className='text-black' value="BHD">Bahraini Dinar (BHD)</option>
                        <option className='text-black' value="GBP">British Pound (GBP)</option>
                        <option className='text-black' value="HKD">Hong Kong Dollar (HKD)</option>
                        <option className='text-black' value="EUR">Euro (EUR)</option>
                    </select>
                </div>
            </div>

            <div className=" flex gap-5">
                <div className=" flex flex-col">
                    <input value={outCallCharge.oneHour} onChange={e => dispatch(setOutcallOneHour(e.target.value))} id='' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' placeholder='One Hour OutCall' type="number" />
                </div>
                <div className=" flex flex-col">
                    <input value={inCallCharge.oneHour} onChange={e => dispatch(setIncallOneHour(e.target.value))} id='' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' placeholder='One Hour InCall' type="number" />
                </div>
            </div>

            <div className=" flex gap-5">
                <div className=" flex flex-col">
                    <input value={outCallCharge.twoHour} onChange={e => dispatch(setOutcallTwoHour(e.target.value))} id='' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type="number" placeholder='Two Hour OutCall' />
                </div>
                <div className=" flex flex-col">
                    <input value={inCallCharge.twoHour} onChange={e => dispatch(setIncallTwoHour(e.target.value))} id='' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type="number" placeholder='Two Hour InCall' />
                </div>
            </div>

            <div className=" flex gap-5">
                <div className=" flex flex-col">
                    <input value={outCallCharge.threeHour} onChange={e => dispatch(setOutcallThreeHour(e.target.value))} id='' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type="number" placeholder='Full Night OutCall' />
                </div>
                <div className=" flex flex-col">
                    <input value={inCallCharge.threeHour} onChange={e => dispatch(setIncallThreeHour(e.target.value))} id='' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type="number" placeholder='Full Night InCall' />
                </div>
            </div>

            {/* for full night */}

            {/* <div className=" flex gap-5">
                <div className=" flex flex-col">
                    <input id='' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type="number" placeholder='m' />
                </div>
                <div className=" flex flex-col">
                    <input id='' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type="number" placeholder='k' />
                </div>
            </div> */}

        </>
    )
}

export default Q7