import React, { useState } from "react";
import { ReactComponent as Addfriend } from "../../icons/Add-friend.svg";
import Postoptionsdot from "../../component/Postmodels/Postoptionsdot";
import Avatar from '../Avatar'
export default function Members() {
  const [tap1, settap1] = useState("filter active");
  const [tap2, settap2] = useState("filter");
  const [activeTab, setactiveTab] = useState(1);
  const handeleTabs = (i) => {
    if (i === 1) {
      settap1("filter active");
      settap2("filter");
      setactiveTab(1);
    }
    if (i === 2) {
      settap1("filter");
      settap2("filter active");
      setactiveTab(2);
    }
  };
  return (
    <div className="widget-box">
      <Postoptionsdot parms={["Widget Settings"]} />

      <p className="widget-box-title">TOP 5 FIFAÇI</p>
      <div className="widget-box-content">
        <div className="filters">
          <p
            onClick={() => {
              handeleTabs(1);
            }}
            className={tap1}
          >
            Aktivliyə görə
          </p>
          <p
            onClick={() => {
              handeleTabs(2);
            }}
            className={tap2}
          >
            İzləyici sayına görə
          </p>
        </div>
        {activeTab == 1 ? (
          <div className="user-status-list 1">
            <div className="user-status request-small">
              <a className="user-status-avatar" href="gerfe">
                <div className="user-avatar small no-outline">
                <Avatar size={1} />
                </div>
              </a>
              <p className="user-status-title">
                <a className="bold" href="profile-timeline.html">
                  Sarah Diamond
                </a>
              </p>
              <p className="user-status-text small">24.5K profile views</p>
              <div className="action-request-list">
                <div className="action-request accept">
                  <Addfriend className="action-request-icon icon-add-friend" />
                </div>
              </div>
            </div>

            <div className="user-status request-small">
              <a className="user-status-avatar" href="profile-timeline.html">
                <div className="user-avatar small no-outline">
                <Avatar size={1} />
                </div>
              </a>
              <p className="user-status-title">
                <a className="bold" href="profile-timeline.html">
                  Sarah Diamond
                </a>
              </p>
              <p className="user-status-text small">24.5K profile views</p>
              <div className="action-request-list">
                <div className="action-request accept">
                  <Addfriend className="action-request-icon icon-add-friend" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="user-status-list 2">
            <div className="user-status request-small">
              <a className="user-status-avatar" href="profile-timeline.html">
                <div className="user-avatar small no-outline">
                <Avatar size={1} />
                </div>
              </a>
              <p className="user-status-title">
                <a className="bold" href="profile-timeline.html">
                  Rahib Rzayev
                </a>
              </p>
              <p className="user-status-text small">24.5K profile views</p>
              <div className="action-request-list">
                <div className="action-request accept">
                  <Addfriend className="action-request-icon icon-add-friend" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
