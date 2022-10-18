import React from 'react'

function OutCall({ data }) {
    return (
        <div className="w-[150px] mt-[10px] flex flex-col gap-[2px] text-base text-white">
            <div className="h-[30px] w-full flex rounded-t-lg overflow-hidden">
                <div className="h-full w-1/2 bg-[#513968] flex items-center justify-center">1 hr</div>
                <div className="h-full w-1/2 bg-[#946FB7] flex items-center justify-center">{data.charge?.inCall?.oneHour} {data.currencyType?.inCall}</div>
            </div>
            <div className="h-[30px] w-full flex">
                <div className="h-full w-1/2 bg-[#513968] flex items-center justify-center">2 hr</div>
                <div className="h-full w-1/2 bg-[#946FB7] flex items-center justify-center">{data.charge?.inCall?.twoHour} {data.currencyType?.inCall}</div>
            </div>
            <div className="h-[30px] w-full flex">
                <div className="h-full w-1/2 bg-[#513968] flex items-center justify-center">3 hr</div>
                <div className="h-full w-1/2 bg-[#946FB7] flex items-center justify-center">{data.charge?.inCall?.threeHour} {data.currencyType?.inCall}</div>
            </div>
            <div className="h-[30px] w-full flex rounded-b-lg overflow-hidden">
                <div className="h-full w-1/2 bg-[#513968] flex items-center justify-center">Full Night</div>
                <div className="h-full w-1/2 bg-[#946FB7] flex items-center justify-center">{data.charge?.inCall?.threeHour} {data.currencyType?.inCall}</div>
            </div>
        </div>
    )
}

export default OutCall