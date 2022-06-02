import Checkout from "pages/Checkout/Checkout";
import Details from "pages/Details/Details";
import Loading from "pages/_Components/Loading/Loading";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import CheckoutTemplate from "templates/CheckoutTemplate/CheckoutTemplate";
import UserTemplate from "templates/UserTemplate/UserTemplate";
import logo from "./logo.svg";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import New from "./pages/New/New";
import Register from "./pages/Register/Register";
import HomeTemplates from "./templates/HomeTemplate/HomeTemplates";
// import {} from 'react-router-dom'

const CheckoutTemplateLazy = lazy(
  () => import("./templates/CheckoutTemplate/CheckoutTemplate")
);

function App() {
  return (
    <BrowserRouter>
      <Loading />
      <Switch>
        <HomeTemplates path="/about" component={About} />
        <HomeTemplates path="/register" component={Register} />
        <HomeTemplates path="/home" component={Home} />
        <HomeTemplates path="/contact" component={Contact} />
        <HomeTemplates path="/new" component={New} />
        <HomeTemplates path="/detail/:id" component={Details} />

        <CheckoutTemplate path="/checkout/:id" component={Checkout} />
        <UserTemplate path="/login" component={Login} />
        {/* <Suspense fallback={<h1>LOADING...</h1>}>
          <CheckoutTemplateLazy path="/checkout/:id" component={Checkout} />
        </Suspense> */}

        <HomeTemplates path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
