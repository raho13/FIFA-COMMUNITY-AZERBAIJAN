import React, { useState } from "react";
import { ReactComponent as Notification } from "../icons/Notifications Icon.svg";
import { ReactComponent as Shopping } from "../icons/Shopping.svg";
import { ReactComponent as Setting } from "../icons/Setting.svg";
import { ReactComponent as Friend } from "../icons/Friends Icon.svg";
import Optionbar from "./Optionbar";
export default function FloatyBar() {
  const [menuIndex, setmenuIndex] = useState(0);
  return (
    <>
      <aside className="floaty-bar">
        <div className="bar-actions">
          <div className="progress-stat">
            <div className="bar-progress-wrap">
              <p className="bar-progress-info">
                Next: <span className="bar-progress-text" />
              </p>
            </div>
            <div id="logged-user-level-cp" className="progress-stat-bar" />
          </div>
        </div>
        <div className="bar-actions">
          <div className="action-list dark">
            <a
              className="action-list-item"
              onClick={() => {
                setmenuIndex(1);
                if (menuIndex === 1) {
                  setmenuIndex(0);
                }
              }}
            >
              <Shopping className="action-list-item-icon icon-shopping-bag" />
            </a>
            <a
              className="action-list-item"
              onClick={() => {
                setmenuIndex(3);
                if (menuIndex === 3) {
                  setmenuIndex(0);
                }
              }}
            >
              <Friend className="action-list-item-icon icon-friend" />
            </a>
            <a
              className="action-list-item unread"
              onClick={() => {
                setmenuIndex(2);
                if (menuIndex === 2) {
                  setmenuIndex(0);
                }
              }}
            >
              <Notification className="action-list-item-icon icon-notification" />
            </a>
          </div>
          <a className="action-item-wrap" href="hub-profile-info.html">
            <div className="action-item dark">
              <Setting className="action-item-icon icon-settings" />
            </div>
          </a>
        </div>
      </aside>
      <div className="opscnt">
        <Optionbar a={1} i={menuIndex} />
        <Optionbar a={2} i={menuIndex} />
        <Optionbar a={3} i={menuIndex} />
      </div>
    </>
  );
}
