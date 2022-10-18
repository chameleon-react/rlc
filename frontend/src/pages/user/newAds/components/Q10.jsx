import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setServiceCharge } from '../../../../redux/slice/adsSlice'
import { setAllow } from '../../../../redux/slice/utilSlice'

function Q10() {
    const dispatch = useDispatch()
    const [serviceKey, setserviceKey] = useState([])
    const {select} = useSelector(state=>state.ads.service)
    const {serviceCharge} = useSelector(state=>state.ads)

    useEffect(() => {
        setserviceKey(Object.keys(select))
    }, [select])
    
    const check = k => select[k] === true
    return (
        <div>
            <div class=" flex flex-col items-center gap-10">
                <select id="" className="h-10 w-80 md:w-64 bg-transparent border-b outline-none" placeholder="Service Currency" type="text" onChange={evt=>{dispatch(setServiceCharge({currency:evt.target.value}));dispatch(setAllow())}}>
                    <option class="text-black" value="">Service Currency</option>
                    <option class="text-black" value="AED">UAE Dirham (AED)</option>
                    <option class="text-black" value="USD"> United States Dollar (USD)</option>
                    <option class="text-black" value="BHD">Bahraini Dinar (BHD)</option>
                    <option class="text-black" value="GBP">British Pound (GBP)</option>
                    <option class="text-black" value="HKD">Hong Kong Dollar (HKD)</option>
                    <option class="text-black" value="EUR">Euro (EUR)</option>
                </select>
                <div className="flex w-[45rem] flex-wrap justify-center gap-10 overflow-scroll max-h-[50vh] sc">

                {
                    serviceKey.filter(e => check(e)).map(e=>    
                        <div class=" flex flex-col h-10 w-80 md:w-64">
                            <input value={serviceCharge[e]} onChange={evt=>dispatch(setServiceCharge({[e]:evt.target.value}))} id="" class="h-full w-full bg-transparent border-b outline-none" type="number" placeholder={`${e.replace(/([A-Z])/g, " $1").charAt(0).toUpperCase()}${e.replace(/([A-Z])/g, " $1").slice(1)} Charge`}  />
                        </div>
                    )
                }
                </div>
            </div>
            <div className="">

            </div>
        </div>
    )
}

export default Q10