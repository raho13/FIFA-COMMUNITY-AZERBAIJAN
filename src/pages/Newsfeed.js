import React, { useContext, useState } from "react";
import bannerpromo from "../img/banner/banner-promo.jpg";
import { menuContext } from "../context";
import bannerimg from "../img/banner/newsfeed-icon.png";
import Banner from "../component/Banner";
import Members from "../component/newsfeed/Members";
import PostBanner from "../component/newsfeed/PostBanner";
import Model2 from "../component/Postmodels/Model2";
import Model1 from "../component/Postmodels/Model1";
export default function Newsfeed() {
  const { menuVisible, msgWidget } = useContext(menuContext);
  const [tab1, settab1] = useState("simple-tab-item active");
  const [tab2, settab2] = useState("simple-tab-item");
  const [tab3, settab3] = useState("simple-tab-item");
  const handleTabs = (i) => {
    if (i === 1) {
      settab1("simple-tab-item active");
      settab2("simple-tab-item");
      settab3("simple-tab-item");
    }
    if (i === 2) {
      settab1("simple-tab-item");
      settab2("simple-tab-item active");
      settab3("simple-tab-item");
    }
    if (i === 3) {
      settab1("simple-tab-item");
      settab2("simple-tab-item");
      settab3("simple-tab-item active");
    }
  };
  const gridPosition = () => {
    if (
      (menuVisible === false && msgWidget === false) ||
      (menuVisible === true && msgWidget === true)
    ) {
      return "content-grid container";
    }
    if (menuVisible === true) {
      return "content-grid container1";
    }
    if (msgWidget === true) {
      return "content-grid container2";
    }
  };
  return (
    <div className={gridPosition()}>
      <Banner
        header="Newsfeed"
        img={bannerimg}
        des=" Check what your friends have been up to!"
      />
      <div className="grid grid-3-6-3 mobile-prefer-content">
        <div className="grid-column">
          <Members />
          <a
            className="banner-promo"
            href="https://themeforest.net/user/odin_design"
            target="_blank"
          >
            <img src={bannerpromo} alt="banner-promo" />
          </a>
        </div>
        <div className="grid-column">
          <PostBanner />
          <div className="simple-tab-items">
            <form className="form">
              <div className="form-select">
                <select
                  id="newsfeed-filter-category"
                  name="newsfeed_filter_category"
                >
                  <option value={0}>Bütün paylaşımlar</option>
                  <option value={1}>FİFA Community Azerbaijan</option>
                  <option value={2}>İzlədiklərim</option>
                </select>{" "}
                <svg className="form-select-icon icon-small-arrow">
                  <use xlinkHref="#svg-small-arrow" />
                </svg>
              </div>
            </form>
            <p onClick={()=>{handleTabs(1)}} className={tab1}>
              Bütün paylaşımlar
            </p>
            <p onClick={()=>{handleTabs(2)}} className={tab2}>
              FİFA Community Azerbaijan
            </p>
            <p onClick={()=>{handleTabs(3)}} className={tab3}>
              İzlədiklərim
            </p>
          </div>
          <Model1 />
          <Model1 />
          <Model1 />
          {/* <Model2 /> */}
          <div className="loader-bars">
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
        <div className="grid-column">
          <div className="widget-box">
            <div className="widget-box-controls">
              <div
                id="reaction-stat-slider-controls"
                className="slider-controls"
              >
                <div className="slider-control left">
                  <svg className="slider-control-icon icon-small-arrow">
                    <use xlinkHref="#svg-small-arrow" />
                  </svg>
                </div>
                <div className="slider-control right">
                  <svg className="slider-control-icon icon-small-arrow">
                    <use xlinkHref="#svg-small-arrow" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="widget-box-title">Reklam paneli</p>
          </div>
        </div>
      </div>
    </div>
  );
}
