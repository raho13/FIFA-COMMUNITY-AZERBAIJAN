import React from "react";
import Postoption from "./Postoption";
import Postoptionsdot from "./Postoptionsdot";

export default function Votepost() {
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
      <div className="widget-box-status">
        <div className="widget-box-status-content">
          <div className="user-status">
            {" "}
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
            <div className="poll-results">
              <div className="poll-result">
                <div className="progress-stat">
                  <div className="bar-progress-wrap medium">
                    <p className="bar-progress-info medium negative regular">
                      Walkthroughs
                      <span className="bar-progress-text no-space">
                        62<span className="bar-progress-unit">%</span>
                      </span>
                    </p>
                  </div>
                  <div id="poll-result-1" className="progress-stat-bar">
                    {" "}
                    <div className="prgbar"></div>{" "}
                  </div>
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
                          data-src="img/avatar/05.jpg"
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
                          data-src="img/avatar/30.jpg"
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
                          data-src="img/avatar/03.jpg"
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
                          data-src="img/avatar/04.jpg"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="meta-line-text">12 Votes</p>
                </div>
              </div>
              <div className="poll-result">
                <div className="progress-stat">
                  <div className="bar-progress-wrap medium">
                    <p className="bar-progress-info medium negative regular">
                      Retro Games
                      <span className="bar-progress-text no-space">
                        62<span className="bar-progress-unit">%</span>
                      </span>
                    </p>
                  </div>
                  <div id="poll-result-1" className="progress-stat-bar">
                    {" "}
                    <div className="prgbar"></div>{" "}
                  </div>
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
                          data-src="img/avatar/21.jpg"
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
                          data-src="img/avatar/19.jpg"
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
                          data-src="img/avatar/14.jpg"
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
                          data-src="img/avatar/15.jpg"
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
                  </div>
                  <p className="meta-line-text">7 Votes</p>
                </div>
              </div>
              <div className="poll-result">
                <div className="progress-stat">
                  <div className="bar-progress-wrap medium">
                    <p className="bar-progress-info medium negative regular">
                      Unboxings
                      <span className="bar-progress-text no-space">
                        62<span className="bar-progress-unit">%</span>
                      </span>
                    </p>
                  </div>
                  <div id="poll-result-1" className="progress-stat-bar">
                    {" "}
                    <div className="prgbar"></div>{" "}
                  </div>
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
                          data-src="img/avatar/18.jpg"
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
                          data-src="img/avatar/02.jpg"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="meta-line-text">2 Votes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-actions">
            <div className="content-action">
              <div className="meta-line">
                <div className="meta-line-list reaction-item-list"></div>
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
