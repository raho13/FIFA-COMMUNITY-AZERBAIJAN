import React, { useState } from "react";
import { ReactComponent as Dots } from "../../icons/Dots.svg";

export default function Postoptionsdot(props) {
  const { parms } = props;
  const [active, setactive] = useState(false);
  const vis = (i) => {
    if (i == 1) {
      if (active) {
        return "simple-dropdown widget-box-post-settings-dropdown actdodsset";
      } else {
        return "simple-dropdown widget-box-post-settings-dropdown pssdodsset";
      }
    } else {
      if (active) {
        return "pstdotsAct";
      } else {
        return "pstdots";
      }
    }
  };
  return (
    <div className="widget-box-settings">
      <div className="post-settings-wrap">
        <Dots
          onClick={() => {
            setactive(!active);
          }}
          className={vis(2)}
        />
        <div className={vis(1)}>
          {parms.map((item) => {
            return (
              <p key={item} className="simple-dropdown-link">
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
