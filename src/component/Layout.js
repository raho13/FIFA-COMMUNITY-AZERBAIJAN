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

export default function Layout() {
  const { popup } = useContext(menuContext);
  const popuphandler = () => {
    if (popup.vis) {
      return <Imagepopup />;
    }
  };
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
