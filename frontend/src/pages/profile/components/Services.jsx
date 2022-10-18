import React, { useEffect } from 'react'
import { useState } from 'react'

function Services({ data }) {
    const [serviceKeys, setServiceKeys] = useState([])
    useEffect(() => {
        data.service && setServiceKeys(Object.keys(data?.service?.select))
    }, [data])
    const check = k => data.service?.select[k] === true
    const notChecked = k => data.service?.select[k] === false

    return (
        <div className="w-full h-[276px] bg-[#D2A9DF] mt-3 rounded-2xl overflow-hidden border border-[#513968]">
            <div className="w-full h-[35px] bg-[#513968] flex">
                <div className="flex justify-center items-center gap-3 w-[220px] h-full" >
                    <span className='text-lg font-medium text-white'>I Do Provide</span>
                    <img src="/icon/tick.png" alt="" />
                </div>
                <div className="flex justify-center items-center gap-3 w-[calc(100%-220px)] h-full">
                    <span className='text-lg font-medium text-white'>I Don't Provide</span>
                    <img src="/icon/cross.png" alt="" />
                </div>
            </div>
            <div className="w-full h-[calc(100%-35px)] flex divide-x divide-[#513968]">
                <div className="w-[220px] h-full flex flex-col gap-3 mt-3 px-3">
                    {
                        serviceKeys.filter(e => check(e)).map((e, index) =>
                            <div key={index} className='w-full flex justify-between items-center '>
                                {e === 'CIM_ComeInMouth' ? <span className='text-sm font-light'>C I M</span> :
                                    e === 'COB_ComeOnBody' ? <span className='text-sm font-light'>C O B</span> :
                                        e === 'OWO_OralWithoutCondom' ? <span className='text-sm font-light'>O W O</span> : <span className='text-sm font-light'>{`${e.replace(/([A-Z])/g, " $1").charAt(0).toUpperCase()}${e.replace(/([A-Z])/g, " $1").slice(1)}`}</span>}
                                <span className='text-sm font-light'>{data.serviceCharge[e] || 'Not Specified'}</span>
                            </div>
                        )
                    }
                </div>
                <div className="w-[calc(100%-220px)] h-full flex flex-wrap gap-y-3 px-3 overflow-y-scroll sc">
                    {
                        serviceKeys.filter(e => notChecked(e)).map((e, index) =>
                            <div key={index} className='w-1/3 flex-shrink-0  '>
                                {e === 'CIM_ComeInMouth' ? <span className='text-sm font-light'>C I M</span> :
                                    e === 'COB_ComeOnBody' ? <span className='text-sm font-light'>C O B</span> :
                                        e === 'OWO_OralWithoutCondom' ? <span className='text-sm font-light'>O W O</span> : <span className='text-sm font-light'>{`${e.replace(/([A-Z])/g, " $1").charAt(0).toUpperCase()}${e.replace(/([A-Z])/g, " $1").slice(1)}`}</span>}
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Services