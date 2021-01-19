import React from "react";
import Postoption from "./Postoption";

export default function Model1() {
  return (
    <div className="widget-box no-padding">
      <div className="widget-box-settings">
        <div className="post-settings-wrap">
        </div>
      </div>
      <div className="widget-box-status">
        <div className="widget-box-status-content">
          <div className="user-status">
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
            <p className="user-status-title medium">
              <a className="bold" href="profile-timeline.html">
                Sarah Diamond
              </a>
              created a <span className="bold">poll</span>
            </p>
            <p className="user-status-text small">9 minutes ago</p>
          </div>
          <p className="widget-box-status-text">
            I've created a poll to ask all of you what you would like to see
            more in my upcoming videos! It will only take a couple of
            seconds...thanks to all in advance!!
          </p>
          <div className="poll-box">
            <p className="poll-title">
              What do you wanna see in my upcoming videos?
            </p>
            <p className="poll-text">Poll ends in 5 days</p>
            <form className="form">
              <div className="form-row">
                <div className="form-item">
                  <div className="checkbox-wrap">
                    <input
                      type="radio"
                      id="poll-option-1"
                      name="poll_option"
                      defaultValue="option-1"
                    />
                    <div className="checkbox-box round" />
                    <label htmlFor="poll-option-1">Retro Games</label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-item">
                  <div className="checkbox-wrap">
                    <input
                      type="radio"
                      id="poll-option-2"
                      name="poll_option"
                      defaultValue="option-2"
                      defaultChecked
                    />
                    <div className="checkbox-box round" />
                    <label htmlFor="poll-option-2">Walkthroughs</label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-item">
                  <div className="checkbox-wrap">
                    <input
                      type="radio"
                      id="poll-option-3"
                      name="poll_option"
                      defaultValue="option-3"
                    />
                    <div className="checkbox-box round" />
                    <label htmlFor="poll-option-3">Unboxings</label>
                  </div>
                </div>
              </div>
            </form>
            <div className="poll-box-actions">
              <p className="button small secondary">Vote Now!</p>
            </div>
          </div>
          <div className="content-actions">
            <div className="content-action">
              <div className="meta-line">
                <div className="meta-line-list reaction-item-list">
                  <div className="reaction-item">
                    {/* <img
                      className="reaction-image reaction-item-dropdown-trigger"
                      src="img/reaction/funny.png"
                      alt="reaction-funny"
                    /> */}
                    {/* <div className="simple-dropdown padded reaction-item-dropdown">
                      <p className="simple-dropdown-text">
                        <img
                          className="reaction"
                          src="img/reaction/funny.png"
                          alt="reaction-funny"
                        />
                        <span className="bold">Funny</span>
                      </p>
                      <p className="simple-dropdown-text">Matt Parker</p>
                      <p className="simple-dropdown-text">Destroy Dex</p>
                      <p className="simple-dropdown-text">The Green Goo</p>
                    </div> */}

                  </div>
                  <div className="reaction-item">

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
                        />
                        <span className="bold">Like</span>
                      </p>
                      <p className="simple-dropdown-text">Sandra Strange</p>
                      <p className="simple-dropdown-text">Jane Rodgers</p>
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
                        />
                        <span className="bold">Love</span>
                      </p>
                      <p className="simple-dropdown-text">Neko Bebop</p>
                      <p className="simple-dropdown-text">Nick Grissom</p>
                      <p className="simple-dropdown-text">Sarah Diamond</p>
                      <p className="simple-dropdown-text">Jett Spiegel</p>
                    </div> */}
                  </div>
                </div>
                <p className="meta-line-text">9</p>
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
                        data-src="img/avatar/09.jpg"
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
                  <div className="user-avatar micro no-stats">
                    <div className="user-avatar-border">
                      <div className="hexagon-22-24" />
                    </div>
                    <div className="user-avatar-content">
                      <div
                        className="hexagon-image-18-20"
                        data-src="img/avatar/12.jpg"
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
                        data-src="img/avatar/16.jpg"
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
                </div>
                <p className="meta-line-text">11 Participants</p>
              </div>
            </div>
            <div className="content-action">
              <div className="meta-line">
                <p className="meta-line-link">1 Comments</p>
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
