import { Link } from "react-router-dom"

const Screen4 = () => {
    return (
        <div className="screen4 min-h-screen bg-[#D3135A] w-full flex flex-col items-center pt-[45px] text-white gap-5 pb-5 ">
            <h2 className='text-4xl font-semibold text-center'>Ready to become an Advertiser?</h2>
            <h3 className='text-lg text-center'>Choose the best plan and get listed among the top advertisers</h3>
            <div className="w-[1120px] h-[627px]  rounded-xl hidden lg:flex text-black overflow-hidden ">
                <div className="h-full w-2/6 bg-white">
                    <div className="w-full h-[14%] flex pl-14 items-center text-2xl font-medium">Benifits</div>
                    <div className="w-full h-[7.14%] flex pl-14 items-center text-xl ">Pictures</div>
                    <div className="w-full h-[7.14%] flex pl-14 items-center text-xl">Video</div>
                    <div className="w-full h-[7.14%] flex pl-14 items-center text-xl">Verified</div>
                    <div className="w-full h-[7.14%] flex pl-14 items-center text-xl">Chat Support</div>
                    <div className="w-full h-[7.14%] flex pl-14 items-center text-xl">Top Spot</div>
                    <div className="w-full h-[7.14%] flex pl-14 items-center text-xl">Social Media</div>
                    <div className="w-full h-[7.14%] flex pl-14 items-center text-xl">Email Newsletters</div>
                    <div className="w-full h-[7.14%] flex pl-14 items-center text-xl">View Limit</div>
                    <div className="w-full h-[7.14%] flex pl-14 items-center text-xl">Traffic Booster</div>
                    <div className="w-full h-[7.14%] flex pl-14 items-center text-xl">Ads Available</div>
                    <div className="w-full h-[7.14%] flex pl-14 items-center text-xl">Position</div>
                </div>
                <Free />
                <Silver />
                <Gold />
                <Platinum />
            </div>
            <div className="bg-[#D3135A] min-h-screen w-full flex lg:hidden flex-col items-center gap-10 py-10">
                <Card plan='Free' pictures={'3'} video={'No'} verified={'No'} chat={'No'} spot={'No'} social={'No'} newsLetter={'No'} view={'50'} traffic={'No'} Ads={'Unlimited'} position={'Free Ads Selection'} />
                <Card plan='Silver' pictures={'Unlimited'} video={''} verified={''} chat={''} spot={''} social={''} newsLetter={'No'} view={'Unlimited'} traffic={'Moderate'} Ads={16} position={'Lower'} />
                <Card plan='Gold' pictures={'Unlimited'} video={''} verified={''} chat={''} spot={''} social={''} newsLetter={''} view={'Unlimited'} traffic={'Middle'} Ads={8} position={'Middle'} />
                <Card plan='Platinum' pictures={'Unlimited'} video={''} verified={''} chat={'24/7'} spot={''} social={''} newsLetter={''} view={'Unlimited'} traffic={'Very High'} Ads={3} position={'Top'} />
            </div>
        </div>
    )
}

const Card = ({ plan, pictures, video, verified, chat, spot, social, newsLetter, view, traffic, Ads, position }) => {
    return (
        <div className="h-[40rem] w-[23rem] border flex flex-col items-center justify-center gap-2 bg-white text-black rounded-xl shadow-md">
            <h3 className="text-4xl font-semibold py-3">{plan}</h3>
            <h4 className="text-xl font-medium">{pictures} Pictures</h4>
            <h4 className="text-xl font-medium">{video} Video</h4>
            <h4 className="text-xl font-medium">{verified} Verified</h4>
            <h4 className="text-xl font-medium">{chat} Chat Support</h4>
            <h4 className="text-xl font-medium">{spot} Top Spot</h4>
            <h4 className="text-xl font-medium">{social} Social Media</h4>
            <h4 className="text-xl font-medium">{newsLetter} Email Newsletters</h4>
            <h4 className="text-xl font-medium">{view} View Limit</h4>
            <h4 className="text-xl font-medium">{traffic} Traffic Booster</h4>
            <h4 className="text-xl font-medium">{Ads} Ads Available</h4>
            <h4 className="text-xl font-medium">{position} Position</h4>
            <Link to={'/auth'}>
                <button className="text-[#D41210] border border-[#D41210]  w-[119px] h-[28px] rounded-2xl">Sign Up</button>
            </Link>
        </div>
    )
}

export default Screen4

const Free = () => {
    return (
        <div className="h-full w-1/6  bg-white border-x group">
            <div className="w-full h-[14%] flex justify-center items-center text-2xl font-medium">Free</div>
            <div className="w-full h-[7.14%] flex justify-center items-center text-xl">3</div>
            <Cross />
            <Cross />
            <Cross />
            <Cross />
            <Cross />
            <Cross />
            <div className="w-full h-[7.14%] flex justify-center items-center text-xl">50</div>
            <Cross />
            <div className="w-full h-[7.14%] flex justify-center items-center text-xl">Unlimited</div>
            <div className="w-full h-[7.14%] flex justify-center items-center text-xl">Free Ads Section</div>
            <div className="w-full h-[7.14%] flex justify-center items-center">
                <Link to={'/auth'}>
                    <button className="text-[#D41210] border border-[#D41210]  w-[119px] h-[28px] rounded-2xl">Sign Up</button>
                </Link>
            </div>
        </div>
    )
}

const Silver = () => {
    return (
        <div className="h-full w-1/6  bg-white group">
            <div className="w-full h-[14%] flex justify-center items-center text-2xl font-medium">Silver</div>
            <div className="w-full h-[7.14%] flex justify-center items-center text-xl">Unlimited</div>
            <Tick />
            <Tick />
            <Tick />
            <Tick />
            <Tick />
            <Cross />
            <div className="w-full h-[7.14%] flex justify-center items-center text-xl">Unlimited</div>
            <div className="w-full h-[7.14%] flex justify-center items-center text-xl">Moderate</div>
            <div className="w-full h-[7.14%] flex justify-center items-center text-xl">16</div>
            <div className="w-full h-[7.14%] flex justify-center items-center text-xl">Lower</div>
            <div className="w-full h-[7.14%] flex justify-center items-center">
                <Link to={'/auth'}>
                    <button className="text-[#D41210] border border-[#D41210]  w-[119px] h-[28px] rounded-2xl">Sign Up</button>
                </Link>
            </div>
        </div>
    )
}

const Gold = () => {
    return (
        <div className="h-full w-1/6 text-white">
            <div className="w-full h-[14%] flex justify-center items-center text-2xl font-medium">Gold</div>
            <div className="w-full h-[7.14%] flex justify-center items-center text-xl">Unlimited</div>
            <Tick />
            <Tick />
            <Tick />
            <Tick />
            <Tick />
            <Tick />
            <div className="w-full h-[7.14%] flex justify-center items-center text-xl">Unlimited</div>
            <div className="w-full h-[7.14%] flex justify-center items-center text-xl">High</div>
            <div className="w-full h-[7.14%] flex justify-center items-center text-xl">8</div>
            <div className="w-full h-[7.14%] flex justify-center items-center text-xl">Middle</div>
            <div className="w-full h-[7.14%] flex justify-center items-center">
                <Link to={'/auth'}>
                    <button className="text-[#D41210] border border-[#D41210]  w-[119px] h-[28px] rounded-2xl bg-white">Sign Up</button>
                </Link>
            </div>
        </div>
    )
}


const Platinum = () => {
    return (
        <div className="h-full w-1/6  bg-white group">
            <div className="w-full h-[14%] flex justify-center items-center text-2xl font-medium">Platinum</div>
            <div className="w-full h-[7.14%] flex justify-center items-center text-xl">Unlimited</div>
            <Tick />
            <Tick />
            <div className="w-full h-[7.14%] flex justify-center items-center text-xl">24/7</div>
            <Tick />
            <Tick />
            <Tick />
            <div className="w-full h-[7.14%] flex justify-center items-center text-xl">Unlimited</div>
            <div className="w-full h-[7.14%] flex justify-center items-center text-xl">Very High</div>
            <div className="w-full h-[7.14%] flex justify-center items-center text-xl">3</div>
            <div className="w-full h-[7.14%] flex justify-center items-center text-xl">Top</div>
            <div className="w-full h-[7.14%] flex justify-center items-center">
                <Link to={'/auth'}>
                    <button className="text-[#D41210] border border-[#D41210]  w-[119px] h-[28px] rounded-2xl">Sign Up</button>
                </Link>
            </div>
        </div>
    )
}


const Cross = () => {
    return (
        <div className="w-full h-[7.14%] flex justify-center items-center">
            <img src="/icon/cross.png" alt="" />
        </div>
    )
}

const Tick = () => {
    return (
        <div className="w-full h-[7.14%] flex justify-center items-center">
            <img src="/icon/tick.png" alt="" />
        </div>
    )
}