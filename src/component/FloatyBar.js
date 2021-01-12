import React from "react";
import { ReactComponent as Notification } from "../icons/Notifications Icon.svg";
import { ReactComponent as Shopping } from "../icons/Shopping.svg";
import { ReactComponent as Setting } from "../icons/Setting.svg";
import { ReactComponent as Friend } from "../icons/Friends Icon.svg";
export default function FloatyBar() {
  return (
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
          <a className="action-list-item" href="marketplace-cart.html">
            <Shopping className="action-list-item-icon icon-shopping-bag"/>
             
          </a>
          <a className="action-list-item" href="hub-profile-requests.html">
            <Friend className="action-list-item-icon icon-friend"/>
          </a>
          <a
            className="action-list-item unread"
            href="hub-profile-notifications.html"
          >
            <Notification className="action-list-item-icon icon-notification"/>
             
          </a>
        </div>
        <a className="action-item-wrap" href="hub-profile-info.html">
          <div className="action-item dark">
            <Setting className="action-item-icon icon-settings"/>
          </div>
        </a>
      </div>
    </aside>
  );
}
