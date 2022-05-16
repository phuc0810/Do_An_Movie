import React, { useEffect, useState } from "react";
import { Tabs, Radio, Space, RadioChangeEvent } from "antd";
import { useDispatchThunk } from "../../../redux/configStore";
import { getDanhSachCumRap } from "../../../redux/actions/QuanLyPhimAction";
import { useDispatch } from "react-redux";

const { TabPane } = Tabs;

type Props = {};

type useState = {
  tabPosition: any;
};

export default function HomeMenu(props: Props) {
  const [state, setState] = useState<useState>({
    tabPosition: "left",
  });

  const changeTabPosition = (e: RadioChangeEvent) => {
    setState({ tabPosition: e.target.value });
  };

  const { tabPosition } = state;

  return (
    <div>
      <Tabs tabPosition={tabPosition}>
        <TabPane tab={<img src="http://picsum.photos/100" alt="..." />} key="1">
          Content of Tab 1
        </TabPane>
        <TabPane tab={<img src="http://picsum.photos/100" alt="..." />} key="2">
          Content of Tab 2
        </TabPane>
        <TabPane tab={<img src="http://picsum.photos/100" alt="..." />} key="3">
          Content of Tab 3
        </TabPane>
      </Tabs>
    </div>
  );
}
