import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/configStore";
import { useDispatch } from "react-redux";
import { getCarouselAction } from "../../../../redux/actions/CarouselAction";

type Props = {};



export default function HomeCarousel(props: Props) {
  let { content } = useSelector((state: RootState) => state.CarouselReducer);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarouselAction());
  }, []);
  const contentStyle: React.CSSProperties = {
    height: "400px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Carousel effect="fade">
      <div>
        {/* {content.map((phim, i) => {
          return (
            <div
              style={{
                ...contentStyle,
                backgroundImage: `url(${phim.hinhAnh})`,
              }}
              key={i}
            >
              <img src={phim.hinhAnh} alt="..." className="w-full opacity-0" />
            </div>
          );
        })} */}
      </div>
    </Carousel>
  );
}
