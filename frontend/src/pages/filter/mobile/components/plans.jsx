import { useNavigate } from "react-router-dom"

export const Platinum = ({ profilePhoto, id, age, adsTitle, region }) => {
    const navigate = useNavigate()
    return (
        <div className="w-[110px] h-[200px] rounded-md border overflow-hidden">
            <div className="w-full h-[175px]" onClick={() => { navigate(`/profile/${id}`)}}>
                <img src={profilePhoto} className='h-full w-full object-cover' alt="" />
            </div>
            <div className="w-full h-[25px] bg-[#06175D] flex px-[10px] pt-[4px] justify-between text-white">
                <div className="flex flex-col">
                    <span className='text-[9px] font-medium'>{adsTitle}</span>
                    <span className='text-[5px] font-medium'>{region}</span>
                </div>
                <span className='text-[5px] font-medium'>{age} Y</span>
            </div>
        </div>
    )
}

export const Gold = ({ profilePhoto, id ,age, adsTitle, region}) => {
    const navigate = useNavigate()
    return (
        <div className="w-[110px] h-[200px] rounded-md border overflow-hidden">
            <div className="w-full h-[175px]" onClick={() => { navigate(`/profile/${id}`) }}>
                <img src={profilePhoto} className='h-full w-full object-cover' alt="" />
            </div>
            <div className="w-full h-[25px] bg-[#E5AF2D] flex px-[10px] pt-[4px] justify-between text-white">
                <div className="flex flex-col">
                    <span className='text-[9px] font-medium'>{adsTitle}</span>
                    <span className='text-[5px] font-medium'>{region}</span>
                </div>
                <span className='text-[5px] font-medium'>{age} Y</span>
            </div>
        </div>
    )
}
export const Silver = ({ profilePhoto, id,age, adsTitle, region }) => {
    const navigate = useNavigate()
    return (
        <div className="w-[110px] h-[200px] rounded-md border overflow-hidden">
            <div className="w-full h-[175px]" onClick={() => { navigate(`/profile/${id}`) }}>
                <img src={profilePhoto} className='h-full w-full object-cover' alt="" />
            </div>
            <div className="w-full h-[25px] bg-[#7D7D7D] flex px-[10px] pt-[4px] justify-between text-white">
                <div className="flex flex-col">
                    <span className='text-[9px] font-medium'>{adsTitle}</span>
                    <span className='text-[5px] font-medium'>{region}</span>
                </div>
                <span className='text-[5px] font-medium'>{age} Y</span>
            </div>
        </div>
    )
}
export const None = ({ profilePhoto, id,age, adsTitle, region }) => {
    const navigate = useNavigate()
    return (
        <div className="w-[110px] h-[200px] rounded-md border overflow-hidden">
            <div className="w-full h-[175px]" onClick={() => { navigate(`/profile/${id}`) }}>
                <img src={profilePhoto} className='h-full w-full object-cover' loading={'lazy'} alt="" />
            </div>
            <div className="w-full h-[25px] bg-[#17191E] flex px-[10px] pt-[4px] justify-between text-white">
                <div className="flex flex-col">
                    <span className='text-[9px] font-medium'>{adsTitle}</span>
                    <span className='text-[5px] font-medium'>{region}</span>
                </div>
                <span className='text-[5px] font-medium'>{age} Y</span>
            </div>
        </div>
    )
}