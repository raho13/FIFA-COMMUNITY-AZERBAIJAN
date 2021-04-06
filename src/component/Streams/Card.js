import React from "react";
import { Link } from "react-router-dom";
import img from "../../img/cover/01.jpg";
import { ReactComponent as Azerbaijan } from "../../icons/azerbaijan.svg";

export default function Card() {
  return (
    <div className="sections-slider-item card">
      <img src={img} alt="cover-01" className="card-img" />
      <div id="fgh">
        <div className="card-info">
          <div className="cardheader">
            <Link className="menu-item-link" to="/Lessons">
              <div className="cardname">Rahib</div>
            </Link>
            <div className="cardpoint">7.34 saat</div>
          </div>
          <div className="cardbody">
            <div className="cardlang">
              <p id="cardlngtxt">Dil</p>
              <Azerbaijan className="cardflag" />
              <Azerbaijan className="cardflag" />
              <Azerbaijan className="cardflag" />
              <Azerbaijan className="cardflag" />
            </div>
            <div className="cardlang">
              <p id="cardcaptxt">ALTYAZI</p>
              <Azerbaijan className="cardflag" />
              <Azerbaijan className="cardflag" />
              <Azerbaijan className="cardflag" />
            </div>
          </div>
          <div className="cardstart">
            <Link className="menu-item-link" to="/Lessons">
              <p className="button small secondary bnm">Kursa başla</p>
            </Link>
            <p className="button small secondary bnm">Önizləmə</p>
          </div>
        </div>
      </div>
    </div>
  );
}
