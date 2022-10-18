import React from 'react'

function Footer() {
    return (
        <div className='w-full bg-black text-white'>
            <div className="1stLine h-36 md:h-20 flex justify-around items-center flex-col md:flex-row">
                <div className="">
                    <span className='text-lg font-light text-justify'>Want to receive the latest listings? Subscribe to our weekly newsletter!</span>
                </div>
                <div className="signup h-12 w-80 bg-white flex rounded-2xl">
                    <input type="text" className="h-full w-[70%] rounded-l-2xl outline-none text-black pl-5" placeholder="Email" />
                    <button className="bg-red-600 h-full w-[30%] rounded-r-2xl text-xl">Sign Up</button>
                </div>
            </div>
            <div className="mt-10 pb-10 mx-auto w-[95%] md:w-[90%]">
                <p className='text-justify  text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio,
                    eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil,
                    eveniet aliquid culpa officia aut! Impedit sit sunt quaerat,
                    odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.
                    Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint?
                    Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.
                    Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
                </p>
            </div>
        </div>
    )
}

export default Footer