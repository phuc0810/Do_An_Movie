import React, { useState } from "react";
import { Tabs, Radio, Space } from "antd";
import type { RadioChangeEvent } from "antd";
import { useInfoChiTietPhim } from "redux/store/QuanLyRap/ThongTinLichChieu/ThongTinLichChieu.selector";
import { RouteComponentProps, useParams } from "react-router-dom";
import { StaticContext } from "react-router";

type Props = {
  propsRoute: RouteComponentProps<
    {
      [x: string]: string | undefined;
    },
    StaticContext,
    unknown
  >;
};

const { TabPane } = Tabs;

type useState = {
  tabPosition: any;
};

// render

export default function Details(props: Props) {
  const [state, setState] = useState<useState>({
    tabPosition: "left",
  });

  const changeTabPosition = (e: RadioChangeEvent) => {
    setState({ tabPosition: e.target.value });
  };

  const { tabPosition } = state;

  // lay id param
  let { params } = props.propsRoute.match;
  console.log(params);

  // call api
  // let { ArrChiTietPhim } = useInfoChiTietPhim(id);
  // console.log(ArrChiTietPhim);

  return (
    <div
      style={{
        backgroundImage: "url(http://picsum.photos/200)",
        minHeight: "100vh",
      }}
    >
      <div //custom card
        className="Glassmorphism"
        style={{ minHeight: "100vh", paddingTop: 150 }}
      >
        <div className="grid grid-cols-12">
          <div className="col-span-4 col-start-4">
            <div className="grid grid-cols-2">
              <img src="http://picsum.photos/200/350" alt="..." />
              <div>
                <p>Ten Phim</p>
                <p>Mo ta</p>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="c100 p50">
              <span>50%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 container">
          <Tabs tabPosition={tabPosition}>
            <TabPane tab="Tab 1" key="1">
              Content of Tab 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab 3
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
