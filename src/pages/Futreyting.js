import React, { useState } from "react";
import { ReactComponent as Adf } from "../icons/Add-friend.svg";
import { ReactComponent as Flag } from "../icons/azerbaijan.svg";
import Banner from "../component/Banner";
import bdg from "../img/badge/silver-s.png";
import bdg1 from "../img/badge/fcultivator-s.png";
import bdg2 from "../img/badge/scientist-s.png";
import Mnbadge from "../icons/1250691951.png";
import bdg3 from "../img/badge/blank-s.png";
import Srcbanner from "../component/Srcbanner";
import cover from "../img/cover/04.jpg";
import bannerimg from "../img/banner/streams-icon.png";
import Avatar from "../component/Avatar";
export default function Futreyting() {
  return (
    <>
      <Banner
        img={bannerimg}
        header="Fut Reyting"
        des="Check out all the members streams!"
      />
      <div className="grid" id="nopdng">
        <div className="section-header">
          <div className="section-header-info">
            <p className="section-pretitle">Browse Marina's</p>
            <h2 className="section-title">Fut Reyting</h2>
          </div>
        </div>
        <Srcbanner />
        <div className="grid">
          <div className="user-preview landscape">
            <figure className="user-preview-cover liquid">
              <img src={cover} alt="cover" className="ftreycoverimg" />
            </figure>
            <div className="user-preview-info">
              <div className="user-short-description landscape tiny">
                <a className="user-short-description-avatar user-avatar small"
                href='lhjk'>
                <Avatar size={1} />
                </a>
                <p className="user-short-description-title">
                  <a href="profile-timeline.html">Cavid Qurbanov</a>
                </p>
                <p className="user-short-description-text" id="usrdetp2">
                  <Flag className="Reyflacicn" /> Azerbaijan
                </p>
              </div>
              <div className="badge-list small">
                <div className="badge-item">
                  <img src={bdg} alt="badge-silver-s" />
                </div>
                <div className="badge-item">
                  <img src={bdg1} alt="badge-fcultivator-s" />
                </div>
                <div className="badge-item">
                  <img src={bdg2} alt="badge-scientist-s" />
                </div>
                <a className="badge-item" href="profile-badges.html">
                  <img src={bdg3} alt="badge-blank-s" />
                  <p className="badge-item-text">+29</p>
                </a>
              </div>
              <div className="user-stats">
                <div className="user-stat">
                  <p className="user-stat-title">65</p>
                  <p className="user-stat-text">Qələbə</p>
                </div>
                <div className="user-stat">
                  <p className="user-stat-title">21</p>
                  <p className="user-stat-text">Məğlubiyyət</p>
                </div>
                <div className="user-stat">
                  <p className="user-stat-title">2</p>
                  <p className="user-stat-text">Oynanmamış</p>
                </div>
                <div className="user-stat">
                  <p className="user-stat-title">ELİTE 1</p>
                  <p className="user-stat-text">Reyting</p>
                </div>
              </div>
              <div className="social-links small">
                <img src={Mnbadge} />
              </div>
              <div className="user-preview-actions" id="reyicnmob">
                <p className="button secondary">
                  <Adf className="button-icon icon-add-friend" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-pager-bar">
          <div className="section-pager">
            <div className="section-pager-item active">
              <p className="section-pager-item-text">01</p>
            </div>
            <div className="section-pager-item">
              <p className="section-pager-item-text">02</p>
            </div>
            <div className="section-pager-item">
              <p className="section-pager-item-text">03</p>
            </div>
            <div className="section-pager-item">
              <p className="section-pager-item-text">04</p>
            </div>
            <div className="section-pager-item">
              <p className="section-pager-item-text">05</p>
            </div>
            <div className="section-pager-item">
              <p className="section-pager-item-text">06</p>
            </div>
          </div>
          <div className="section-pager-controls">
            <div className="slider-control left disabled">
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
      </div>
    </>
  );
}
