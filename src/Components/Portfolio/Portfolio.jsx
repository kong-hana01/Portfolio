import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../img/sidebar.png";
import "swiper/css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={-30}
        slidesPerView={2}
        // grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          {/* 차후에 사이트나 깃허브 주소 올리기 */}
          <img src={Sidebar} alt=""></img>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Sidebar} alt=""></img>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Sidebar} alt=""></img>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Sidebar} alt=""></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
