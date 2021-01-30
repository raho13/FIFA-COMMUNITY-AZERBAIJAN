import React, { useState } from "react";
import { ReactComponent as Adf } from "../icons/Add-friend.svg";
import { ReactComponent as Src } from "../icons/Searcicon.svg";
import { ReactComponent as Flag } from "../icons/azerbaijan.svg";
import Banner from "../component/Banner";
import bdg from "../img/badge/silver-s.png";
import bdg1 from "../img/badge/fcultivator-s.png";
import bdg2 from "../img/badge/scientist-s.png";
import Mnbadge from "../icons/1250691951.png";
import bdg3 from "../img/badge/blank-s.png";
import cover from "../img/cover/04.jpg";
import bannerimg from "../img/banner/streams-icon.png";
export default function Futreyting() {
  const [tabI, settabI] = useState(1);
  const [handleImpLab, sethandleImpLab] = useState(0);
  const inplabel = () => {
    if (handleImpLab === 1) {
      return "form-input small with-button active";
    } else {
      return "form-input small with-button";
    }
  };
  const HandelTabs = (i) => {
    if (i === tabI) {
      return "filter-tab active";
    } else {
      return "filter-tab";
    }
  };
  return (
    <>
      <Banner
        img={bannerimg}
        header="Fut Reyting"
        des="Check out all the members streams!"
      />
      <div className="content-grid">
        <section className="section">
          <div className="section-header">
            <div className="section-header-info">
              <p className="section-pretitle">Browse Marina's</p>
              <h2 className="section-title">Fut Reyting</h2>
            </div>
          </div>
          <div className="section-filters-bar v1">
            <div className="section-filters-bar-actions">
              <form className="form">
                <div className={inplabel()}>
                  <label htmlFor="friends-search">Search Friends</label>
                  <input
                    onFocus={() => {
                      sethandleImpLab(1);
                    }}
                    onBlur={() => {
                      sethandleImpLab(0);
                    }}
                    type="text"
                    id="friends-search"
                    name="friends_search"
                  />
                  <button className="button primary">
                    <Src className="icon-magnifying-glass srcic" />
                  </button>
                </div>
                <div className="form-select">
                  <label htmlFor="friends-filter-category">Filter By</label>
                  <select
                    id="friends-filter-category"
                    name="friends_filter_category"
                  >
                    <option value={0}>Qələbə sayı</option>
                    <option value={1}>Birinci həftə</option>
                    <option value={2}>Elite 1</option>
                    <option value={3}>Azərbaycan</option>
                  </select>
                  <svg className="form-select-icon icon-small-arrow">
                    <use xlinkHref="#svg-small-arrow" />
                  </svg>
                </div>
              </form>
              <div className="filter-tabs">
                <div
                  onClick={() => {
                    settabI(1);
                  }}
                  className={HandelTabs(1)}
                >
                  <p className="filter-tab-text">Qələbə sayı</p>
                </div>
                <div
                  onClick={() => {
                    settabI(2);
                  }}
                  className={HandelTabs(2)}
                >
                  <p className="filter-tab-text">Birinci həftə</p>
                </div>
                <div
                  onClick={() => {
                    settabI(3);
                  }}
                  className={HandelTabs(3)}
                >
                  <p className="filter-tab-text">Elite 1</p>
                </div>
                <div
                  onClick={() => {
                    settabI(4);
                  }}
                  className={HandelTabs(4)}
                >
                  <p className="filter-tab-text">Azərbaycan</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="user-preview landscape">
              <figure className="user-preview-cover liquid">
                <img src={cover} alt="cover" className="ftreycoverimg" />
              </figure>
              <div className="user-preview-info">
                <div className="user-short-description landscape tiny">
                  <a
                    className="user-short-description-avatar user-avatar small"
                    href="profile-timeline.html"
                  >
                    <div className="user-avatar-border">
                      <div className="hexagon-50-56" />
                    </div>
                    <div className="user-avatar-content">
                      <div
                        className="hexagon-image-30-32"
                        data-src="img/avatar/05.jpg"
                      />
                    </div>
                    <div className="user-avatar-progress">
                      <div className="hexagon-progress-40-44" />
                    </div>
                    <div className="user-avatar-progress-border">
                      <div className="hexagon-border-40-44" />
                    </div>
                    <div className="user-avatar-badge">
                      <div className="user-avatar-badge-border">
                        <div className="hexagon-22-24" />
                      </div>
                      <div className="user-avatar-badge-content">
                        <div className="hexagon-dark-16-18" />
                      </div>
                      <p className="user-avatar-badge-text">12</p>
                    </div>
                  </a>
                  <p className="user-short-description-title">
                    <a href="profile-timeline.html">Cavid Qurbanov</a>
                  </p>
                  <p className="user-short-description-text">
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
         
            <div className="user-preview landscape">
              <figure className="user-preview-cover liquid">
                <img src={cover} alt="cover" className="ftreycoverimg" />
              </figure>
              <div className="user-preview-info">
                <div className="user-short-description landscape tiny">
                  <a
                    className="user-short-description-avatar user-avatar small"
                    href="profile-timeline.html"
                  >
                    <div className="user-avatar-border">
                      <div className="hexagon-50-56" />
                    </div>
                    <div className="user-avatar-content">
                      <div
                        className="hexagon-image-30-32"
                        data-src="img/avatar/05.jpg"
                      />
                    </div>
                    <div className="user-avatar-progress">
                      <div className="hexagon-progress-40-44" />
                    </div>
                    <div className="user-avatar-progress-border">
                      <div className="hexagon-border-40-44" />
                    </div>
                    <div className="user-avatar-badge">
                      <div className="user-avatar-badge-border">
                        <div className="hexagon-22-24" />
                      </div>
                      <div className="user-avatar-badge-content">
                        <div className="hexagon-dark-16-18" />
                      </div>
                      <p className="user-avatar-badge-text">12</p>
                    </div>
                  </a>
                  <p className="user-short-description-title">
                    <a href="profile-timeline.html">Cavid Qurbanov</a>
                  </p>
                  <p className="user-short-description-text">
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
         
            <div className="user-preview landscape">
              <figure className="user-preview-cover liquid">
                <img src={cover} alt="cover" className="ftreycoverimg" />
              </figure>
              <div className="user-preview-info">
                <div className="user-short-description landscape tiny">
                  <a
                    className="user-short-description-avatar user-avatar small"
                    href="profile-timeline.html"
                  >
                    <div className="user-avatar-border">
                      <div className="hexagon-50-56" />
                    </div>
                    <div className="user-avatar-content">
                      <div
                        className="hexagon-image-30-32"
                        data-src="img/avatar/05.jpg"
                      />
                    </div>
                    <div className="user-avatar-progress">
                      <div className="hexagon-progress-40-44" />
                    </div>
                    <div className="user-avatar-progress-border">
                      <div className="hexagon-border-40-44" />
                    </div>
                    <div className="user-avatar-badge">
                      <div className="user-avatar-badge-border">
                        <div className="hexagon-22-24" />
                      </div>
                      <div className="user-avatar-badge-content">
                        <div className="hexagon-dark-16-18" />
                      </div>
                      <p className="user-avatar-badge-text">12</p>
                    </div>
                  </a>
                  <p className="user-short-description-title">
                    <a href="profile-timeline.html">Cavid Qurbanov</a>
                  </p>
                  <p className="user-short-description-text">
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
         
            <div className="user-preview landscape">
              <figure className="user-preview-cover liquid">
                <img src={cover} alt="cover" className="ftreycoverimg" />
              </figure>
              <div className="user-preview-info">
                <div className="user-short-description landscape tiny">
                  <a
                    className="user-short-description-avatar user-avatar small"
                    href="profile-timeline.html"
                  >
                    <div className="user-avatar-border">
                      <div className="hexagon-50-56" />
                    </div>
                    <div className="user-avatar-content">
                      <div
                        className="hexagon-image-30-32"
                        data-src="img/avatar/05.jpg"
                      />
                    </div>
                    <div className="user-avatar-progress">
                      <div className="hexagon-progress-40-44" />
                    </div>
                    <div className="user-avatar-progress-border">
                      <div className="hexagon-border-40-44" />
                    </div>
                    <div className="user-avatar-badge">
                      <div className="user-avatar-badge-border">
                        <div className="hexagon-22-24" />
                      </div>
                      <div className="user-avatar-badge-content">
                        <div className="hexagon-dark-16-18" />
                      </div>
                      <p className="user-avatar-badge-text">12</p>
                    </div>
                  </a>
                  <p className="user-short-description-title">
                    <a href="profile-timeline.html">Cavid Qurbanov</a>
                  </p>
                  <p className="user-short-description-text">
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
         
            <div className="user-preview landscape">
              <figure className="user-preview-cover liquid">
                <img src={cover} alt="cover" className="ftreycoverimg" />
              </figure>
              <div className="user-preview-info">
                <div className="user-short-description landscape tiny">
                  <a
                    className="user-short-description-avatar user-avatar small"
                    href="profile-timeline.html"
                  >
                    <div className="user-avatar-border">
                      <div className="hexagon-50-56" />
                    </div>
                    <div className="user-avatar-content">
                      <div
                        className="hexagon-image-30-32"
                        data-src="img/avatar/05.jpg"
                      />
                    </div>
                    <div className="user-avatar-progress">
                      <div className="hexagon-progress-40-44" />
                    </div>
                    <div className="user-avatar-progress-border">
                      <div className="hexagon-border-40-44" />
                    </div>
                    <div className="user-avatar-badge">
                      <div className="user-avatar-badge-border">
                        <div className="hexagon-22-24" />
                      </div>
                      <div className="user-avatar-badge-content">
                        <div className="hexagon-dark-16-18" />
                      </div>
                      <p className="user-avatar-badge-text">12</p>
                    </div>
                  </a>
                  <p className="user-short-description-title">
                    <a href="profile-timeline.html">Cavid Qurbanov</a>
                  </p>
                  <p className="user-short-description-text">
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
         
            <div className="user-preview landscape">
              <figure className="user-preview-cover liquid">
                <img src={cover} alt="cover" className="ftreycoverimg" />
              </figure>
              <div className="user-preview-info">
                <div className="user-short-description landscape tiny">
                  <a
                    className="user-short-description-avatar user-avatar small"
                    href="profile-timeline.html"
                  >
                    <div className="user-avatar-border">
                      <div className="hexagon-50-56" />
                    </div>
                    <div className="user-avatar-content">
                      <div
                        className="hexagon-image-30-32"
                        data-src="img/avatar/05.jpg"
                      />
                    </div>
                    <div className="user-avatar-progress">
                      <div className="hexagon-progress-40-44" />
                    </div>
                    <div className="user-avatar-progress-border">
                      <div className="hexagon-border-40-44" />
                    </div>
                    <div className="user-avatar-badge">
                      <div className="user-avatar-badge-border">
                        <div className="hexagon-22-24" />
                      </div>
                      <div className="user-avatar-badge-content">
                        <div className="hexagon-dark-16-18" />
                      </div>
                      <p className="user-avatar-badge-text">12</p>
                    </div>
                  </a>
                  <p className="user-short-description-title">
                    <a href="profile-timeline.html">Cavid Qurbanov</a>
                  </p>
                  <p className="user-short-description-text">
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
         
            <div className="user-preview landscape">
              <figure className="user-preview-cover liquid">
                <img src={cover} alt="cover" className="ftreycoverimg" />
              </figure>
              <div className="user-preview-info">
                <div className="user-short-description landscape tiny">
                  <a
                    className="user-short-description-avatar user-avatar small"
                    href="profile-timeline.html"
                  >
                    <div className="user-avatar-border">
                      <div className="hexagon-50-56" />
                    </div>
                    <div className="user-avatar-content">
                      <div
                        className="hexagon-image-30-32"
                        data-src="img/avatar/05.jpg"
                      />
                    </div>
                    <div className="user-avatar-progress">
                      <div className="hexagon-progress-40-44" />
                    </div>
                    <div className="user-avatar-progress-border">
                      <div className="hexagon-border-40-44" />
                    </div>
                    <div className="user-avatar-badge">
                      <div className="user-avatar-badge-border">
                        <div className="hexagon-22-24" />
                      </div>
                      <div className="user-avatar-badge-content">
                        <div className="hexagon-dark-16-18" />
                      </div>
                      <p className="user-avatar-badge-text">12</p>
                    </div>
                  </a>
                  <p className="user-short-description-title">
                    <a href="profile-timeline.html">Cavid Qurbanov</a>
                  </p>
                  <p className="user-short-description-text">
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
         
            <div className="user-preview landscape">
              <figure className="user-preview-cover liquid">
                <img src={cover} alt="cover" className="ftreycoverimg" />
              </figure>
              <div className="user-preview-info">
                <div className="user-short-description landscape tiny">
                  <a
                    className="user-short-description-avatar user-avatar small"
                    href="profile-timeline.html"
                  >
                    <div className="user-avatar-border">
                      <div className="hexagon-50-56" />
                    </div>
                    <div className="user-avatar-content">
                      <div
                        className="hexagon-image-30-32"
                        data-src="img/avatar/05.jpg"
                      />
                    </div>
                    <div className="user-avatar-progress">
                      <div className="hexagon-progress-40-44" />
                    </div>
                    <div className="user-avatar-progress-border">
                      <div className="hexagon-border-40-44" />
                    </div>
                    <div className="user-avatar-badge">
                      <div className="user-avatar-badge-border">
                        <div className="hexagon-22-24" />
                      </div>
                      <div className="user-avatar-badge-content">
                        <div className="hexagon-dark-16-18" />
                      </div>
                      <p className="user-avatar-badge-text">12</p>
                    </div>
                  </a>
                  <p className="user-short-description-title">
                    <a href="profile-timeline.html">Cavid Qurbanov</a>
                  </p>
                  <p className="user-short-description-text">
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
         
            <div className="user-preview landscape">
              <figure className="user-preview-cover liquid">
                <img src={cover} alt="cover" className="ftreycoverimg" />
              </figure>
              <div className="user-preview-info">
                <div className="user-short-description landscape tiny">
                  <a
                    className="user-short-description-avatar user-avatar small"
                    href="profile-timeline.html"
                  >
                    <div className="user-avatar-border">
                      <div className="hexagon-50-56" />
                    </div>
                    <div className="user-avatar-content">
                      <div
                        className="hexagon-image-30-32"
                        data-src="img/avatar/05.jpg"
                      />
                    </div>
                    <div className="user-avatar-progress">
                      <div className="hexagon-progress-40-44" />
                    </div>
                    <div className="user-avatar-progress-border">
                      <div className="hexagon-border-40-44" />
                    </div>
                    <div className="user-avatar-badge">
                      <div className="user-avatar-badge-border">
                        <div className="hexagon-22-24" />
                      </div>
                      <div className="user-avatar-badge-content">
                        <div className="hexagon-dark-16-18" />
                      </div>
                      <p className="user-avatar-badge-text">12</p>
                    </div>
                  </a>
                  <p className="user-short-description-title">
                    <a href="profile-timeline.html">Cavid Qurbanov</a>
                  </p>
                  <p className="user-short-description-text">
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
         
            <div className="user-preview landscape">
              <figure className="user-preview-cover liquid">
                <img src={cover} alt="cover" className="ftreycoverimg" />
              </figure>
              <div className="user-preview-info">
                <div className="user-short-description landscape tiny">
                  <a
                    className="user-short-description-avatar user-avatar small"
                    href="profile-timeline.html"
                  >
                    <div className="user-avatar-border">
                      <div className="hexagon-50-56" />
                    </div>
                    <div className="user-avatar-content">
                      <div
                        className="hexagon-image-30-32"
                        data-src="img/avatar/05.jpg"
                      />
                    </div>
                    <div className="user-avatar-progress">
                      <div className="hexagon-progress-40-44" />
                    </div>
                    <div className="user-avatar-progress-border">
                      <div className="hexagon-border-40-44" />
                    </div>
                    <div className="user-avatar-badge">
                      <div className="user-avatar-badge-border">
                        <div className="hexagon-22-24" />
                      </div>
                      <div className="user-avatar-badge-content">
                        <div className="hexagon-dark-16-18" />
                      </div>
                      <p className="user-avatar-badge-text">12</p>
                    </div>
                  </a>
                  <p className="user-short-description-title">
                    <a href="profile-timeline.html">Cavid Qurbanov</a>
                  </p>
                  <p className="user-short-description-text">
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
        </section>
      </div>
    </>
  );
}
