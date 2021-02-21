import React, { useState } from "react";
import { ReactComponent as Src } from "../icons/Searcicon.svg";
export default function Srcbanner() {
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
            <select id="friends-filter-category" name="friends_filter_category">
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
  );
}
