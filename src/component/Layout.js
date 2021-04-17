import React, { useContext, useEffect } from "react";
import Header from "./Header";
import { menuContext } from "../context";
import Navbar from "./Navbar";
import Chatwidget from "./Chatwidget";
import FloatyBar from "./FloatyBar";
import MobileNavbar from "./MobileNavbar";
import Navigation from "./Navigation";
import Imagepopup from "../component/newsfeed/Imagepopup";
import { BrowserRouter as Router } from "react-router-dom";
import Register from "../pages/Register";

export default function Layout() {
  const { popup, MmenuVisible } = useContext(menuContext);
  const Containeropacity = () => {
    if (MmenuVisible) {
      return "containeropacity";
    } else {
      return null;
    }
  };
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
          <Navbar />
          <Chatwidget />
          <div id={Containeropacity()}>
            <Navigation />
            <Header />
            <FloatyBar />
          </div>
          <MobileNavbar />
        </Router>
      );
    }
  };

  const popuphandler = () => {
    if (popup.vis) {
      return <Imagepopup />;
    }
  };
  return templaterender();
}
