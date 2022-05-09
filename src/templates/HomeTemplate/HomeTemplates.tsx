import React, { FC, ReactNode } from "react";
import { Route, useHistory } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";


type Props = {
  component: any;
  mobileComponent?: (props: any) => React.FC<Props>;
  path: string;
};
export default function HomeTemplates(props: Props) {
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <div>
            <Header />
            <HomeCarousel/>
            <props.component {...propsRoute} />
            <Footer/>
          </div>
        );
      }}
    ></Route>
  );
}