import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';


const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            name: "Bilecik University",
            text: "I graduated with a Bachelor of Science degree in Software Engineering.",
            grade: "Computer Software Engineering"
        },
        {
            id: 2,
            name: "Université Ibn Zohr",
            text: "After completing two years, before obtaining the license, I decided to quit. This is equivalent to the French system with a baccalaureate plus two years.",
            grade: "Foundation Degrees"

        },
        {
            id: 3,
            name: "Full-Stack Developer | Proweb.ma",
            text: "As a Full-Stack Developer at Proweb.ma, I designed and implemented responsive web applications, enhancing user experiences and optimizing performance across various platforms.",
            grade: "April 2019 - October 2021"
        },
        {
            id: 4,
            name: "Full-Stack Developer | Agence Web Marketing MAROC",
            text: "In my role as a Full-Stack Developer at Agence Web Marketing MAROC, I collaborated with cross-functional teams to deliver innovative web solutions, focusing on both front-end and back-end development to meet client needs.",
            grade: "March 2022 - May 2024"
        },
    ]

    return (
        <div id='worksEducatiom' className='py-10 bg-gray-100 relative' >
            <h1 className='text-center text-2xl lg:text-4xl font-bold'>Work & Education</h1>
            <div className='max-w-6xl mx-auto py-10 px-5'>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#EF4444",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px",
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{ delay: 5000 }}
                    slidesPerView={3}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {testimonials.map((item) => {
                        return <SwiperSlide key={item.id}>
                            <div className='border border-gray-400 shadow-md shadow-red-500 rounded-lg flex flex-col p-4'>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h3 className='font-semibold text-red-500 text-lg'>{item.name}</h3>
                                        <p className='text-sm mt-1 text-gray-500'>{item.grade}</p>
                                    </div>
                                    {/* <Quote className='text-red-400' /> */}
                                </div>

                                <p className='py-3'>{item.text}</p>

                            </div>
                        </SwiperSlide>
                    })}
                    <div className='swiper-pagination my-10 gap-1 relative'></div>

                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials
