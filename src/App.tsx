import React from "react";
import { BrowserRouter, Router, Switch } from "react-router-dom";
import logo from "./logo.svg";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import HomeTemplates from "./templates/HomeTemplate/HomeTemplates";
// import {} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter >
      <Switch>
        <HomeTemplates path="/login" component={Login} />
        <HomeTemplates path="/about" component={About} />
        <HomeTemplates path="/register" component={Register} />
        <HomeTemplates path="/home" component={Home} />
        <HomeTemplates path="/contact" component={Contact} />

        <HomeTemplates path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
