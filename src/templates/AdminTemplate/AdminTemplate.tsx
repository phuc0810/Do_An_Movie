import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Route } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

// ---------------------------------------------------------------------------------
type Props = {
  component: React.ElementType;
  mobileComponent?: (props: React.ElementType) => React.FC<Props>;
  path: string;
};
export default function HomeTemplates(props: Props) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Route
      exact
      path={props.path}
      render={() => {
        return (
          <Layout style={{ minHeight: "100vh" }}>
            <Sider
              collapsible
              collapsed={collapsed}
              onCollapse={(value) => setCollapsed(value)}
            >
              <div className="logo" />
              <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={items}
              />
            </Sider>
            <Layout className="site-layout">
              <Header
                className="site-layout-background"
                style={{ padding: 0 }}
              />
              <Content style={{ margin: "0 16px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                  <props.component />
                </div>
              </Content>
              <Footer style={{ textAlign: "center" }}>
                Ant Design ©2018 Created by Ant UED
              </Footer>
            </Layout>
          </Layout>
        );
      }}
    />
  );
}
