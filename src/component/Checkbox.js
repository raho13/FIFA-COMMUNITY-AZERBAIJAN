import React, { useState } from "react";
import { ReactComponent as CheckX } from "../icons/checkX.svg";
export default function Checkbox({ parm, id }) {
  const [icnVis, seticnVis] = useState(false);

  return (
    <div className="checkbox-wrap">
      <input type="checkbox" id={id} name="login_remember" />
      <div className="checkbox-box">
        {icnVis ? <CheckX className="chckX" /> : null}
      </div>
      <label
        onClick={() => {
          seticnVis(!icnVis);
        }}
        htmlFor={id}
      >
        {parm}
      </label>
    </div>
  );
}
