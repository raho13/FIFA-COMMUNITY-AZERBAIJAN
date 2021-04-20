import React, { useEffect, useRef } from "react";
import { ReactComponent as Avatarmini } from "../icons/avatarborder.svg";
import { ReactComponent as Avatarbig } from "../icons/avatarBig.svg";
import img from "../img/avatar/photo.webp";
export default function Avatar({ size, txt }) {
  const Handletenplate = (size) => {
    if (size === 1) {
      return (
        <div className="avMini">
          <div
            className="Avminiimg"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <Avatarmini className="Avbordermini" />
          <div className="avatarbadge">4</div>
        </div>
      );
    } else if (size === 2) {
      return (
        <div className="avBig">
          <div
            className="Avbigimg"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <Avatarbig className="Avborderbig" />
          <div className="avatarbadgebig">366</div>
        </div>
      );
    } else {
      return (
        <div className="avstory">
          <div
            className="avstoryimg"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <Avatarmini className="Avborderstory" />
          <div className="avatarbadgestory">{txt ? txt : 4}</div>
        </div>
      );
    }
  };
  return Handletenplate(size);
}
