import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

import "../../../assets/scss/Components/Swiper/SwiperStyle.scss";

// import required modules
import { Pagination } from "swiper";
import Film from "../Film";

type Props = {
  arrFilm: Film[];
};

export default function Slider(props: Props) {
  let { arrFilm } = props;
  console.log(arrFilm);

  let renderFilm = () => {
    return arrFilm.map((phim, i) => {
      return (
        <SwiperSlide key={i}>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3" style={{width:'100%',height:'650px'}}>
              <Film phim={phim} />
            </div>
          </div>
        </SwiperSlide>
      );
    });
  };

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {renderFilm()}
      </Swiper>
    </>
  );
}
interface Film {
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  ngayKhoiChieu: string;
  danhGia: number;
  hot: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
}