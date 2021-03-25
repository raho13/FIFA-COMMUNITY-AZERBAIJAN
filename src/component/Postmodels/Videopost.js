import React from "react";
import Postoption from "./Postoption";
import Postoptionsdot from "./Postoptionsdot";
import Avatar from "../Avatar";
import Postheader from "./Postheader";
export default function Videopost() {
  return (
    <div className="widget-box no-padding">
      <Postoptionsdot
        parms={[
          "Edit Post",
          "Delete Post",
          "Make it Featured",
          "Report Post",
          "Report Author",
        ]}
      />
      <div className="widget-box-settings">
        <div className="post-settings-wrap"></div>
      </div>
      <div className="widget-box-status">
        <div className="widget-box-status-content">
       <Postheader/>
          <p className="widget-box-status-text">
            Hi to everyone! Check out my latest video of the outlaws expansion
            for Court Striker GO. I'm really excited because my last video had
            almost 50.000 views.
          </p>
        </div>
        <div className="iframe-wrap">
          {" "}
          <iframe
            src="https://www.youtube.com/embed/rk-wIgg9fNk"
            allowFullScreen
          />
        </div>
        <div className="widget-box-status-content">
          <div className="content-actions">
            <div className="content-action">
              <div className="meta-line">
                <div className="meta-line-list reaction-item-list">
                  {/* <div className="reaction-item"> <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/love.png" alt="reaction-love" />
                                        <div className="simple-dropdown padded reaction-item-dropdown">
                                            <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/love.png" alt="reaction-love" /> <span className="bold">Love</span></p>
                                            <p className="simple-dropdown-text">Matt Parker</p>
                                            <p className="simple-dropdown-text">Destroy Dex</p>
                                            <p className="simple-dropdown-text">The Green Goo</p>
                                        </div>
                                    </div>
                                    <div className="reaction-item"> <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/happy.png" alt="reaction-happy" />
                                        <div className="simple-dropdown padded reaction-item-dropdown">
                                            <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/happy.png" alt="reaction-happy" /> <span className="bold">Happy</span></p>
                                            <p className="simple-dropdown-text">Sandra Strange</p>
                                            <p className="simple-dropdown-text">Jane Rodgers</p>
                                        </div>
                                    </div>
                                    <div className="reaction-item"> <img className="reaction-image reaction-item-dropdown-trigger" src="img/reaction/like.png" alt="reaction-like" />
                                        <div className="simple-dropdown padded reaction-item-dropdown">
                                            <p className="simple-dropdown-text"><img className="reaction" src="img/reaction/like.png" alt="reaction-like" /> <span className="bold">Like</span></p>
                                            <p className="simple-dropdown-text">Neko Bebop</p>
                                            <p className="simple-dropdown-text">Nick Grissom</p>
                                            <p className="simple-dropdown-text">Sarah Diamond</p>
                                            <p className="simple-dropdown-text">Jett Spiegel</p>
                                            <p className="simple-dropdown-text">Marcus Jhonson</p>
                                            <p className="simple-dropdown-text"><span className="bold">and 6 more...</span></p>
                                        </div>
                                    </div>
                                */}
                </div>
                <p className="meta-line-text">16</p>
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
                        data-src="img/avatar/13.jpg"
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
                        data-src="img/avatar/22.jpg"
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
                </div>
                <p className="meta-line-text">19 Participants</p>
              </div>
            </div>
            <div className="content-action">
              <div className="meta-line">
                <p className="meta-line-link">2 Comments</p>
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
