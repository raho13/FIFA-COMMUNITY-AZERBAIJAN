import React from "react";
export default function Banner(props) {
  return (
    <div className="section-banner bnnr">
      <img
        className="section-banner-icon"
        src={props.img}
        alt="newsfeed-icon"
      />
      <p className="section-banner-title">{props.header}</p>
      <p className="section-banner-text">{props.des}</p>
    </div>
  );
}
