import { useState, useEffect } from "react"
const Screen3 = () => {
    const [percentage, setPercentage] = useState(0)
    const scrollHandler = (e) => {
        const element = e.target
        const totalHeight = element.scrollHeight
        const currentHeight = element.scrollTop + element.clientHeight
        const percentage = Math.floor(currentHeight / totalHeight * 100)
        setPercentage(percentage)
        console.log(percentage)
    }
    return (
        <div className="h-[1080px] overflow-y-scroll sc bg-[#010315]" onScroll={scrollHandler}>
            <div className="h-[2000px] relative">
                <div className="h-[1080px] sticky top-0  flex">
                    <Profile />
                    <div className="right w-1/2 h-full">
                        <Plans percentage={percentage} />
                        <div className="h-1/2 w-full   text-white lg:px-32 gap-10 ">
                            <h1 className="text-center">Find the best advertiser and have a good time</h1>
                            <p className="mt-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique odio deserunt quas molestiae reprehenderit dolores voluptatum dolorem voluptas, eveniet, sint laudantium provident incidunt nam, nulla aliquid ullam. Vel, dolores explicabo?</p>
                            <button className='w-[204px] h-[46px] bg-[#06175D] rounded-3xl float-right mt-10'>View More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Screen3


const Plans = ({ percentage }) => {
    return (
        <div className="h-1/2 w-full flex justify-center items-center">
            <div className="w-[409px] h-[409px] relative flex justify-center items-center">
                <div className="platinum absolute top-0 right-0 z-50 w-[105px] h-[105px] flex justify-center items-center">
                    <div className={`duration-200 ${percentage < 69 ? "w-[105px] h-[105px] rounded-full bg-blue-800" : 'w-[50px] h-[50px] rounded-full bg-blue-800'}  flex justify-center items-center`}>
                        <h2 className="text-white">Platinum</h2>
                    </div>
                </div>

                <div className="gold absolute bottom-0 right-0 z-50 w-[105px] h-[105px] flex justify-center items-center">
                    <div className={`duration-200 ${percentage >= 69 && percentage <= 84 ? "w-[105px] h-[105px] rounded-full bg-[#E5AF2D]" : 'w-[50px] h-[50px] rounded-full bg-[#E5AF2D]'} flex justify-center items-center`}>
                        <h2 className="text-white">Gold</h2>
                    </div>
                </div>

                <div className="silver absolute top-0 left-0 z-50 w-[105px] h-[105px] flex justify-center items-center">
                    <div className={`duration-200 ${percentage > 84 ? "w-[105px] h-[105px] rounded-full bg-white" : 'w-[50px] h-[50px] rounded-full bg-white'} flex justify-center items-center`}>
                        <h2 className="">Silver</h2>
                    </div>
                </div>

                <img src="/image/home/rounds.png" className="w-full h-full absolute" alt="" />
                <h2 className="text-3xl font-semibold text-white">Search by Plans</h2>
            </div>
        </div>
    )
}



const Profile = () => {
    return (

        <div className="w-full lg:w-1/2 flex flex-wrap gap-10 justify-center items-center overflow-x-scroll sc">
            <div className="flex flex-col gap-10 justify-center">
                <img src="/image/home/profile/1.png" className='w-[239px] h-[391px] ' alt="" />
                <img src="/image/home/profile/2.png" className='w-[239px] h-[391px] ' alt="" />
            </div>
            <div className="flex flex-col gap-10 lg:mt-10 justify-center">
                <img src="/image/home/profile/3.png" className='w-[239px] h-[391px] ' alt="" />
                <img src="/image/home/profile/4.png" className='w-[239px] h-[391px] ' alt="" />
            </div>
        </div>
        // <div className="w-1/2 flex  gap-10 justify-center items-center">
        //     <div className="flex flex-col gap-10 justify-center">
        //         <img src="/image/home/profile/1.png" className='w-[239px] h-[391px] ' alt="" />
        //         <img src="/image/home/profile/2.png" className='w-[239px] h-[391px] ' alt="" />
        //     </div>
        //     <div className="flex flex-col gap-10 mt-10 justify-center">
        //         <img src="/image/home/profile/3.png" className='w-[239px] h-[391px] ' alt="" />
        //         <img src="/image/home/profile/4.png" className='w-[239px] h-[391px] ' alt="" />
        //     </div>
        // </div>
    )
}