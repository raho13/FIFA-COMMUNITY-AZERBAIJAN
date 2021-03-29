import React, { useContext, useEffect } from "react";
import Header from "./Header";
import { menuContext } from "../context";
import Navbar from "./Navbar";
import Chatwidget from "./Chatwidget";
import FloatyBar from "./FloatyBar";
import MobileNavbar from "./MobileNavbar";
import Navigation from "./Navigation";
import Imagepopup from "../component/newsfeed/Imagepopup";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "../pages/Register";

export default function Layout() {
  useEffect(() => {
    console.log(window.location.pathname);
  });
  const templaterender = () => {
    if (
      window.location.pathname == "/register" ||
      window.location.pathname == "/Register"
    ) {
      return <Register />;
    } else {
      return (
        <Router>
          {popuphandler()}
          <Navigation />
          <Navbar />
          <Header />
          <Chatwidget />
          <FloatyBar />
          <MobileNavbar />
        </Router>
      );
    }
  };
  const { popup } = useContext(menuContext);
  const popuphandler = () => {
    if (popup.vis) {
      return <Imagepopup />;
    }
  };
  return templaterender();
}
