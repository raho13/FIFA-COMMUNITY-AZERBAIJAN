import React from "react";
import Banner from "../component/Banner";
import bannerimg from "../img/banner/streams-icon.png";
import Card from "../component/Streams/Card";
export default function Streams() {
  return (
    <>
      <Banner
        img={bannerimg}
        header="Streams (98)"
        des="Check out all the members streams!"
      />
      <div className="section-header">
        <div className="section-header-info">
          <p className="section-pretitle">Chosen by the Community</p>
          <h2 className="section-title">Featured Streamers</h2>
        </div>
      </div>
      <div id="stream-slider" className="section-slider">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
