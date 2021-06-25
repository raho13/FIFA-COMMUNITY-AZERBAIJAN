import React, { useEffect, useState } from "react";
import Postheader from "./Postheader";
import Postoption from "./Postoption";
import { ReactComponent as Checked } from "../../icons/checked.svg";
import Postoptionsdot from "./Postoptionsdot";
import img1 from "../../img/cover/10.jpg";
import img2 from "../../img/cover/16.jpg";

export default function Voteimgpost() {
  const [Check, setCheck] = useState(0);
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
      <div className="widget-box-settings"></div>
      <div className="widget-box-status">
        <div className="widget-box-status-content">
          <Postheader />
          <p className="widget-box-status-text">
            tutorials requiere a lot of attention.
          </p>
          <div className="picture-collage">
            <div className="picture-collage-row medium">
              <div
                onClick={() => setCheck(0)}
                className="picture-collage-item popup-picture-trigger"
              >
                <div className="photo-preview">
                  <figure className="photo-preview-image liquid">
                    <img className="pstimg" src={img2} alt="photo-preview-10" />
                  </figure>
                </div>
                <div className="check_bar">
                  <h3>20%</h3>
                  <div className="bar_spin">
                    <div style={{ width: "20%" }}>
                      <span>.</span>
                    </div>
                  </div>
                </div>
                <div className="vote_title">
                  <p className="widget-box-status-text">tutorials.</p>
                  {Check === 0 ? (
                    <div className="vote_check">
                      <Checked />
                    </div>
                  ) : null}
                </div>
              </div>
              <div
                onClick={() => setCheck(1)}
                className="picture-collage-item popup-picture-trigger"
              >
                <div className="photo-preview">
                  <figure className="photo-preview-image liquid">
                    <img src={img1} alt="photo-preview-10" className="pstimg" />
                  </figure>
                </div>
                <div className="check_bar">
                  <h3>80%</h3>
                  <div className="bar_spin">
                    <div style={{ width: "80%" }}>
                      <span>.</span>
                    </div>
                  </div>
                </div>
                <div className="vote_title">
                  <p className="widget-box-status-text">tutorials.</p>
                  {Check === 1 ? (
                    <div className="vote_check">
                      <Checked />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
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
