import React, { useState } from "react";
import { ReactComponent as Timeline } from "../icons/Timeline.svg";
import { ReactComponent as Friend } from "../icons/Friends Icon.svg";
import { ReactComponent as Twitter } from "../icons/Twitter.svg";
import { ReactComponent as Photo } from "../icons/Photo.svg";
import { ReactComponent as Video } from "../icons/Video.svg";
import flag from "../img/flag/usa.png";
import cover1 from "../img/cover/01.jpg";
import { ReactComponent as Badges } from "../icons/Badges Icon.svg";
import Timelinetab from "../component/Profil/Timelinetab";
import Phototab from "../component/Profil/Phototab";
import Videotab from "../component/Profil/Videotab";
import Badgetab from "../component/Profil/Badgetab";
import Friendtab from "../component/Profil/Friendtab";
export default function Profil() {
  const [tabindex, settabindex] = useState(1);
  const menuhandler = () => {
    switch (tabindex) {
      case 1:
        return <Timelinetab />;
        break;
      case 2:
        return <Friendtab />;
        break;
      case 3:
        return <Phototab />;
        break;
      case 4:
        return <Videotab />;
        break;
      case 5:
        return <Badgetab />;
        break;
    }
  };
  const handletabs = (e) => {
    if (
      e.target.className ===
        "section-menu-item tns-item tns-slide-active asd" ||
      e.target.className ===
        "section-menu-item active tns-item tns-slide-active asd"
    ) {
      var list = document.getElementsByClassName("asd");
      for (let item of list) {
        item.setAttribute(
          "class",
          "section-menu-item tns-item tns-slide-active asd"
        );
      }
      e.target.setAttribute(
        "class",
        "section-menu-item active tns-item tns-slide-active asd"
      );
    } else {
      var list = document.getElementsByClassName("asd");
      for (let item of list) {
        item.setAttribute(
          "class",
          "section-menu-item tns-item tns-slide-active asd"
        );
      }
      e.target.parentElement.setAttribute(
        "class",
        "section-menu-item active tns-item tns-slide-active asd"
      );
    }
  };
  return (
    <div className="content-grid nopdng">
      <div className="profile-header">
        <figure
          className="profile-header-cover liquid"
          style={{
            background: `url(${cover1}) center center / cover no-repeat`,
          }}
        >
          <img src={cover1} alt="cover-01" style={{ display: "none" }} />
        </figure>
        <div className="profile-header-info">
          <div className="user-short-description big">
            <a
              className="user-short-description-avatar user-avatar big"
              href="profile-timeline.html"
            >
              <div className="user-avatar-border">
                <div
                  className="hexagon-148-164"
                  style={{ width: 148, height: 164, position: "relative" }}
                >
                  <canvas
                    width={148}
                    height={164}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <div className="user-avatar-content">
                <div
                  className="hexagon-image-100-110"
                  data-src="img/avatar/01.jpg"
                  style={{ width: 100, height: 110, position: "relative" }}
                >
                  <canvas
                    width={100}
                    height={110}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <div className="user-avatar-progress">
                <div
                  className="hexagon-progress-124-136"
                  style={{ width: 124, height: 136, position: "relative" }}
                >
                  <canvas
                    width={124}
                    height={136}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <div className="user-avatar-progress-border">
                <div
                  className="hexagon-border-124-136"
                  style={{ width: 124, height: 136, position: "relative" }}
                >
                  <canvas
                    width={124}
                    height={136}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <div className="user-avatar-badge">
                <div className="user-avatar-badge-border">
                  <div
                    className="hexagon-40-44"
                    style={{ width: 40, height: 44, position: "relative" }}
                  >
                    <canvas
                      width={40}
                      height={44}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
                <div className="user-avatar-badge-content">
                  <div
                    className="hexagon-dark-32-34"
                    style={{ width: 32, height: 34, position: "relative" }}
                  >
                    <canvas
                      width={32}
                      height={34}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
                <p className="user-avatar-badge-text">24</p>
              </div>
            </a>
            <a
              className="user-short-description-avatar user-short-description-avatar-mobile user-avatar medium"
              href="profile-timeline.html"
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
                  data-src="img/avatar/01.jpg"
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
                <p className="user-avatar-badge-text">24</p>
              </div>{" "}
            </a>
            <p className="user-short-description-title">
              <a href="profile-timeline.html">Marina Valentine</a>
            </p>
            <p className="user-short-description-text">
              <a href="#">www.gamehuntress.com</a>
            </p>
          </div>
          <div className="profile-header-social-links-wrap">
            <div
              className="tns-outer"
              id="profile-header-social-links-slider-ow"
            >
              <div
                className="tns-liveregion tns-visually-hidden"
                aria-live="polite"
                aria-atomic="true"
              >
                slide <span className="current">2 to 7</span> of 7
              </div>
              <div
                id="profile-header-social-links-slider-mw"
                className="tns-ovh"
              >
                <div
                  className="tns-inner"
                  id="profile-header-social-links-slider-iw"
                >
                  <div
                    id="profile-header-social-links-slider"
                    className="profile-header-social-links tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal scmdicns"
                    style={{ transform: "translate3d(-12.0034px, 0px, 0px)" }}
                  >
                    <div
                      className="profile-header-social-link tns-item tns-slide-active"
                      id="profile-header-social-links-slider-item1"
                    >
                      <a className="social-link twitter" href="#">
                        <Twitter className="icon-twitter" />
                      </a>
                    </div>
                    <div
                      className="profile-header-social-link tns-item tns-slide-active"
                      id="profile-header-social-links-slider-item1"
                    >
                      <a className="social-link twitter" href="#">
                        <Twitter className="icon-twitter" />
                      </a>
                    </div>
                    <div
                      className="profile-header-social-link tns-item tns-slide-active"
                      id="profile-header-social-links-slider-item1"
                    >
                      <a className="social-link twitter" href="#">
                        <Twitter className="icon-twitter" />
                      </a>
                    </div>
                    <div
                      className="profile-header-social-link tns-item tns-slide-active"
                      id="profile-header-social-links-slider-item1"
                    >
                      <a className="social-link twitter" href="#">
                        <Twitter className="icon-twitter" />
                      </a>
                    </div>
                    <div
                      className="profile-header-social-link tns-item tns-slide-active"
                      id="profile-header-social-links-slider-item1"
                    >
                      <a className="social-link twitter" href="#">
                        <Twitter className="icon-twitter" />
                      </a>
                    </div>
                    <div
                      className="profile-header-social-link tns-item tns-slide-active"
                      id="profile-header-social-links-slider-item1"
                    >
                      <a className="social-link twitter" href="#">
                        <Twitter className="icon-twitter" />
                      </a>
                    </div>
                    <div
                      className="profile-header-social-link tns-item tns-slide-active"
                      id="profile-header-social-links-slider-item1"
                    >
                      <a className="social-link twitter" href="#">
                        <Twitter className="icon-twitter" />
                      </a>
                    </div>
                    {/* <div
                      className="profile-header-social-link tns-item"
                      id="profile-header-social-links-slider-item0"
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <a className="social-link facebook" href="#">
                        <Twitter className="icon-facebook" />
                      </a>
                    </div> */}

                    {/* <div
                      className="profile-header-social-link tns-item tns-slide-active"
                      id="profile-header-social-links-slider-item2"
                    >
                      {" "}
                      <a className="social-link instagram" href="#">
                        {" "}
                        <svg className="icon-instagram">
                          {" "}
                          <use xlinkHref="#svg-instagram" />{" "}
                        </svg>{" "}
                      </a>
                    </div>
                    <div
                      className="profile-header-social-link tns-item tns-slide-active"
                      id="profile-header-social-links-slider-item3"
                    >
                      {" "}
                      <a className="social-link twitch" href="#">
                        {" "}
                        <svg className="icon-twitch">
                          {" "}
                          <use xlinkHref="#svg-twitch" />{" "}
                        </svg>{" "}
                      </a>
                    </div>
                    <div
                      className="profile-header-social-link tns-item tns-slide-active"
                      id="profile-header-social-links-slider-item4"
                    >
                      {" "}
                      <a className="social-link youtube" href="#">
                        {" "}
                        <svg className="icon-youtube">
                          {" "}
                          <use xlinkHref="#svg-youtube" />{" "}
                        </svg>{" "}
                      </a>
                    </div>
                    <div
                      className="profile-header-social-link tns-item tns-slide-active"
                      id="profile-header-social-links-slider-item5"
                    >
                      {" "}
                      <a className="social-link patreon" href="#">
                        {" "}
                        <svg className="icon-patreon">
                          {" "}
                          <use xlinkHref="#svg-patreon" />{" "}
                        </svg>{" "}
                      </a>
                    </div>
                    <div
                      className="profile-header-social-link tns-item tns-slide-active"
                      id="profile-header-social-links-slider-item6"
                    >
                      {" "}
                      <a className="social-link discord" href="#">
                        {" "}
                        <svg className="icon-discord">
                          {" "}
                          <use xlinkHref="#svg-discord" />{" "}
                        </svg>{" "}
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div
              id="profile-header-social-links-slider-controls"
              className="slider-controls"
              aria-label="Carousel Navigation"
              tabIndex={0}
            >
              <div
                className="slider-control left"
                aria-controls="profile-header-social-links-slider"
                tabIndex={-1}
                data-controls="prev"
                aria-disabled="false"
              >
                <svg className="slider-control-icon icon-small-arrow">
                  <use xlinkHref="#svg-small-arrow" />{" "}
                </svg>
              </div>
              <div
                className="slider-control right"
                aria-controls="profile-header-social-links-slider"
                tabIndex={-1}
                data-controls="next"
                aria-disabled="true"
              >
                <svg className="slider-control-icon icon-small-arrow">
                  <use xlinkHref="#svg-small-arrow" />{" "}
                </svg>
              </div>
            </div>
          </div>
          <div className="user-stats">
            <div className="user-stat big">
              <p className="user-stat-title">930</p>
              <p className="user-stat-text">posts</p>
            </div>
            <div className="user-stat big">
              <p className="user-stat-title">82</p>
              <p className="user-stat-text">friends</p>
            </div>
            <div className="user-stat big">
              <p className="user-stat-title">5.7k</p>
              <p className="user-stat-text">visits</p>
            </div>
            <div className="user-stat big">
              <img className="user-stat-image" src={flag} alt="flag-usa" />
              <p className="user-stat-text">usa</p>
            </div>
          </div>
          <div className="profile-header-info-actions">
            <p className="profile-header-info-action button secondary">
              <span className="hide-text-mobile">Follow</span>
            </p>
          </div>
        </div>
      </div>
      <nav className="section-navigation">
        <div className="tns-outer" id="section-navigation-slider-ow">
          <div
            className="tns-liveregion tns-visually-hidden"
            aria-live="polite"
            aria-atomic="true"
          >
            slide <span className="current">1 to 4</span> of 11
          </div>
          <div id="section-navigation-slider-mw" className="tns-ovh">
            <div className="tns-inner" id="section-navigation-slider-iw">
              <div
                id="ptfnavcnt"
                className="section-menu tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
              >
                <a
                  className="section-menu-item active tns-item tns-slide-active asd"
                  id="section-navigation-slider-item1"
                  onClick={(e) => {
                    handletabs(e);
                    settabindex(1);
                  }}
                >
                  <Timeline className="section-menu-item-icon icon-timeline" />
                  <p className="section-menu-item-text">Timeline</p>
                </a>
                <a
                  onClick={(e) => {
                    handletabs(e);
                    settabindex(2);
                  }}
                  className="section-menu-item tns-item tns-slide-active asd"
                  id="section-navigation-slider-item2"
                >
                  <Friend className="section-menu-item-icon icon-friend" />
                  <p className="section-menu-item-text">Friends</p>
                </a>
                <a
                  onClick={(e) => {
                    handletabs(e);
                    settabindex(3);
                  }}
                  className="section-menu-item tns-item tns-slide-active asd"
                  id="section-navigation-slider-item4"
                >
                  <Photo className="section-menu-item-icon icon-photos" />
                  <p className="section-menu-item-text">Photos</p>
                </a>
                <a
                  onClick={(e) => {
                    handletabs(e);
                    settabindex(4);
                  }}
                  className="section-menu-item tns-item tns-slide-active asd"
                  id="section-navigation-slider-item5"
                >
                  <Video className="section-menu-item-icon icon-videos" />
                  <p className="section-menu-item-text">Videos</p>
                </a>
                <a
                  onClick={(e) => {
                    handletabs(e);
                    settabindex(5);
                  }}
                  className="section-menu-item tns-item tns-slide-active asd"
                  id="section-navigation-slider-item6"
                >
                  <Badges className="section-menu-item-icon icon-badges" />
                  <p className="section-menu-item-text">Badges</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="section-navigation-slider-controls"
          className="slider-controls"
          aria-label="Carousel Navigation"
          tabIndex={0}
        >
          <div
            className="slider-control left"
            aria-controls="section-navigation-slider"
            tabIndex={-1}
            data-controls="prev"
            aria-disabled="true"
          >
            <svg className="slider-control-icon icon-small-arrow">
              <use xlinkHref="#svg-small-arrow" />
            </svg>
          </div>
          <div
            className="slider-control right"
            aria-controls="section-navigation-slider"
            tabIndex={-1}
            data-controls="next"
          >
            <svg className="slider-control-icon icon-small-arrow">
              <use xlinkHref="#svg-small-arrow" />
            </svg>
          </div>
        </div>
      </nav>
      {menuhandler()}
    </div>
  );
}
