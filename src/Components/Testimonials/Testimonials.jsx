import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

export const Testimonials = () => {

  const clients =[
    {
        img: profilePic1,
        review:
          "Working with Agrah Jain was a game-changer for our project. Their expertise in backend development, particularly with Java and Spring Boot, ensured our application was both scalable and efficient. They consistently delivered high-quality work and were a pleasure to collaborate with.",
    },
    {
        img: profilePic2,
        review:
          "Agrah Jain has a rare blend of technical skill and problem-solving ability. Their contributions to our team, especially in optimizing complex algorithms and improving our codebase, were invaluable. I highly recommend them for any challenging development project.",
    },
    {
        img: profilePic3,
        review:
          "Their work on our front-end was nothing short of exceptional. Agrah Jain brought our designs to life with flawless execution in React.js and Next.js. Their attention to detail and commitment to excellence truly set them apart.",
    },
    {
        img: profilePic4,
        review:
          "I've worked with many developers, but Agrah Jain stands out for their dedication and skill. Whether it was working through tough problem-solving challenges on platforms like LeetCode or integrating complex backend systems, they consistently exceeded our expectations.",
    },
];
  return (
    <div className='t-wrapper'>
        <div className='t-heading'>
            <span>Clients always get </span>
            <span>Exceptional Work </span>
            <span>from me...</span>
            <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
            <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
        </div>

        <Swiper modules={[Pagination]} slidesPerView={1} pagination={{ clickable: true }}>
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}


        </Swiper>


    </div>
  )
}
