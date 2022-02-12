import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

// Import Components
import Card from "./Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const CardSwiper = (props) => {
  console.log("스와이퍼", props.post_list.best_list);
  const swiper_best_list = props.post_list.best_list;
  console.log(typeof swiper_best_list);
  return (
    <Swiper
      className="mySwiper"
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={3}
      spaceBetween={40}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {[...swiper_best_list].map((list, idx) => {
        return (
          <SwiperSlide key={idx}>
            <Card best_list={list} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

const CardInfo = styled.div`
  /* text-align: left; */
`;

export default CardSwiper;
