import React, { useContext, useRef } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { Menuitems } from "./Navbar";
import { ReactComponent as Backarrow } from "../icons/backarrow.svg";
import { ReactComponent as Logswitch } from "../icons/Logswitch.svg";
import { menuContext } from "../context";
import Avatar from "./Avatar";
import Input from "./Input";
export default function MobileNavbar() {
 

  const { MmenuVisible, setMmenuVisible, isLogin } = useContext(menuContext);
  const handlemobileNav = () => {
    if (MmenuVisible === false) {
      return "hidden";
    } else {
      return null;
    }
  };
  return (
    <nav
      className={
        `${handlemobileNav()} ` +
        "navigation-widget navigation-widget-mobile sidebar left"
      }
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
        {isLogin ? (
          <div className="navigation-widget-info-wrap">
            <div className="navigation-widget-info">
              <a className="user-avatar small no-outline">
                <Avatar size={1} />
              </a>
              <p className="navigation-widget-info-title">
                <a>Marina Valentine</a>
              </p>
              <p className="navigation-widget-info-text">Welcome Back!</p>
            </div>
            <p className="navigation-widget-info-button button small secondary">
              Logout
            </p>
          </div>
        ) : (
          <div className="widget-box mobile-login">
            <div className="widget-box-content">
              <form className="form">
                <div className="form-row split">
                  <div className="form-item">
                    <Input label="E-mail" />
                  </div>
                  <div className="form-item">
                    <Input label="Şifrəniz" type="psw" />
                  </div>
                  <div className="entrybtns">
                    <button class="button primary with-only-icon">
                      <Logswitch className="icon-login" />
                    </button>
                    <button class="button primary with-only-icon">
                      <Logswitch className="icon-login" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
        <Menuitems />
      </Scrollbars>
    </nav>
  );
}
