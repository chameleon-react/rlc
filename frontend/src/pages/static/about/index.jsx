import React from 'react'
import NavBar from '../../common/NavBar'
import Footer from '../../common/Footer'

function About() {
    return (
        <div className='text-white'>
            <div className=' w-full bg-cover bg-center' style={{ backgroundImage: "url('/image/home/banner2.webp')" }}>
                <NavBar />
            
           
                <div className="h-full w-full backdrop-blur-xl px-5 py-10">
                    <h1 className='text-2xl font-medium text-white'>About Us</h1>
                    <div className="h-full flex flex-col-reverse lg:flex-row justify-center gap-10 mt-5">
                        <div className="w-full lg:w-1/2">
                            <p className='text-justify mb-5'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vitae quia reprehenderit labore, dignissimos sapiente esse blanditiis velit at voluptates fugiat obcaecati in nisi nulla, molestiae soluta, beatae magni quasi.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus aut culpa mollitia molestias vel numquam enim libero alias, in at dicta repellat magnam totam ab dolorum obcaecati incidunt, suscipit omnis.
                                Repellat neque quibusdam obcaecati officia non harum officiis perspiciatis nemo cupiditate sint quasi quod dolor, tempora quis nesciunt ipsum architecto. Quo incidunt similique, error ad veritatis soluta debitis illo quia!
                                Ratione quaerat vel quisquam deleniti ducimus facilis totam aut dolorum dolor iste fugiat facere cum illo enim quas nemo expedita laboriosam provident, itaque dolore incidunt officia perferendis? Non, repellendus porro!
                                Facere enim itaque impedit aliquam consequuntur officiis harum assumenda. Quidem esse, iste temporibus numquam doloribus dolores commodi. Quod id quia, eum nam veniam voluptatum consequatur culpa delectus nobis officia iusto!
                                Et facilis nobis fugiat non libero nihil iste id eos sed aspernatur eligendi ex rem voluptas odio ratione unde, tempore repudiandae totam suscipit dolore, itaque rerum magni, neque debitis! Cum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <img src='/image/common/about-us.webp' className='h-full' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default About