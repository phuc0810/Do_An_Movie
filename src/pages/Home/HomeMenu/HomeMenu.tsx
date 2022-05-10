import React, { useState } from "react";
import { Tabs, Radio, Space, RadioChangeEvent } from "antd";

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
      <Space style={{ marginBottom: 24 }}>
        Tab position:
        <Radio.Group value={tabPosition} onChange={changeTabPosition}>
          <Radio.Button value="top">top</Radio.Button>
          <Radio.Button value="bottom">bottom</Radio.Button>
          <Radio.Button value="left">left</Radio.Button>
          <Radio.Button value="right">right</Radio.Button>
        </Radio.Group>
      </Space>
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
