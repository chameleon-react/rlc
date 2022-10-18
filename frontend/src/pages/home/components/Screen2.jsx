const Screen2 = () => {
  return (
    <div className="bg-[#D3135A]  w-full z-50 relative flex flex-col lg:flex-row justify-center items-center gap-10 text-white font-roboto py-10">
      <img src="/image/home/ellipse2.png" className='w-[227px] h-[227px] absolute bottom-0  z-50 -left-[110px] hidden lg:block' alt="" />
      <div className="w-full lg:w-1/2 flex flex-col justify-center  px-10 lg:px-[100px] gap-10">
        <h1 className='text-5xl font-bold'>Red Light Club</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto est beatae cupiditate inventore, nam ipsa quisquam quo vel maiores consectetur nesciunt fuga fugiat officiis nulla, id, tempore repudiandae incidunt aperiam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, atque expedita hic debitis corporis laboriosam ullam ea officiis. Libero voluptate error quam rerum officia modi mollitia sequi maiores nisi deleniti?</p>
        <button className='w-[257px] py-2 rounded-3xl border'>View More Listing</button>
      </div>
      <div className="w-full lg:w-1/2 flex gap-1 md:gap-10 justify-center items-center">
        <div className="flex flex-col gap-1 md:gap-10 justify-center">
          <img src="/image/home/profile/1.png" className='w-[239px] h-[391px] ' alt="" />
          <img src="/image/home/profile/2.png" className='w-[239px] h-[391px] ' alt="" />
        </div>
        <div className="flex flex-col gap-1 md:gap-10 lg:mt-10 justify-center">
          <img src="/image/home/profile/3.png" className='w-[239px] h-[391px] ' alt="" />
          <img src="/image/home/profile/4.png" className='w-[239px] h-[391px] ' alt="" />
        </div>
      </div>
    </div>
  )
}
export default Screen2