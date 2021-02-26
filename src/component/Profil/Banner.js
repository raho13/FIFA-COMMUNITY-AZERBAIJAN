import React, { useState } from "react";
import Postoptionsdot from "../Postmodels/Postoptionsdot";
import { ReactComponent as Addfri } from "../../icons/addfri.svg";
import { ReactComponent as Discardfri } from "../../icons/discardfri.svg";
export default function Banner() {
  const [tabindex, settabindex] = useState(1);
  const [tap1, settap1] = useState("filter active");
  const [tap2, settap2] = useState("filter");
  const [tap3, settap3] = useState("filter");
  const [activeTab, setactiveTab] = useState(1);
  const handeleTabs = (i) => {
    if (i === 1) {
      settap1("filter active");
      settap2("filter");
      settap3("filter");
      setactiveTab(1);
    }
    if (i === 2) {
      settap1("filter");
      settap2("filter active");
      settap3("filter");
      setactiveTab(2);
    }
    if (i === 3) {
      settap1("filter");
      settap2("filter");
      settap3("filter active");
      setactiveTab(3);
    }
  };
  return (
    <div className="widget-box">
      <div className="widget-box-settings">
        <div className="post-settings-wrap" style={{ position: "relative" }}>
          <div className="post-settings widget-box-post-settings-dropdown-trigger">
            <svg className="post-settings-icon icon-more-dots">
              <use xlinkHref="#svg-more-dots" />
            </svg>
          </div>
          <div id="pstdtscnt">
            <Postoptionsdot parms={["Widget Settings"]} />
          </div>
        </div>
      </div>
      <p className="widget-box-title">
        Groups <span className="highlighted">7</span>
      </p>
      <div className="widget-box-content">
        <div className="filters">
          <p
            onClick={() => {
              handeleTabs(1);
            }}
            className={tap1}
          >
            Newest
          </p>
          <p
            onClick={() => {
              handeleTabs(2);
            }}
            className={tap2}
          >
            Popular
          </p>
          <p
            onClick={() => {
              handeleTabs(3);
            }}
            className={tap3}
          >
            Active
          </p>
        </div>
        <div className="user-status-list">
          <div className="user-status request-small">
            <a className="user-status-avatar" href="group-timeline.html">
              <div className="user-avatar small no-border">
                <div className="user-avatar-content">
                  <div
                    className="hexagon-image-40-44"
                    data-src="img/avatar/29.jpg"
                    style={{
                      width: 40,
                      height: 44,
                      position: "relative",
                    }}
                  >
                    <canvas
                      width={40}
                      height={44}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
              </div>{" "}
            </a>
            <p className="user-status-title">
              <a className="bold" href="group-timeline.html">
                Twitch Streamers
              </a>
            </p>
            <p className="user-status-text small">265 members</p>
            <div className="action-request-list">
              <div className="action-request accept">
                <Addfri className="action-request-icon icon-join-group" />
              </div>
            </div>
          </div>
          <div className="user-status request-small">
            <a className="user-status-avatar" href="group-timeline.html">
              <div className="user-avatar small no-border">
                <div className="user-avatar-content">
                  <div
                    className="hexagon-image-40-44"
                    data-src="img/avatar/29.jpg"
                    style={{
                      width: 40,
                      height: 44,
                      position: "relative",
                    }}
                  >
                    <canvas
                      width={40}
                      height={44}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
              </div>{" "}
            </a>
            <p className="user-status-title">
              <a className="bold" href="group-timeline.html">
                Twitch Streamers
              </a>
            </p>
            <p className="user-status-text small">265 members</p>
            <div className="action-request-list">
              <div className="action-request decline">
                <Discardfri className="action-request-icon icon-join-group" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
