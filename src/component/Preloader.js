import React from "react";
import avatar from "../icons/logo.png";
export default function Preloader({ size }) {
  if (size) {
    return (
      <div className="page-loader">
        <div className="page-loader-decoration">
          <img className="loader_img" src={avatar} alt="logo" />
        </div>
        <div className="page-loader-indicator loader-bars">
          <div className="loader-bar" />
          <div className="loader-bar" />
          <div className="loader-bar" />
          <div className="loader-bar" />
          <div className="loader-bar" />
          <div className="loader-bar" />
          <div className="loader-bar" />
          <div className="loader-bar" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="loading-container">
        <div className="page-loader-indicator loader-bars">
          <div className="loader-bar" />
          <div className="loader-bar" />
          <div className="loader-bar" />
          <div className="loader-bar" />
          <div className="loader-bar" />
          <div className="loader-bar" />
          <div className="loader-bar" />
          <div className="loader-bar" />
        </div>
      </div>
    );
  }
}
