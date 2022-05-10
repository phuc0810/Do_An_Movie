import React from "react";
import { Carousel } from "antd";

type Props = {};

const contentStyle: React.CSSProperties = {
  height: "400px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function HomeCarousel(props: Props) {
  return (
    <Carousel effect="fade">
      <div>
        <div style={contentStyle}>
          <img src="http://picsum.photos/100" alt="..." className="w-full" />
        </div>
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
