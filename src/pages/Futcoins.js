import React from "react";
import img from "../img/badge/bronze-b.png";
import { ReactComponent as Plus } from "../icons/plus.svg";
import Banner from "../component/Banner";
import bnnrimg from "../img/banner/badges-icon.png";
import Checkbox from "../component/Checkbox";
export default function Futcoins() {
  const activeInp = (e) => {
    e.target.parentNode.setAttribute("class", "form-input small active");
  };
  const passiveInp = (e) => {
    e.target.parentNode.setAttribute("class", "form-input small");
  };
  return (
    <>
      <Banner
        img={bnnrimg}
        header="FUT COINS"
        des="Check out all your unlocked and locked badges!"
      />
      <div className="grid grid-3-3-3-3 top-space centered">
        <div className="badge-item-stat">
          <p className="text-sticker">
            <Plus className="text-sticker-icon icon-plus-small" />
            20 Exp
          </p>

          <img
            className="badge-item-stat-image"
            src={img}
            alt="badge-bronze-b"
          />
          <p className="badge-item-stat-title">250.000 FIFA Coins</p>
          <p className="badge-item-stat-text">
            Has posted more than 1 post on their profile
          </p>
          <button id="ookl" className="button small secondary wgtbtn">
            BUY THIS ITEM
          </button>
        </div>
        <div className="badge-item-stat">
          <p className="text-sticker">
            <Plus className="text-sticker-icon icon-plus-small" />
            20 Exp
          </p>

          <img
            className="badge-item-stat-image"
            src={img}
            alt="badge-bronze-b"
          />
          <p className="badge-item-stat-title">250.000 FIFA Coins</p>
          <p className="badge-item-stat-text">
            Has posted more than 1 post on their profile
          </p>
          <button id="ookl" className="button small secondary wgtbtn">
            BUY THIS ITEM
          </button>
        </div>
        <div className="badge-item-stat">
          <p className="text-sticker">
            <Plus className="text-sticker-icon icon-plus-small" />
            20 Exp
          </p>

          <img
            className="badge-item-stat-image"
            src={img}
            alt="badge-bronze-b"
          />
          <p className="badge-item-stat-title">250.000 FIFA Coins</p>
          <p className="badge-item-stat-text">
            Has posted more than 1 post on their profile
          </p>
          <button id="ookl" className="button small secondary wgtbtn">
            BUY THIS ITEM
          </button>
        </div>
        <div className="badge-item-stat">
          <p className="text-sticker">
            <Plus className="text-sticker-icon icon-plus-small" />
            20 Exp
          </p>

          <img
            className="badge-item-stat-image"
            src={img}
            alt="badge-bronze-b"
          />
          <p className="badge-item-stat-title">250.000 FIFA Coins</p>
          <p className="badge-item-stat-text">
            Has posted more than 1 post on their profile
          </p>
          <button id="ookl" className="button small secondary wgtbtn">
            BUY THIS ITEM
          </button>
        </div>
      </div>

      <div className="widget-box mrg">
        <p className="widget-box-title">Köçürmə haqqında</p>
        <div className="widget-box-content padding">
          <div className="switch-option">
            <Checkbox id="chk3" parm="text"/>
            <p className="switch-option-text">
              My main stream is Saturday at 9PM but I also make "Let's Play"
              streams on weekdays. In addition I make special morning streams at
              10AM all 1st‘s, 15th’s and 30th’s of every month with the lastest
              gaming news. All times are EDT Eastern Daylight Time My main
              stream is Saturday at 9PM but I also make "Let's Play" streams on
              weekdays. In addition I make special morning streams at 10AM all
              1st‘s, 15th’s and 30th’s of every month with the lastest gaming
              news. All times are EDT Eastern Daylight Time My main stream is
              Saturday at 9PM but I also make "Let's Play" streams on weekdays.
              In addition I make special morning streams at 10AM all 1st‘s,
              15th’s and 30th’s of every month with the lastest gaming news. All
              times are EDT Eastern Daylight Time My main stream is Saturday at
              9PM but I also make "Let's Play" streams on weekdays. In addition
              I make special morning streams at 10AM all 1st‘s, 15th’s and
              30th’s of every month with the lastest gaming news. All times are
              EDT Eastern Daylight Time
            </p>
          </div>
        </div>
      </div>

      <div className="widget-box mrg">
        <p className="widget-box-title">Köçürmə haqqında</p>
        <div className="widget-box-content padding">
          <div className="switch-option">
            <div className="form-item" id="inpcnt2">
              <div id="inpwidt" className="form-input small">
                <label htmlFor="profile-name">
                  Playstation hesbınızın E-mail adresi
                </label>
                <input
                  onFocus={(e) => {
                    activeInp(e);
                  }}
                  onBlur={(e) => {
                    passiveInp(e);
                  }}
                  type="text"
                  id="profile-name"
                  name="profile_name"
                />
              </div>
              <div id="inpwidt" className="form-input small">
                <label htmlFor="profile-name">Hesabınızın şifrəsi</label>
                <input
                  onFocus={(e) => {
                    activeInp(e);
                  }}
                  onBlur={(e) => {
                    passiveInp(e);
                  }}
                  type="password"
                  id="profile-name"
                  name="profile_name"
                />
              </div>
              <div id="inpwidt" className="form-input small">
                <label htmlFor="profile-name">Əlaqə nömrəsi</label>
                <input
                  onFocus={(e) => {
                    activeInp(e);
                  }}
                  onBlur={(e) => {
                    passiveInp(e);
                  }}
                  type="text"
                  id="profile-name"
                  name="profile_name"
                />
              </div>
              <button id="inpwidt" className="button small secondary bdginpbtn">
                Sifariş yerləşdir
              </button>
            </div>
          </div>
          <div className="switch-option mrg">
            <p className="switch-option-text">
              I make special morning streams at 10AM all 1st‘s, 15th’s and
              30th’s of every month with the lastest gaming news. All times are
              EDT Eastern Daylight Time 30th’s of every month with the lastest
              gaming news. All times are EDT Eastern Daylight Time 30th’s of
              every month with the lastest gaming news. All times are EDT
              Eastern Daylight Time 30th’s of every month with the lastest
              gaming news. All times are EDT Eastern Daylight Time 30th’s of
              every month with the lastest gaming news. All times are EDT
              Eastern Daylight Time
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
