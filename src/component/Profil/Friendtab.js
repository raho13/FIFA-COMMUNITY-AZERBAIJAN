import React from "react";
import Srcbanner from "../../component/Srcbanner";
import Memitem from "../Memitem";
export default function Friendtab() {
  return (
    <>
      <div className="section-header">
        <div className="section-header-info">
          <p className="section-pretitle">Browse Marina's</p>
          <h2 className="section-title">
            Friends <span className="highlighted">82</span>
          </h2>
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
