const  Footer = ({ setSearchbar, searchbar }) => {
    return (
        <div className="fixed bottom-0  w-full   flex items-end z-50" >
            <div className="h-[60px] w-2/5 bg-[#F13353] flex justify-center items-center rounded-tl-2xl rounded-tr-[45px]">
                <img src="/mobile/filter/home.png" className='cursor-pointer' alt="" />
            </div>

            <div className="h-[83px] w-1/5 flex flex-col items-center justify-end ">
                <div className="rounded-full border flex justify-center items-center bg-[#F13353] h-[50px] w-[50px]" onClick={() => setSearchbar(!searchbar)}>
                    {
                        searchbar ? <img src="/mobile/filter/close.png" className='cursor-pointer' alt="" /> : <img src="/mobile/filter/search.png" className='cursor-pointer' alt="" />
                    }

                </div>
                <div className="h-[20px] w-full  bg-[#F13353]"></div>
            </div>

            <div className="h-[60px] w-2/5 bg-[#F13353] flex justify-center items-center rounded-tr-2xl rounded-tl-[45px]">
                <img src="/mobile/filter/profile.png" className='cursor-pointer' alt="" />
            </div>
        </div>
    )
}

export default  Footer