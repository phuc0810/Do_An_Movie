import React from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import logo from "./logo.svg";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import New from "./pages/New/New";
import Register from "./pages/Register/Register";
import HomeTemplates from "./templates/HomeTemplate/HomeTemplates";
// import {} from 'react-router-dom'
import Slider from "./pages/_Components/Swiper/Slider";

function App() {
  return (
    <BrowserRouter >
      <Switch>
        <HomeTemplates path="/login" component={Login} />
        <HomeTemplates path="/about" component={About} />
        <HomeTemplates path="/register" component={Register} />
        <HomeTemplates path="/home" component={Home} />
        <HomeTemplates path="/contact" component={Contact} />
        <HomeTemplates path="/new" component={New} />

        <HomeTemplates path="/" component={Home} />
        <Route exact path='/swiper' component={Slider} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
