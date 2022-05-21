import React, { Fragment, useEffect, useState } from "react";
import { Tabs, Radio, Space, RadioChangeEvent } from "antd";
import { useDispatch } from "react-redux";
import { ArrLichChieu } from "@types";

const { TabPane } = Tabs;

type Props = {
  ArrLichChieu: ArrLichChieu[] | undefined;
};

type useState = {
  tabPosition: any;
};

export default function HomeMenu(props: Props) {
  let { ArrLichChieu } = props;

  const [state, setState] = useState<useState>({
    tabPosition: "left",
  });

  const changeTabPosition = (e: RadioChangeEvent) => {
    setState({ tabPosition: e.target.value });
  };

  const { tabPosition } = state;

  // render
  let renderRap = () => {
    return ArrLichChieu?.map((rap, i) => {
      return (
        <TabPane
          tab={
            <img
              className="rounded-full"
              width={50}
              src={rap.logo}
              alt={rap.logo}
            />
          }
          key={i}
        >
          <Tabs tabPosition={tabPosition}>
            {rap.lstCumRap?.map((cumRap, i) => {
              return (
                <TabPane
                  key={i}
                  tab={
                    <div className="flex justify-center items-center flex-wrap">
                      <img
                        className="rounded-full"
                        width={50}
                        src={cumRap.hinhAnh}
                        alt={cumRap.hinhAnh}
                      />
                      <div
                        style={{ width: "250px" }}
                        className="flex justify-center items-center flex-col ml-4"
                      >
                        <p className="mb-0">{cumRap.tenCumRap}</p>
                        <span className="text-red-500">Chi Tiết</span>
                      </div>
                    </div>
                  }
                >
                  {cumRap.danhSachPhim.map((phim, i) => {
                    return (
                      <div className="flex justify-center items-start flex-col py-4 border-b-4">
                        <img width={100} src={phim.hinhAnh} alt="" />
                      </div>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  return (
    <div>
      <Tabs tabPosition={tabPosition}>{renderRap()}</Tabs>
    </div>
  );
}
