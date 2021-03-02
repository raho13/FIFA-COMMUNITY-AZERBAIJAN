import React, { useState } from "react";
import Banner from "../component/Banner";
import bannerimg from "../img/banner/members-icon.png";
import { Link } from "react-router-dom";
import Srcbanner from "../component/Srcbanner";
import { ReactComponent as Twitter } from "../icons/Twitter.svg";
import { ReactComponent as Flag } from "../icons/azerbaijan.svg";
import warrior from "../img/badge/warrior-s.png";
import blank from "../img/badge/blank-s.png";
import gold from "../img/badge/gold-s.png";
import age from "../img/badge/age-s.png";
import caffeinated from "../img/badge/caffeinated-s.png";
export default function Members() {
  const [activeField, setactiveField] = useState(1);
  const dotHandler = (i) => {
    if (i == 1) {
      if (activeField === 1) {
        return "slider-roster-item tns-nav-active";
      } else {
        return "slider-roster-item";
      }
    }
    if (i == 2) {
      if (activeField === 2) {
        return "slider-roster-item tns-nav-active";
      } else {
        return "slider-roster-item";
      }
    }
  };
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
        <div className="user-preview">
          <figure
            className="user-preview-cover liquid"
            style={{
              background:
                'url("img/cover/04.jpg") center center / cover no-repeat',
            }}
          >
            <img
              src="img/cover/04.jpg"
              alt="cover-04"
              style={{ display: "none" }}
            />
          </figure>
          <div className="user-preview-info">
            <div className="user-short-description">
              {" "}
              <Link
                className="user-short-description-avatar user-avatar medium"
                to="/profil"
              >
                <div className="user-avatar-border">
                  <div
                    className="hexagon-120-132"
                    style={{ width: 120, height: 132, position: "relative" }}
                  >
                    <canvas
                      width={120}
                      height={132}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
                <div className="user-avatar-content">
                  <div
                    className="hexagon-image-82-90"
                    data-src="img/avatar/05.jpg"
                    style={{ width: 82, height: 90, position: "relative" }}
                  >
                    <canvas
                      width={82}
                      height={90}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
                <div className="user-avatar-progress">
                  <div
                    className="hexagon-progress-100-110"
                    style={{ width: 100, height: 110, position: "relative" }}
                  >
                    <canvas
                      width={100}
                      height={110}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
                <div className="user-avatar-progress-border">
                  <div
                    className="hexagon-border-100-110"
                    style={{ width: 100, height: 110, position: "relative" }}
                  >
                    <canvas
                      width={100}
                      height={110}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
                <div className="user-avatar-badge">
                  <div className="user-avatar-badge-border">
                    <div
                      className="hexagon-32-36"
                      style={{ width: 32, height: 36, position: "relative" }}
                    >
                      <canvas
                        width={32}
                        height={36}
                        style={{ position: "absolute", top: 0, left: 0 }}
                      />
                    </div>
                  </div>
                  <div className="user-avatar-badge-content">
                    <div
                      className="hexagon-dark-26-28"
                      style={{ width: 26, height: 28, position: "relative" }}
                    >
                      <canvas
                        width={26}
                        height={28}
                        style={{ position: "absolute", top: 0, left: 0 }}
                      />
                    </div>
                  </div>
                  <p className="user-avatar-badge-text">12</p>
                </div>
              </Link>
              <p className="user-short-description-title">
                <Link to="/profil">NekoBebop</Link>
              </p>
              <p className="user-short-description-text" id="wsx">
                <Flag className="Reyflacicn" /> Azerbaijan
              </p>
            </div>
            <div className="badge-list small">
              <div className="badge-item">
                <img src={gold} alt="badge-gold-s" />
              </div>
              <div className="badge-item">
                <img src={age} alt="badge-age-s" />
              </div>
              <div className="badge-item">
                <img src={caffeinated} alt="badge-caffeinated-s" />
              </div>
              <div className="badge-item">
                <img src={warrior} alt="badge-warrior-s" />
              </div>
              <a className="badge-item" href="profile-badges.html">
                <img src={blank} alt="badge-blank-s" />
                <p className="badge-item-text">+9</p>
              </a>
            </div>
            <div className="tns-outer" id="user-preview-stats-slides-01-ow">
              <div id="user-preview-stats-slides-01-mw" className="tns-ovh">
                <div className="tns-inner" id="user-preview-stats-slides-01-iw">
                  <div
                    id="user-preview-stats-slides-01"
                    className="wer user-preview-stats-slides tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                  >
                    {activeField === 1 ? (
                      <div
                        className="user-preview-stats-slide tns-item tns-slide-active"
                        id="user-preview-stats-slides-01-item0"
                      >
                        <div className="user-stats">
                          <div className="user-stat">
                            <p className="user-stat-title">874</p>
                            <p className="user-stat-text">posts</p>
                          </div>
                          <div className="user-stat">
                            <p className="user-stat-title">60</p>
                            <p className="user-stat-text">friends</p>
                          </div>
                          <div className="user-stat">
                            <p className="user-stat-title">3.9k</p>
                            <p className="user-stat-text">visits</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="user-preview-stats-slide tns-item"
                        id="user-preview-stats-slides-01-item1"
                      >
                        <p className="user-preview-text">
                          Hello! I'm James Hart, but I go by the name of Destroy
                          Dex on my stream channel. Come to check out the latest
                          gaming news!
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div
              id="user-preview-stats-roster-01"
              className="user-preview-stats-roster slider-roster"
              aria-label="Carousel Pagination"
            >
              <div
                onClick={() => {
                  setactiveField(1);
                }}
                className={dotHandler(1)}
              />
              <div
                onClick={() => {
                  setactiveField(2);
                }}
                className={dotHandler(2)}
              />
            </div>
            <div className="social-links small">
              <a className="social-link small twitter" href="#">
                <Twitter className="social-link-icon icon-twitter" />
              </a>
              <a className="social-link small twitter" href="#">
                <Twitter className="social-link-icon icon-twitter" />
              </a>
              <a className="social-link small twitter" href="#">
                <Twitter className="social-link-icon icon-twitter" />
              </a>
              <a className="social-link small twitter" href="#">
                <Twitter className="social-link-icon icon-twitter" />
              </a>
              {/* <a className="social-link small instagram" href="#">
                <svg className="social-link-icon icon-instagram">
                  <use xlinkHref="#svg-instagram" />
                </svg>
              </a>
              <a className="social-link small twitch" href="#">
                <svg className="social-link-icon icon-twitch">
                  <use xlinkHref="#svg-twitch" />
                </svg>
              </a>
              <a className="social-link small discord" href="#">
                <svg className="social-link-icon icon-discord">
                  {" "}
                  <use xlinkHref="#svg-discord" />{" "}
                </svg>{" "}
              </a> */}
            </div>
            <div className="user-preview-actions">
              <p className="button secondary">Follow</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
