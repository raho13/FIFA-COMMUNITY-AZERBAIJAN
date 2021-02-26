import React from "react";
import { ReactComponent as MoresettingDot } from "../../icons/MoresettingDot.svg";
import Postoptionsdot from "./Postoptionsdot";
import Postoption from "./Postoption";

export default function Model2() {
  return (
    <div id className="widget-box no-padding">
      <Postoptionsdot
        parms={[
          "Edit Post",
          "Delete Post",
          "Make it Featured",
          "Report Post",
          "Report Author",
        ]}
      />
      <div className="widget-box-settings"></div>
      <div className="widget-box-status">
        <div className="widget-box-status-content">
          <div className="user-status">
            <a className="user-status-avatar" href="profile-timeline.html">
              <div className="user-avatar small no-outline">
                <div className="user-avatar-content">
                  <div
                    className="hexagon-image-30-32"
                    data-src="img/avatar/04.jpg"
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
                  <p className="user-avatar-badge-text">6</p>
                </div>
              </div>
            </a>
            <p className="user-status-title medium">
              <a className="bold" href="profile-timeline.html">
                Bearded Wonder
              </a>
            </p>
            <p className="user-status-text small">39 minutes ago</p>
          </div>
          <p className="widget-box-status-text">
            Sorry everyone, but from now on, I will only be able to edit and
            upload one design tutorial per month. This happens because I'm
            having a lot on my plate right now and recording and editing the
            tutorials requiere a lot of attention.
          </p>
          <div className="content-actions">
            <div className="content-action">
              <div className="meta-line">
                <div className="meta-line-list reaction-item-list">
                  <div className="reaction-item">
                    {/* <img
                      className="reaction-image reaction-item-dropdown-trigger"
                      src="img/reaction/dislike.png"
                      alt="reaction-dislike"
                    /> */}
                    {/* <div className="simple-dropdown padded reaction-item-dropdown">
                      <p className="simple-dropdown-text">
                        <img
                          className="reaction"
                          src="img/reaction/dislike.png"
                          alt="reaction-dislike"
                        />
                        <span className="bold">Dislike</span>
                      </p>
                      <p className="simple-dropdown-text">Matt Parker</p>
                      <p className="simple-dropdown-text">Destroy Dex</p>
                      <p className="simple-dropdown-text">The Green Goo</p>
                    </div> */}
                  </div>
                  <div className="reaction-item">
                    {/* <img
                      className="reaction-image reaction-item-dropdown-trigger"
                      src="img/reaction/love.png"
                      alt="reaction-love"
                    /> */}
                    {/* <div className="simple-dropdown padded reaction-item-dropdown">
                      <p className="simple-dropdown-text">
                        <img
                          className="reaction"
                          src="img/reaction/love.png"
                          alt="reaction-love"
                        />{" "}
                        <span className="bold">Love</span>
                      </p>
                      <p className="simple-dropdown-text">Sandra Strange</p>
                      <p className="simple-dropdown-text">Jane Rodgers</p>
                    </div> */}
                  </div>
                  <div className="reaction-item">
                    {" "}
                    {/* <img
                      className="reaction-image reaction-item-dropdown-trigger"
                      src="img/reaction/like.png"
                      alt="reaction-like"
                    /> */}
                    {/* <div className="simple-dropdown padded reaction-item-dropdown">
                      <p className="simple-dropdown-text">
                        <img
                          className="reaction"
                          src="img/reaction/like.png"
                          alt="reaction-like"
                        />{" "}
                        <span className="bold">Like</span>
                      </p>
                      <p className="simple-dropdown-text">Neko Bebop</p>
                      <p className="simple-dropdown-text">Nick Grissom</p>
                      <p className="simple-dropdown-text">Sarah Diamond</p>
                      <p className="simple-dropdown-text">Jett Spiegel</p>
                      <p className="simple-dropdown-text">
                        <span className="bold">and 2 more...</span>
                      </p>
                    </div> */}
                  </div>
                </div>
                <p className="meta-line-text">11</p>
              </div>
              <div className="meta-line">
                <div className="meta-line-list user-avatar-list">
                  <div className="user-avatar micro no-stats">
                    <div className="user-avatar-border">
                      <div className="hexagon-22-24" />
                    </div>
                    <div className="user-avatar-content">
                      <div
                        className="hexagon-image-18-20"
                        data-src="img/avatar/08.jpg"
                      />
                    </div>
                  </div>
                  <div className="user-avatar micro no-stats">
                    <div className="user-avatar-border">
                      <div className="hexagon-22-24" />
                    </div>
                    <div className="user-avatar-content">
                      <div
                        className="hexagon-image-18-20"
                        data-src="img/avatar/11.jpg"
                      />
                    </div>
                  </div>
                  <div className="user-avatar micro no-stats">
                    <div className="user-avatar-border">
                      <div className="hexagon-22-24" />
                    </div>
                    <div className="user-avatar-content">
                      <div
                        className="hexagon-image-18-20"
                        data-src="img/avatar/06.jpg"
                      />
                    </div>
                  </div>
                  <div className="user-avatar micro no-stats">
                    <div className="user-avatar-border">
                      <div className="hexagon-22-24" />
                    </div>
                    <div className="user-avatar-content">
                      <div
                        className="hexagon-image-18-20"
                        data-src="img/avatar/07.jpg"
                      />
                    </div>
                  </div>
                  <div className="user-avatar micro no-stats">
                    <div className="user-avatar-border">
                      <div className="hexagon-22-24" />
                    </div>
                    <div className="user-avatar-content">
                      <div
                        className="hexagon-image-18-20"
                        data-src="img/avatar/10.jpg"
                      />
                    </div>
                  </div>
                </div>
                <p className="meta-line-text">18 Participants</p>
              </div>
            </div>
            <div className="content-action">
              <div className="meta-line">
                <p className="meta-line-link">15 Comments</p>
              </div>
              <div className="meta-line">
                <p className="meta-line-text">0 Shares</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Postoption />
    </div>
  );
}
