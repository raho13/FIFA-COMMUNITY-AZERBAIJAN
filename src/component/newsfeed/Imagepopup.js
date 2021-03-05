import React, { useContext, useState } from "react";
import coverimg from "../../img/cover/04.jpg";
import like from "../../img/reaction/like.png";
import love from "../../img/reaction/love.png";
import dislike from "../../img/reaction/dislike.png";
import happy from "../../img/reaction/happy.png";
import funny from "../../img/reaction/funny.png";
import wow from "../../img/reaction/wow.png";
import angry from "../../img/reaction/angry.png";
import sad from "../../img/reaction/sad.png";
import { ReactComponent as Reaction } from "../../icons/React.svg";
import { menuContext } from "../../context";
import { ReactComponent as X } from "../../icons/X.svg";
import Postoptionsdot from "../../component/Postmodels/Postoptionsdot";
import { Scrollbars } from "react-custom-scrollbars";
import { ReactComponent as Comment } from "../../icons/comment.svg";
import { ReactComponent as Share } from "../../icons/Share.svg";
import Minipostops from "../Postmodels/Minipostops";
export default function Imagepopup() {
  const [reactclass, setreactclass] = useState(false);
  const reacthandler = () => {
    if (reactclass) {
      return "reactionopsact";
    } else {
      return "reactionopspsv";
    }
  };

  const activeInp = (e) => {
    e.target.parentNode.setAttribute("class", "form-input small active");
  };
  const passiveInp = (e) => {
    e.target.parentNode.setAttribute("class", "form-input small");
  };
  const { popup, setpopup } = useContext(menuContext);
  return (
    <div id="popupmain">
      <div id="popupcnt">
        <div className="popup-picture" id="popup-picture">
          <div
            onClick={() => {
              setpopup({ vis: false });
            }}
            id="popup-close-button"
            className="popup-close-button popup-picture-trigger"
          >
            <X className="popup-close-button-icon icon-cross" />
          </div>
          <div className="widget-box no-padding">
            <div
              className="widget-box-scrollable"
              data-simplebar="init"
              style={{ height: 500 }}
            >
              <Scrollbars>
                <div className="simplebar-wrapper">
                  <div className="simplebar-mask">
                    <div
                      className="simplebar-offset"
                      style={{ right: 0, bottom: 0 }}
                    >
                      <div
                        className="simplebar-content-wrapper"
                        style={{ height: "auto", overflow: "hidden" }}
                      >
                        <div
                          className="simplebar-content"
                          style={{ padding: 0 }}
                        >
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
                              {" "}
                              <div className="user-status">
                                {" "}
                                <a
                                  className="user-status-avatar"
                                  href="profile-timeline.html"
                                >
                                  {" "}
                                  <div className="user-avatar small no-outline">
                                    {" "}
                                    <div className="user-avatar-content">
                                      {" "}
                                      <div
                                        className="hexagon-image-30-32"
                                        data-src="img/avatar/01.jpg"
                                        style={{
                                          width: 30,
                                          height: 32,
                                          position: "relative",
                                        }}
                                      >
                                        <canvas
                                          width={30}
                                          height={32}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="user-avatar-progress">
                                      {" "}
                                      <div
                                        className="hexagon-progress-40-44"
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative",
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="user-avatar-progress-border">
                                      {" "}
                                      <div
                                        className="hexagon-border-40-44"
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative",
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="user-avatar-badge">
                                      {" "}
                                      <div className="user-avatar-badge-border">
                                        {" "}
                                        <div
                                          className="hexagon-22-24"
                                          style={{
                                            width: 22,
                                            height: 24,
                                            position: "relative",
                                          }}
                                        >
                                          <canvas
                                            width={22}
                                            height={24}
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0,
                                            }}
                                          />
                                        </div>
                                      </div>
                                      <div className="user-avatar-badge-content">
                                        {" "}
                                        <div
                                          className="hexagon-dark-16-18"
                                          style={{
                                            width: 16,
                                            height: 18,
                                            position: "relative",
                                          }}
                                        >
                                          <canvas
                                            width={16}
                                            height={18}
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0,
                                            }}
                                          />
                                        </div>
                                      </div>
                                      <p className="user-avatar-badge-text">
                                        24
                                      </p>
                                    </div>
                                  </div>
                                </a>{" "}
                                <p className="user-status-title medium">
                                  <a
                                    className="bold"
                                    href="profile-timeline.html"
                                  >
                                    Marina Valentine
                                  </a>
                                </p>
                                <p className="user-status-text small">
                                  29 minutes ago
                                </p>
                              </div>
                              <p className="widget-box-status-text">
                                Here's a sneak peek of the official box cover
                                art for <a href="#">Machine Wasteland II</a>!
                                Remember that I'll be having a stream showing a
                                preview tommorrow at 9PM PCT!
                              </p>
                              <div className="tag-list">
                                {" "}
                                <a
                                  className="tag-item secondary"
                                  href="newsfeed.html"
                                >
                                  Cover
                                </a>{" "}
                                <a
                                  className="tag-item secondary"
                                  href="newsfeed.html"
                                >
                                  Preview
                                </a>{" "}
                                <a
                                  className="tag-item secondary"
                                  href="newsfeed.html"
                                >
                                  Art
                                </a>{" "}
                                <a
                                  className="tag-item secondary"
                                  href="newsfeed.html"
                                >
                                  Machine
                                </a>{" "}
                                <a
                                  className="tag-item secondary"
                                  href="newsfeed.html"
                                >
                                  Wasteland
                                </a>{" "}
                              </div>
                              <div className="content-actions">
                                {" "}
                                <div className="content-action">
                                  {" "}
                                  <div className="meta-line">
                                    {" "}
                                    <div className="meta-line-list reaction-item-list">
                                      {" "}
                                      <div
                                        className="reaction-item"
                                        style={{ position: "relative" }}
                                      >
                                        {" "}
                                        <img
                                          className="reaction-image reaction-item-dropdown-trigger"
                                          src="img/reaction/love.png"
                                          alt="reaction-love"
                                        />{" "}
                                        <div
                                          className="simple-dropdown padded reaction-item-dropdown"
                                          style={{
                                            position: "absolute",
                                            zIndex: 9999,
                                            bottom: 38,
                                            left: "-16px",
                                            opacity: 0,
                                            visibility: "hidden",
                                            transform: "translate(0px, 20px)",
                                            transition:
                                              "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s",
                                          }}
                                        >
                                          {" "}
                                          <p className="simple-dropdown-text">
                                            <img
                                              className="reaction"
                                              src="img/reaction/love.png"
                                              alt="reaction-love"
                                            />{" "}
                                            <span className="bold">Love</span>
                                          </p>
                                          <p className="simple-dropdown-text">
                                            Destroy Dex
                                          </p>
                                          <p className="simple-dropdown-text">
                                            The Green Goo
                                          </p>
                                          <p className="simple-dropdown-text">
                                            Bearded Wonder
                                          </p>
                                          <p className="simple-dropdown-text">
                                            Sandra Strange
                                          </p>
                                          <p className="simple-dropdown-text">
                                            Matt Parker
                                          </p>
                                          <p className="simple-dropdown-text">
                                            James Murdock
                                          </p>
                                          <p className="simple-dropdown-text">
                                            <span className="bold">
                                              and 14 more...
                                            </span>
                                          </p>
                                        </div>
                                      </div>
                                      <div
                                        className="reaction-item"
                                        style={{ position: "relative" }}
                                      >
                                        {" "}
                                        <img
                                          className="reaction-image reaction-item-dropdown-trigger"
                                          src="img/reaction/wow.png"
                                          alt="reaction-wow"
                                        />{" "}
                                        <div
                                          className="simple-dropdown padded reaction-item-dropdown"
                                          style={{
                                            position: "absolute",
                                            zIndex: 9999,
                                            bottom: 38,
                                            left: "-16px",
                                            opacity: 0,
                                            visibility: "hidden",
                                            transform: "translate(0px, 20px)",
                                            transition:
                                              "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s",
                                          }}
                                        >
                                          {" "}
                                          <p className="simple-dropdown-text">
                                            <img
                                              className="reaction"
                                              src="img/reaction/wow.png"
                                              alt="reaction-wow"
                                            />{" "}
                                            <span className="bold">Wow</span>
                                          </p>
                                          <p className="simple-dropdown-text">
                                            Jett Spiegel
                                          </p>
                                        </div>
                                      </div>
                                      <div
                                        className="reaction-item"
                                        style={{ position: "relative" }}
                                      >
                                        {" "}
                                        <img
                                          className="reaction-image reaction-item-dropdown-trigger"
                                          src="img/reaction/like.png"
                                          alt="reaction-like"
                                        />{" "}
                                        <div
                                          className="simple-dropdown padded reaction-item-dropdown"
                                          style={{
                                            position: "absolute",
                                            zIndex: 9999,
                                            bottom: 38,
                                            left: "-16px",
                                            opacity: 0,
                                            visibility: "hidden",
                                            transform: "translate(0px, 20px)",
                                            transition:
                                              "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s",
                                          }}
                                        >
                                          <p className="simple-dropdown-text">
                                            <img
                                              className="reaction"
                                              src="img/reaction/like.png"
                                              alt="reaction-like"
                                            />{" "}
                                            <span className="bold">Like</span>
                                          </p>
                                          <p className="simple-dropdown-text">
                                            Neko Bebop
                                          </p>
                                          <p className="simple-dropdown-text">
                                            Nick Grissom
                                          </p>
                                          <p className="simple-dropdown-text">
                                            Sarah Diamond
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <p className="meta-line-text">24</p>
                                  </div>
                                </div>
                                <div className="content-action">
                                  <div className="meta-line">
                                    <p className="meta-line-link">
                                      13 Comments
                                    </p>
                                  </div>
                                  <div className="meta-line">
                                    <p className="meta-line-text">0 Shares</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="post-options">
                            <div
                              className="post-option-wrap"
                              style={{ position: "relative" }}
                            >
                              <div
                                onClick={() => {
                                  setreactclass(!reactclass);
                                }}
                                className="post-option no-text reaction-options-dropdown-trigger"
                              >
                                <Reaction className="post-option-icon icon-thumbs-up" />
                              </div>
                              <div
                                className="reaction-options small reaction-options-dropdown"
                                id={reacthandler()}
                              >
                                <div
                                  className="reaction-option text-tooltip-tft"
                                  data-title="Like"
                                  style={{ position: "relative" }}
                                >
                                  <img
                                    className="reaction-option-image"
                                    src={like}
                                    alt="reaction-like"
                                  />
                                  <div className="xm-tooltip" id="reacsicn">
                                    <p className="xm-tooltip-text">Like</p>
                                  </div>
                                </div>
                                <div
                                  className="reaction-option text-tooltip-tft"
                                  data-title="Love"
                                  style={{ position: "relative" }}
                                >
                                  <img
                                    className="reaction-option-image"
                                    src={love}
                                    alt="reaction-love"
                                  />
                                  <div className="xm-tooltip" id="reacsicn">
                                    <p className="xm-tooltip-text">Love</p>
                                  </div>
                                </div>
                                <div
                                  className="reaction-option text-tooltip-tft"
                                  data-title="Dislike"
                                  style={{ position: "relative" }}
                                >
                                  {" "}
                                  <img
                                    className="reaction-option-image"
                                    src={dislike}
                                    alt="reaction-dislike"
                                  />{" "}
                                  <div className="xm-tooltip" id="reacsicn">
                                    <p className="xm-tooltip-text">Dislike</p>
                                  </div>
                                </div>
                                <div
                                  className="reaction-option text-tooltip-tft"
                                  data-title="Happy"
                                  style={{ position: "relative" }}
                                >
                                  {" "}
                                  <img
                                    className="reaction-option-image"
                                    src={happy}
                                    alt="reaction-happy"
                                  />{" "}
                                  <div className="xm-tooltip" id="reacsicn">
                                    <p className="xm-tooltip-text">Happy</p>
                                  </div>
                                </div>
                                <div
                                  className="reaction-option text-tooltip-tft"
                                  data-title="Funny"
                                  style={{ position: "relative" }}
                                >
                                  {" "}
                                  <img
                                    className="reaction-option-image"
                                    src={funny}
                                    alt="reaction-funny"
                                  />{" "}
                                  <div className="xm-tooltip" id="reacsicn">
                                    <p className="xm-tooltip-text">Funny</p>
                                  </div>
                                </div>
                                <div
                                  className="reaction-option text-tooltip-tft"
                                  data-title="Wow"
                                  style={{ position: "relative" }}
                                >
                                  {" "}
                                  <img
                                    className="reaction-option-image"
                                    src={wow}
                                    alt="reaction-wow"
                                  />{" "}
                                  <div className="xm-tooltip" id="reacsicn">
                                    <p className="xm-tooltip-text">Wow</p>
                                  </div>
                                </div>
                                <div
                                  className="reaction-option text-tooltip-tft"
                                  data-title="Angry"
                                  style={{ position: "relative" }}
                                >
                                  {" "}
                                  <img
                                    className="reaction-option-image"
                                    src={angry}
                                    alt="reaction-angry"
                                  />{" "}
                                  <div className="xm-tooltip" id="reacsicn">
                                    <p className="xm-tooltip-text">Angry</p>
                                  </div>
                                </div>
                                <div
                                  className="reaction-option text-tooltip-tft"
                                  data-title="Sad"
                                  style={{ position: "relative" }}
                                >
                                  <img
                                    className="reaction-option-image"
                                    src={sad}
                                    alt="reaction-sad"
                                  />{" "}
                                  <div className="xm-tooltip" id="reacsicn">
                                    <p className="xm-tooltip-text">Sad</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="post-option no-text active">
                              <Comment className="post-option-icon icon-comment" />
                            </div>
                            <div className="post-option no-text">
                              <Share className="post-option-icon icon-share" />
                            </div>
                          </div>

                          <div className="post-comment-list">
                            <div className="post-comment">
                              {" "}
                              <a
                                className="user-avatar small no-outline"
                                href="profile-timeline.html"
                              >
                                {" "}
                                <div className="user-avatar-content">
                                  {" "}
                                  <div
                                    className="hexagon-image-30-32"
                                    data-src="img/avatar/05.jpg"
                                    style={{
                                      width: 30,
                                      height: 32,
                                      position: "relative",
                                    }}
                                  >
                                    <canvas
                                      width={30}
                                      height={32}
                                      style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="user-avatar-progress">
                                  {" "}
                                  <div
                                    className="hexagon-progress-40-44"
                                    style={{
                                      width: 40,
                                      height: 44,
                                      position: "relative",
                                    }}
                                  >
                                    <canvas
                                      width={40}
                                      height={44}
                                      style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="user-avatar-progress-border">
                                  {" "}
                                  <div
                                    className="hexagon-border-40-44"
                                    style={{
                                      width: 40,
                                      height: 44,
                                      position: "relative",
                                    }}
                                  >
                                    <canvas
                                      width={40}
                                      height={44}
                                      style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="user-avatar-badge">
                                  {" "}
                                  <div className="user-avatar-badge-border">
                                    {" "}
                                    <div
                                      className="hexagon-22-24"
                                      style={{
                                        width: 22,
                                        height: 24,
                                        position: "relative",
                                      }}
                                    >
                                      <canvas
                                        width={22}
                                        height={24}
                                        style={{
                                          position: "absolute",
                                          top: 0,
                                          left: 0,
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div className="user-avatar-badge-content">
                                    {" "}
                                    <div
                                      className="hexagon-dark-16-18"
                                      style={{
                                        width: 16,
                                        height: 18,
                                        position: "relative",
                                      }}
                                    >
                                      <canvas
                                        width={16}
                                        height={18}
                                        style={{
                                          position: "absolute",
                                          top: 0,
                                          left: 0,
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <p className="user-avatar-badge-text">12</p>
                                </div>
                              </a>{" "}
                              <p className="post-comment-text">
                                <a
                                  className="post-comment-text-author"
                                  href="profile-timeline.html"
                                >
                                  Neko Bebop
                                </a>
                                It's always a pleasure to do this streams with
                                you! If we have at least half the fun than last
                                time it will be an incredible success!
                              </p>
                              <Minipostops />
                            </div>
                            <div className="post-comment unread reply-2">
                              {" "}
                              <a
                                className="user-avatar small no-outline"
                                href="profile-timeline.html"
                              >
                                {" "}
                                <div className="user-avatar-content">
                                  {" "}
                                  <div
                                    className="hexagon-image-30-32"
                                    data-src="img/avatar/03.jpg"
                                    style={{
                                      width: 30,
                                      height: 32,
                                      position: "relative",
                                    }}
                                  >
                                    <canvas
                                      width={30}
                                      height={32}
                                      style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="user-avatar-progress">
                                  {" "}
                                  <div
                                    className="hexagon-progress-40-44"
                                    style={{
                                      width: 40,
                                      height: 44,
                                      position: "relative",
                                    }}
                                  >
                                    <canvas
                                      width={40}
                                      height={44}
                                      style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="user-avatar-progress-border">
                                  {" "}
                                  <div
                                    className="hexagon-border-40-44"
                                    style={{
                                      width: 40,
                                      height: 44,
                                      position: "relative",
                                    }}
                                  >
                                    <canvas
                                      width={40}
                                      height={44}
                                      style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="user-avatar-badge">
                                  {" "}
                                  <div className="user-avatar-badge-border">
                                    {" "}
                                    <div
                                      className="hexagon-22-24"
                                      style={{
                                        width: 22,
                                        height: 24,
                                        position: "relative",
                                      }}
                                    >
                                      <canvas
                                        width={22}
                                        height={24}
                                        style={{
                                          position: "absolute",
                                          top: 0,
                                          left: 0,
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div className="user-avatar-badge-content">
                                    {" "}
                                    <div
                                      className="hexagon-dark-16-18"
                                      style={{
                                        width: 16,
                                        height: 18,
                                        position: "relative",
                                      }}
                                    >
                                      <canvas
                                        width={16}
                                        height={18}
                                        style={{
                                          position: "absolute",
                                          top: 0,
                                          left: 0,
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <p className="user-avatar-badge-text">16</p>
                                </div>
                              </a>{" "}
                              <p className="post-comment-text">
                                <a
                                  className="post-comment-text-author"
                                  href="profile-timeline.html"
                                >
                                  Nick Grissom
                                </a>
                                I wouldn't miss it for anything!! Love both
                                streams!
                              </p>
                              <div className="content-actions">
                                {" "}
                                <div className="content-action">
                                  {" "}
                                  <div className="meta-line">
                                    {" "}
                                    <div className="meta-line-list reaction-item-list small">
                                      {" "}
                                      <div
                                        className="reaction-item"
                                        style={{ position: "relative" }}
                                      >
                                        {" "}
                                        <img
                                          className="reaction-image reaction-item-dropdown-trigger"
                                          src="img/reaction/like.png"
                                          alt="reaction-like"
                                        />{" "}
                                        <div
                                          className="simple-dropdown padded reaction-item-dropdown"
                                          style={{
                                            position: "absolute",
                                            zIndex: 9999,
                                            bottom: 38,
                                            left: "-16px",
                                            opacity: 0,
                                            visibility: "hidden",
                                            transform: "translate(0px, 20px)",
                                            transition:
                                              "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s",
                                          }}
                                        >
                                          {" "}
                                          <p className="simple-dropdown-text">
                                            <img
                                              className="reaction"
                                              src="img/reaction/like.png"
                                              alt="reaction-like"
                                            />{" "}
                                            <span className="bold">Like</span>
                                          </p>
                                          <p className="simple-dropdown-text">
                                            Neko Bebop
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <p className="meta-line-text">1</p>
                                  </div>
                                  <div
                                    className="meta-line"
                                    style={{ position: "relative" }}
                                  >
                                    {" "}
                                    <p className="meta-line-link light reaction-options-small-dropdown-trigger">
                                      React!
                                    </p>
                                    <div
                                      className="reaction-options small reaction-options-small-dropdown"
                                      style={{
                                        position: "absolute",
                                        zIndex: 9999,
                                        bottom: 30,
                                        left: "-80px",
                                        opacity: 0,
                                        visibility: "hidden",
                                        transform: "translate(0px, 16px)",
                                        transition:
                                          "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s",
                                      }}
                                    >
                                      {" "}
                                      <div
                                        className="reaction-option text-tooltip-tft"
                                        data-title="Like"
                                        style={{ position: "relative" }}
                                      >
                                        {" "}
                                        <img
                                          className="reaction-option-image"
                                          src="img/reaction/like.png"
                                          alt="reaction-like"
                                        />{" "}
                                        <div
                                          className="xm-tooltip"
                                          style={{
                                            whiteSpace: "nowrap",
                                            position: "absolute",
                                            zIndex: 99999,
                                            top: "-28px",
                                            left: "50%",
                                            marginLeft: "-22px",
                                            opacity: 0,
                                            visibility: "hidden",
                                            transform: "translate(0px, 10px)",
                                            transition:
                                              "all 0.3s ease-in-out 0s",
                                          }}
                                        >
                                          <p className="xm-tooltip-text">
                                            Like
                                          </p>
                                        </div>
                                      </div>
                                      <div
                                        className="reaction-option text-tooltip-tft"
                                        data-title="Love"
                                        style={{ position: "relative" }}
                                      >
                                        {" "}
                                        <img
                                          className="reaction-option-image"
                                          src="img/reaction/love.png"
                                          alt="reaction-love"
                                        />{" "}
                                        <div
                                          className="xm-tooltip"
                                          style={{
                                            whiteSpace: "nowrap",
                                            position: "absolute",
                                            zIndex: 99999,
                                            top: "-28px",
                                            left: "50%",
                                            marginLeft: "-23.5px",
                                            opacity: 0,
                                            visibility: "hidden",
                                            transform: "translate(0px, 10px)",
                                            transition:
                                              "all 0.3s ease-in-out 0s",
                                          }}
                                        >
                                          <p className="xm-tooltip-text">
                                            Love
                                          </p>
                                        </div>
                                      </div>
                                      <div
                                        className="reaction-option text-tooltip-tft"
                                        data-title="Dislike"
                                        style={{ position: "relative" }}
                                      >
                                        {" "}
                                        <img
                                          className="reaction-option-image"
                                          src="img/reaction/dislike.png"
                                          alt="reaction-dislike"
                                        />{" "}
                                        <div
                                          className="xm-tooltip"
                                          style={{
                                            whiteSpace: "nowrap",
                                            position: "absolute",
                                            zIndex: 99999,
                                            top: "-28px",
                                            left: "50%",
                                            marginLeft: "-28.5px",
                                            opacity: 0,
                                            visibility: "hidden",
                                            transform: "translate(0px, 10px)",
                                            transition:
                                              "all 0.3s ease-in-out 0s",
                                          }}
                                        >
                                          <p className="xm-tooltip-text">
                                            Dislike
                                          </p>
                                        </div>
                                      </div>
                                      <div
                                        className="reaction-option text-tooltip-tft"
                                        data-title="Happy"
                                        style={{ position: "relative" }}
                                      >
                                        {" "}
                                        <img
                                          className="reaction-option-image"
                                          src="img/reaction/happy.png"
                                          alt="reaction-happy"
                                        />{" "}
                                        <div
                                          className="xm-tooltip"
                                          style={{
                                            whiteSpace: "nowrap",
                                            position: "absolute",
                                            zIndex: 99999,
                                            top: "-28px",
                                            left: "50%",
                                            marginLeft: "-27.5px",
                                            opacity: 0,
                                            visibility: "hidden",
                                            transform: "translate(0px, 10px)",
                                            transition:
                                              "all 0.3s ease-in-out 0s",
                                          }}
                                        >
                                          <p className="xm-tooltip-text">
                                            Happy
                                          </p>
                                        </div>
                                      </div>
                                      <div
                                        className="reaction-option text-tooltip-tft"
                                        data-title="Funny"
                                        style={{ position: "relative" }}
                                      >
                                        {" "}
                                        <img
                                          className="reaction-option-image"
                                          src="img/reaction/funny.png"
                                          alt="reaction-funny"
                                        />{" "}
                                        <div
                                          className="xm-tooltip"
                                          style={{
                                            whiteSpace: "nowrap",
                                            position: "absolute",
                                            zIndex: 99999,
                                            top: "-28px",
                                            left: "50%",
                                            marginLeft: "-26.5px",
                                            opacity: 0,
                                            visibility: "hidden",
                                            transform: "translate(0px, 10px)",
                                            transition:
                                              "all 0.3s ease-in-out 0s",
                                          }}
                                        >
                                          <p className="xm-tooltip-text">
                                            Funny
                                          </p>
                                        </div>
                                      </div>
                                      <div
                                        className="reaction-option text-tooltip-tft"
                                        data-title="Wow"
                                        style={{ position: "relative" }}
                                      >
                                        {" "}
                                        <img
                                          className="reaction-option-image"
                                          src="img/reaction/wow.png"
                                          alt="reaction-wow"
                                        />{" "}
                                        <div
                                          className="xm-tooltip"
                                          style={{
                                            whiteSpace: "nowrap",
                                            position: "absolute",
                                            zIndex: 99999,
                                            top: "-28px",
                                            left: "50%",
                                            marginLeft: "-24px",
                                            opacity: 0,
                                            visibility: "hidden",
                                            transform: "translate(0px, 10px)",
                                            transition:
                                              "all 0.3s ease-in-out 0s",
                                          }}
                                        >
                                          <p className="xm-tooltip-text">Wow</p>
                                        </div>
                                      </div>
                                      <div
                                        className="reaction-option text-tooltip-tft"
                                        data-title="Angry"
                                        style={{ position: "relative" }}
                                      >
                                        {" "}
                                        <img
                                          className="reaction-option-image"
                                          src="img/reaction/angry.png"
                                          alt="reaction-angry"
                                        />{" "}
                                        <div
                                          className="xm-tooltip"
                                          style={{
                                            whiteSpace: "nowrap",
                                            position: "absolute",
                                            zIndex: 99999,
                                            top: "-28px",
                                            left: "50%",
                                            marginLeft: "-26.5px",
                                            opacity: 0,
                                            visibility: "hidden",
                                            transform: "translate(0px, 10px)",
                                            transition:
                                              "all 0.3s ease-in-out 0s",
                                          }}
                                        >
                                          <p className="xm-tooltip-text">
                                            Angry
                                          </p>
                                        </div>
                                      </div>
                                      <div
                                        className="reaction-option text-tooltip-tft"
                                        data-title="Sad"
                                        style={{ position: "relative" }}
                                      >
                                        {" "}
                                        <img
                                          className="reaction-option-image"
                                          src="img/reaction/sad.png"
                                          alt="reaction-sad"
                                        />{" "}
                                        <div
                                          className="xm-tooltip"
                                          style={{
                                            whiteSpace: "nowrap",
                                            position: "absolute",
                                            zIndex: 99999,
                                            top: "-28px",
                                            left: "50%",
                                            marginLeft: "-21px",
                                            opacity: 0,
                                            visibility: "hidden",
                                            transform: "translate(0px, 10px)",
                                            transition:
                                              "all 0.3s ease-in-out 0s",
                                          }}
                                        >
                                          <p className="xm-tooltip-text">Sad</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="meta-line">
                                    {" "}
                                    <p className="meta-line-link light">
                                      Reply
                                    </p>
                                  </div>
                                  <div className="meta-line">
                                    {" "}
                                    <p className="meta-line-timestamp">
                                      2 min ago
                                    </p>
                                  </div>
                                  <div className="meta-line settings">
                                    {" "}
                                    <div
                                      className="post-settings-wrap"
                                      style={{ position: "relative" }}
                                    >
                                      {" "}
                                      <div className="post-settings post-settings-dropdown-trigger">
                                        {" "}
                                        <svg className="post-settings-icon icon-more-dots">
                                          {" "}
                                          <use xlinkHref="#svg-more-dots" />{" "}
                                        </svg>{" "}
                                      </div>
                                      <div
                                        className="simple-dropdown post-settings-dropdown"
                                        style={{
                                          position: "absolute",
                                          zIndex: 9999,
                                          bottom: 30,
                                          right: 0,
                                          opacity: 0,
                                          visibility: "hidden",
                                          transform: "translate(0px, 16px)",
                                          transition:
                                            "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s",
                                        }}
                                      >
                                        {" "}
                                        <p className="simple-dropdown-link">
                                          Report Post
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="post-comment">
                              {" "}
                              <a
                                className="user-avatar small no-outline"
                                href="profile-timeline.html"
                              >
                                {" "}
                                <div className="user-avatar-content">
                                  {" "}
                                  <div
                                    className="hexagon-image-30-32"
                                    data-src="img/avatar/02.jpg"
                                    style={{
                                      width: 30,
                                      height: 32,
                                      position: "relative",
                                    }}
                                  >
                                    <canvas
                                      width={30}
                                      height={32}
                                      style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="user-avatar-progress">
                                  {" "}
                                  <div
                                    className="hexagon-progress-40-44"
                                    style={{
                                      width: 40,
                                      height: 44,
                                      position: "relative",
                                    }}
                                  >
                                    <canvas
                                      width={40}
                                      height={44}
                                      style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="user-avatar-progress-border">
                                  {" "}
                                  <div
                                    className="hexagon-border-40-44"
                                    style={{
                                      width: 40,
                                      height: 44,
                                      position: "relative",
                                    }}
                                  >
                                    <canvas
                                      width={40}
                                      height={44}
                                      style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="user-avatar-badge">
                                  {" "}
                                  <div className="user-avatar-badge-border">
                                    {" "}
                                    <div
                                      className="hexagon-22-24"
                                      style={{
                                        width: 22,
                                        height: 24,
                                        position: "relative",
                                      }}
                                    >
                                      <canvas
                                        width={22}
                                        height={24}
                                        style={{
                                          position: "absolute",
                                          top: 0,
                                          left: 0,
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div className="user-avatar-badge-content">
                                    {" "}
                                    <div
                                      className="hexagon-dark-16-18"
                                      style={{
                                        width: 16,
                                        height: 18,
                                        position: "relative",
                                      }}
                                    >
                                      <canvas
                                        width={16}
                                        height={18}
                                        style={{
                                          position: "absolute",
                                          top: 0,
                                          left: 0,
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <p className="user-avatar-badge-text">19</p>
                                </div>
                              </a>{" "}
                              <p className="post-comment-text">
                                <a
                                  className="post-comment-text-author"
                                  href="profile-timeline.html"
                                >
                                  Destroy Dex
                                </a>
                                YEAHHH!!{" "}
                                <a href="profile-timeline.html">
                                  @MarinaValentine
                                </a>{" "}
                                I really enjoyed your last stream and it also
                                was really funny! Can't wait!
                              </p>
                              <div className="content-actions">
                                {" "}
                                <div className="content-action">
                                  {" "}
                                  <div
                                    className="meta-line"
                                    style={{ position: "relative" }}
                                  >
                                    {" "}
                                    <p className="meta-line-link light reaction-options-small-dropdown-trigger">
                                      React!
                                    </p>
                                    <div
                                      className="reaction-options small reaction-options-small-dropdown"
                                      style={{
                                        position: "absolute",
                                        zIndex: 9999,
                                        bottom: 30,
                                        left: "-80px",
                                        opacity: 0,
                                        visibility: "hidden",
                                        transform: "translate(0px, 16px)",
                                        transition:
                                          "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s",
                                      }}
                                    >
                                      {" "}
                                      <div
                                        className="reaction-option text-tooltip-tft"
                                        data-title="Like"
                                        style={{ position: "relative" }}
                                      >
                                        {" "}
                                        <img
                                          className="reaction-option-image"
                                          src="img/reaction/like.png"
                                          alt="reaction-like"
                                        />{" "}
                                        <div
                                          className="xm-tooltip"
                                          style={{
                                            whiteSpace: "nowrap",
                                            position: "absolute",
                                            zIndex: 99999,
                                            top: "-28px",
                                            left: "50%",
                                            marginLeft: "-22px",
                                            opacity: 0,
                                            visibility: "hidden",
                                            transform: "translate(0px, 10px)",
                                            transition:
                                              "all 0.3s ease-in-out 0s",
                                          }}
                                        >
                                          <p className="xm-tooltip-text">
                                            Like
                                          </p>
                                        </div>
                                      </div>
                                      <div
                                        className="reaction-option text-tooltip-tft"
                                        data-title="Love"
                                        style={{ position: "relative" }}
                                      >
                                        {" "}
                                        <img
                                          className="reaction-option-image"
                                          src="img/reaction/love.png"
                                          alt="reaction-love"
                                        />{" "}
                                        <div
                                          className="xm-tooltip"
                                          style={{
                                            whiteSpace: "nowrap",
                                            position: "absolute",
                                            zIndex: 99999,
                                            top: "-28px",
                                            left: "50%",
                                            marginLeft: "-23.5px",
                                            opacity: 0,
                                            visibility: "hidden",
                                            transform: "translate(0px, 10px)",
                                            transition:
                                              "all 0.3s ease-in-out 0s",
                                          }}
                                        >
                                          <p className="xm-tooltip-text">
                                            Love
                                          </p>
                                        </div>
                                      </div>
                                      <div
                                        className="reaction-option text-tooltip-tft"
                                        data-title="Dislike"
                                        style={{ position: "relative" }}
                                      >
                                        {" "}
                                        <img
                                          className="reaction-option-image"
                                          src="img/reaction/dislike.png"
                                          alt="reaction-dislike"
                                        />{" "}
                                        <div
                                          className="xm-tooltip"
                                          style={{
                                            whiteSpace: "nowrap",
                                            position: "absolute",
                                            zIndex: 99999,
                                            top: "-28px",
                                            left: "50%",
                                            marginLeft: "-28.5px",
                                            opacity: 0,
                                            visibility: "hidden",
                                            transform: "translate(0px, 10px)",
                                            transition:
                                              "all 0.3s ease-in-out 0s",
                                          }}
                                        >
                                          <p className="xm-tooltip-text">
                                            Dislike
                                          </p>
                                        </div>
                                      </div>
                                      <div
                                        className="reaction-option text-tooltip-tft"
                                        data-title="Happy"
                                        style={{ position: "relative" }}
                                      >
                                        {" "}
                                        <img
                                          className="reaction-option-image"
                                          src="img/reaction/happy.png"
                                          alt="reaction-happy"
                                        />{" "}
                                        <div
                                          className="xm-tooltip"
                                          style={{
                                            whiteSpace: "nowrap",
                                            position: "absolute",
                                            zIndex: 99999,
                                            top: "-28px",
                                            left: "50%",
                                            marginLeft: "-27.5px",
                                            opacity: 0,
                                            visibility: "hidden",
                                            transform: "translate(0px, 10px)",
                                            transition:
                                              "all 0.3s ease-in-out 0s",
                                          }}
                                        >
                                          <p className="xm-tooltip-text">
                                            Happy
                                          </p>
                                        </div>
                                      </div>
                                      <div
                                        className="reaction-option text-tooltip-tft"
                                        data-title="Funny"
                                        style={{ position: "relative" }}
                                      >
                                        {" "}
                                        <img
                                          className="reaction-option-image"
                                          src="img/reaction/funny.png"
                                          alt="reaction-funny"
                                        />{" "}
                                        <div
                                          className="xm-tooltip"
                                          style={{
                                            whiteSpace: "nowrap",
                                            position: "absolute",
                                            zIndex: 99999,
                                            top: "-28px",
                                            left: "50%",
                                            marginLeft: "-26.5px",
                                            opacity: 0,
                                            visibility: "hidden",
                                            transform: "translate(0px, 10px)",
                                            transition:
                                              "all 0.3s ease-in-out 0s",
                                          }}
                                        >
                                          <p className="xm-tooltip-text">
                                            Funny
                                          </p>
                                        </div>
                                      </div>
                                      <div
                                        className="reaction-option text-tooltip-tft"
                                        data-title="Wow"
                                        style={{ position: "relative" }}
                                      >
                                        {" "}
                                        <img
                                          className="reaction-option-image"
                                          src="img/reaction/wow.png"
                                          alt="reaction-wow"
                                        />{" "}
                                        <div
                                          className="xm-tooltip"
                                          style={{
                                            whiteSpace: "nowrap",
                                            position: "absolute",
                                            zIndex: 99999,
                                            top: "-28px",
                                            left: "50%",
                                            marginLeft: "-24px",
                                            opacity: 0,
                                            visibility: "hidden",
                                            transform: "translate(0px, 10px)",
                                            transition:
                                              "all 0.3s ease-in-out 0s",
                                          }}
                                        >
                                          <p className="xm-tooltip-text">Wow</p>
                                        </div>
                                      </div>
                                      <div
                                        className="reaction-option text-tooltip-tft"
                                        data-title="Angry"
                                        style={{ position: "relative" }}
                                      >
                                        {" "}
                                        <img
                                          className="reaction-option-image"
                                          src="img/reaction/angry.png"
                                          alt="reaction-angry"
                                        />{" "}
                                        <div
                                          className="xm-tooltip"
                                          style={{
                                            whiteSpace: "nowrap",
                                            position: "absolute",
                                            zIndex: 99999,
                                            top: "-28px",
                                            left: "50%",
                                            marginLeft: "-26.5px",
                                            opacity: 0,
                                            visibility: "hidden",
                                            transform: "translate(0px, 10px)",
                                            transition:
                                              "all 0.3s ease-in-out 0s",
                                          }}
                                        >
                                          <p className="xm-tooltip-text">
                                            Angry
                                          </p>
                                        </div>
                                      </div>
                                      <div
                                        className="reaction-option text-tooltip-tft"
                                        data-title="Sad"
                                        style={{ position: "relative" }}
                                      >
                                        {" "}
                                        <img
                                          className="reaction-option-image"
                                          src="img/reaction/sad.png"
                                          alt="reaction-sad"
                                        />{" "}
                                        <div
                                          className="xm-tooltip"
                                          style={{
                                            whiteSpace: "nowrap",
                                            position: "absolute",
                                            zIndex: 99999,
                                            top: "-28px",
                                            left: "50%",
                                            marginLeft: "-21px",
                                            opacity: 0,
                                            visibility: "hidden",
                                            transform: "translate(0px, 10px)",
                                            transition:
                                              "all 0.3s ease-in-out 0s",
                                          }}
                                        >
                                          <p className="xm-tooltip-text">Sad</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="meta-line">
                                    {" "}
                                    <p className="meta-line-link light">
                                      Reply
                                    </p>
                                  </div>
                                  <div className="meta-line">
                                    {" "}
                                    <p className="meta-line-timestamp">
                                      27 min ago
                                    </p>
                                  </div>
                                  <div className="meta-line settings">
                                    {" "}
                                    <div
                                      className="post-settings-wrap"
                                      style={{ position: "relative" }}
                                    >
                                      {" "}
                                      <div className="post-settings post-settings-dropdown-trigger">
                                        {" "}
                                        <svg className="post-settings-icon icon-more-dots">
                                          {" "}
                                          <use xlinkHref="#svg-more-dots" />{" "}
                                        </svg>{" "}
                                      </div>
                                      <div
                                        className="simple-dropdown post-settings-dropdown"
                                        style={{
                                          position: "absolute",
                                          zIndex: 9999,
                                          bottom: 30,
                                          right: 0,
                                          opacity: 0,
                                          visibility: "hidden",
                                          transform: "translate(0px, 16px)",
                                          transition:
                                            "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s",
                                        }}
                                      >
                                        {" "}
                                        <p className="simple-dropdown-link">
                                          Report Post
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="post-comment-heading">
                              Load More Comments
                              <span className="highlighted">9+</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Scrollbars>
            </div>

            <div id="cmmnt" className="post-comment-form bordered-top">
              <div className="user-avatar small no-outline">
                <div className="user-avatar-content">
                  <div
                    className="hexagon-image-30-32"
                    data-src="img/avatar/01.jpg"
                    style={{ width: 30, height: 32, position: "relative" }}
                  >
                    <canvas
                      width={30}
                      height={32}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
                <div className="user-avatar-progress">
                  {" "}
                  <div
                    className="hexagon-progress-40-44"
                    style={{ width: 40, height: 44, position: "relative" }}
                  >
                    <canvas
                      width={40}
                      height={44}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
                <div className="user-avatar-progress-border">
                  {" "}
                  <div
                    className="hexagon-border-40-44"
                    style={{ width: 40, height: 44, position: "relative" }}
                  >
                    <canvas
                      width={40}
                      height={44}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
                <div className="user-avatar-badge">
                  {" "}
                  <div className="user-avatar-badge-border">
                    {" "}
                    <div
                      className="hexagon-22-24"
                      style={{ width: 22, height: 24, position: "relative" }}
                    >
                      <canvas
                        width={22}
                        height={24}
                        style={{ position: "absolute", top: 0, left: 0 }}
                      />
                    </div>
                  </div>
                  <div className="user-avatar-badge-content">
                    {" "}
                    <div
                      className="hexagon-dark-16-18"
                      style={{ width: 16, height: 18, position: "relative" }}
                    >
                      <canvas
                        width={16}
                        height={18}
                        style={{ position: "absolute", top: 0, left: 0 }}
                      />
                    </div>
                  </div>
                  <p className="user-avatar-badge-text">24</p>
                </div>
              </div>
              <form className="form">
                {" "}
                <div className="form-row">
                  {" "}
                  <div className="form-item">
                    {" "}
                    <div className="form-input small">
                      <label htmlFor="popup-post-reply">Your Reply</label>{" "}
                      <input
                        onFocus={(e) => {
                          activeInp(e);
                        }}
                        onBlur={(e) => {
                          passiveInp(e);
                        }}
                        type="text"
                        id="popup-post-reply"
                        name="popup_post_reply"
                      />{" "}
                    </div>
                  </div>
                </div>
              </form>{" "}
            </div>
          </div>
          <div id="imgwarp" className="popup-picture-image-wrap">
            <figure className="popup-picture-image">
              <img src={coverimg} alt="cover-04" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
