import React, { useState, useContext, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { Menuitems } from "./Navbar";
import { ReactComponent as Backarrow } from "../icons/backarrow.svg";
import { menuContext } from "../context";
import Avatar from "./Avatar";
export default function MobileNavbar() {
  const { MmenuVisible, setMmenuVisible } = useContext(menuContext);
  const handlemobileNav = () => {
    if (MmenuVisible === false) {
      return "navigation-widget navigation-widget-mobile sidebar left hidden";
    } else {
      return "navigation-widget navigation-widget-mobile sidebar left";
    }
  };
  return (
    <nav
      className={handlemobileNav()}
      data-simplebar
    >
      <Scrollbars>
        <div
          className="navigation-widget-close-button"
          onClick={() => {
            setMmenuVisible(!MmenuVisible);
          }}
        >
          <Backarrow className="navigation-widget-close-button-icon icon-back-arrow" />
        </div>
        <div className="navigation-widget-info-wrap">
          <div className="navigation-widget-info">
            <a className="user-avatar small no-outline">
              <Avatar size={1} />{" "}
            </a>
            <p className="navigation-widget-info-title">
              <a href="profile-timeline.html">Marina Valentine</a>
            </p>
            <p className="navigation-widget-info-text">Welcome Back!</p>
          </div>
          <p className="navigation-widget-info-button button small secondary">
            Logout
          </p>
        </div>
        <Menuitems />
      </Scrollbars>
    </nav>
  );
}
