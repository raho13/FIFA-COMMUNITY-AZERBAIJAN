import React, { useState } from "react";
import Banner from "../component/Banner";
import bannerimg from "../img/banner/members-icon.png";
import Srcbanner from "../component/Srcbanner";
import Memitem from "../component/Memitem";
export default function Members() {
  return (
    <>
      <Banner
        img={bannerimg}
        header="Members (256)"
        des="Browse all the members of the community!"
      />
      <div className="section-header">
        <div className="section-header-info">
          <p className="section-pretitle">Browse Marina's</p>
          <h2 className="section-title">Fut Reyting</h2>
        </div>
      </div>
      <Srcbanner />
      <div className="grid grid-4-4-4 centered">
        <Memitem />
        <Memitem />
        <Memitem />
        <Memitem />
      </div>
    </>
  );
}
