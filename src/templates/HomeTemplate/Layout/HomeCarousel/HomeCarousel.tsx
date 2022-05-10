import React from "react";
import { Carousel } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/configStore";

type Props = {};

export default function HomeCarousel(props: Props) {
  let { content } = useSelector((state: RootState) => state.CarouselReducer);

  const contentStyle: React.CSSProperties = {
    height: "400px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <Carousel effect="fade">
      <div>
        {content.map((phim, i) => {
          return (
            <div style={contentStyle} key={i}>
              <img src={phim.hinhAnh} alt="..." className="w-full" />
            </div>
          );
        })}
      </div>
      <div>
        <div style={contentStyle}>
          <img src="http://picsum.photos/200" alt="..." className="w-full" />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img src="http://picsum.photos/300" alt="..." className="w-full" />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img src="http://picsum.photos/400" alt="..." className="w-full" />
        </div>
      </div>
    </Carousel>
  );
}
