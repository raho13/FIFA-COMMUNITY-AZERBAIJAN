import React from "react";
import { ReactComponent as MoresettingDot } from "../../icons/MoresettingDot.svg";
import { ReactComponent as Addfriend } from "../../icons/Add-friend.svg";

export default function Members() {
  return (
    <div className="widget-box">
      <div className="widget-box-settings">
        <div className="post-settings-wrap">
          <div className="post-settings widget-box-post-settings-dropdown-trigger">
            <MoresettingDot className="post-settings-icon icon-more-dots" />
          </div>
          {/* <div className="simple-dropdown widget-box-post-settings-dropdown">
            <p className="simple-dropdown-link">Widget Settings</p>
          </div> */}
        </div>
      </div>
      <p className="widget-box-title">Members</p>
      <div className="widget-box-content">
        <div className="filters">
          <p className="filter">Newest</p>
          <p className="filter active">Popular</p>
          <p className="filter">Active</p>
        </div>
        <div className="user-status-list">
          <div className="user-status request-small">
            <a className="user-status-avatar" href="profile-timeline.html">
              <div className="user-avatar small no-outline">
                <div className="user-avatar-content">
                  <div
                    className="hexagon-image-30-32"
                    data-src="img/avatar/07.jpg"
                  />
                </div>
                <div className="user-avatar-progress">
                  <div className="hexagon-progress-40-44" />
                </div>
                <div className="user-avatar-progress-border">
                  <div className="hexagon-border-40-44" />
                </div>
                <div className="user-avatar-badge">
                  <div className="user-avatar-badge-border">
                    <div className="hexagon-22-24" />
                  </div>
                  <div className="user-avatar-badge-content">
                    <div className="hexagon-dark-16-18" />
                  </div>
                  <p className="user-avatar-badge-text">26</p>
                </div>
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
                <Addfriend className="action-request-icon icon-add-friend"/>
                
              </div>
            </div>
          </div>
       
          <div className="user-status request-small">
            <a className="user-status-avatar" href="profile-timeline.html">
              <div className="user-avatar small no-outline">
                <div className="user-avatar-content">
                  <div
                    className="hexagon-image-30-32"
                    data-src="img/avatar/07.jpg"
                  />
                </div>
                <div className="user-avatar-progress">
                  <div className="hexagon-progress-40-44" />
                </div>
                <div className="user-avatar-progress-border">
                  <div className="hexagon-border-40-44" />
                </div>
                <div className="user-avatar-badge">
                  <div className="user-avatar-badge-border">
                    <div className="hexagon-22-24" />
                  </div>
                  <div className="user-avatar-badge-content">
                    <div className="hexagon-dark-16-18" />
                  </div>
                  <p className="user-avatar-badge-text">26</p>
                </div>
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
                <Addfriend className="action-request-icon icon-add-friend"/>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
