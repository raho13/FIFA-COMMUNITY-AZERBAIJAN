import React from "react";

export default function Preloader() {
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
