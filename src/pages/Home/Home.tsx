import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getDanhSachPhim } from "../../redux/actions/QuanLyPhimAction";
import { RootState, useDispatchThunk } from "../../redux/configStore";
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

  return (
    <div className="container">
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-5 mx-auto">
          <Slider arrFilm={arrFilm} />
        </div>
      </section>
      <div className="Menu ml-10">
        <HomeMenu />
      </div>
    </div>
  );
}
