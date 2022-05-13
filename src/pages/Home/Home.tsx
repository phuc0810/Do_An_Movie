import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getDanhSachPhim } from "../../redux/actions/QuanLyPhimAction";
import { RootState, useDispatchThunk } from "../../redux/configStore";
import Film from "../_Components/Film";
import Slider from "../_Components/Swiper/Slider";
import HomeMenu from "./HomeMenu/HomeMenu";

type Props = {};

export default function Home(props: Props) {
  let { arrFilm } = useSelector((state: RootState) => state.QuanLyPhimReducer);
  let dispatchThunk = useDispatchThunk();
  console.log(arrFilm);

  useEffect(() => {
    dispatchThunk(getDanhSachPhim());
  }, []);

  let renderFilm = () => {
    return arrFilm.map((phim, i) => {
      return (
        <div className="p-4 lg:w-1/3">
          <Film phim={phim} key={i} />
        </div>
      );
    });
  };

  return (
    <div className="container">
      <Slider/>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">{renderFilm()}</div>
        </div>
      </section>
      <div className="Menu ml-10">
        <HomeMenu />
      </div>
    </div>
  );
}
