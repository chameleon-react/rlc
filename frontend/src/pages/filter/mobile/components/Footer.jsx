import { useNavigate } from "react-router-dom"

const Footer = ({ setSearchbar, searchbar }) => {
    const navigate = useNavigate()
    return (

        // <div className="w-full h-[70px] flex justify-center fixed bottom-0 z-50">
        //     <div className="w-2/5 h-full bg-[#F13353] rounded-tl-[3rem] flex justify-center items-center">
        //         <img src="/mobile/filter/home.png" className='cursor-pointer' alt="" onClick={() => navigate('/')} />
        //     </div>
        //     <div className="w-1/3 h-full bg-[#F13353] flex justify-center">
        //         <div className="h-[100px] w-[100px] rounded-full relative -top-[50px]">
        //             <div className="h-[63px] w-[63px] rounded-full absolute bg-[#AE0C37] inset-0 m-auto flex justify-center items-center" onClick={() => setSearchbar(!searchbar)}>
        //                 {
        //                     searchbar ? <img src="/mobile/filter/close.png" className='cursor-pointer' alt="" /> : <img src="/mobile/filter/search.png" className='cursor-pointer' alt="" />
        //                 }
        //             </div>
        //             <div className="h-1/2 w-full"></div>
        //             <div className="h-1/2 w-full bg-white rounded-b-full"></div>
        //         </div>
        //     </div>
        //     <div className="w-2/5 h-full bg-[#F13353] rounded-tr-[3rem] flex justify-center items-center">
        //         <img src="/mobile/filter/profile.png" className='cursor-pointer' onClick={() => navigate('/auth')} alt="" />
        //     </div>
        // </div>

        <div className="fixed  -bottom-2 z-50 w-full h-[80px]">
            <img src="/mobile/filter/footer.png" className="w-full" alt="" />
            <img src="/mobile/filter/home.png" className='cursor-pointer absolute top-[25px] left-[70px]' alt="" onClick={() => navigate('/')} />
            <div className="h-[63px] w-[63px] bg-[#AE0C37] rounded-full absolute z-50 -top-5 inset-x-0 mx-auto flex justify-center items-center" onClick={() => setSearchbar(!searchbar)}>
                {
                    searchbar ? <img src="/mobile/filter/close.png" className='cursor-pointer' alt="" /> : <img src="/mobile/filter/search.png" className='cursor-pointer' alt="" />
                }
                
            </div>
            <img src="/mobile/filter/profile.png" className='cursor-pointer absolute top-[25px] right-[70px]' onClick={() => navigate('/auth')} alt="" />
        </div>
    )
}

export default Footer



// <div className="fixed bottom-0  w-full   flex items-end z-50" >
        //     <div className="h-[60px] w-2/5 bg-[#F13353] flex justify-center items-center rounded-tl-2xl rounded-tr-[45px]">
        //         <img src="/mobile/filter/home.png" className='cursor-pointer' alt="" onClick={()=>navigate('/')} />
        //     </div>

        //     <div className="h-[83px] w-1/5 flex flex-col items-center justify-end ">
        //         <div className="rounded-full border flex justify-center items-center bg-[#F13353] h-[50px] w-[50px] relative bottom-2" onClick={() => setSearchbar(!searchbar)}>
        //             {
        //                 searchbar ? <img src="/mobile/filter/close.png" className='cursor-pointer' alt="" /> : <img src="/mobile/filter/search.png" className='cursor-pointer' alt="" />
        //             }

        //         </div>
        //         <div className="h-[20px] w-full  bg-[#F13353]"></div>
        //     </div>

        //     <div className="h-[60px] w-2/5 bg-[#F13353] flex justify-center items-center rounded-tr-2xl rounded-tl-[45px]">
        //         <img src="/mobile/filter/profile.png" className='cursor-pointer' onClick={()=>navigate('/auth')} alt="" />
        //     </div>
        // </div>