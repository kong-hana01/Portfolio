import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from "../../img/profile1.jpg"
import profilePic2 from "../../img/profile2.jpg"
import {Pagination} from 'swiper';
import "swiper/css/pagination";
import 'swiper/css'

const Testimonials = () => {
    const students = [
{
    img: profilePic1,
    review: "asdasdad"
}, {
    img: profilePic2,
    review: "dasdasd"
}
]

  return (
    <div className='t-wrapper'>
        <div className='t-heading'>
            <span>파이썬 강의 리뷰</span>
            <div className='blur t-blur1' style={{background: "var(--purple)"}}></div>
            <div className='blur t-blur1' style={{background: "skyblue"}}></div>
        </div>

        {/* slider */}
        <Swiper
            modules={[Pagination]}
            slidesPerView = {1}
            pagination={{clickable: true}}
        >
            {students.map((student, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className='testimonial'>
                            <img src={student.img} alt="" />
                            <span>{student.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}

        </Swiper>
    </div>
  )
}

export default Testimonials