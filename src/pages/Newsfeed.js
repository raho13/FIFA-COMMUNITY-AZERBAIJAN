import React from "react";
import bannerpromo from "../img/banner/banner-promo.jpg";
import bannerimg from "../img/banner/newsfeed-icon.png";
import Banner from "../component/Banner";
import Members from "../component/newsfeed/Members";
import PostBanner from "../component/newsfeed/PostBanner";
import Model2 from "../component/Postmodels/Model2";
import Model1 from "../component/Postmodels/Model1";
export default function Newsfeed() {
  return (
    <div className="content-grid container">
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
                {" "}
                <select
                  id="newsfeed-filter-category"
                  name="newsfeed_filter_category"
                >
                  <option value={0}>All Updates</option>
                  <option value={1}>Mentions</option>
                  <option value={2}>Friends</option>
                  <option value={3}>Groups</option>
                  <option value={4}>Blog Posts</option>
                </select>{" "}
                <svg className="form-select-icon icon-small-arrow">
                  <use xlinkHref="#svg-small-arrow" />
                </svg>{" "}
              </div>
            </form>
            <p className="simple-tab-item active">All Updates</p>
            <p className="simple-tab-item">Mentions</p>
            <p className="simple-tab-item">Friends</p>
            <p className="simple-tab-item">Groups</p>
            <p className="simple-tab-item">Blog Posts</p>
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
                  {" "}
                  <svg className="slider-control-icon icon-small-arrow">
                    <use xlinkHref="#svg-small-arrow" />
                  </svg>{" "}
                </div>
                <div className="slider-control right">
                  {" "}
                  <svg className="slider-control-icon icon-small-arrow">
                    <use xlinkHref="#svg-small-arrow" />
                  </svg>{" "}
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
