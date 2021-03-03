import React from "react";
import coverimg from "../../img/cover/04.jpg";
import { ReactComponent as X } from "../../icons/X.svg";
import Postoption from "../../component/Postmodels/Postoption";
export default function Imagepopup() {
  return (
    <div id="popupmain">
      <div id="popupcnt">
        <div className="popup-picture" id="popup-picture">
          <div
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
              <div className="simplebar-wrapper" style={{ margin: 0 }}>
                <div className="simplebar-height-auto-observer-wrapper">
                  <div className="simplebar-height-auto-observer" />
                </div>
                <div className="simplebar-mask">
                  <div
                    className="simplebar-offset"
                    style={{ right: 0, bottom: 0 }}
                  >
                    <div
                      className="simplebar-content-wrapper"
                      style={{ height: "auto", overflow: "hidden" }}
                    >
                      <div className="simplebar-content" style={{ padding: 0 }}>
                        {/* dots */}

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
                                    <p className="user-avatar-badge-text">24</p>
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
                              Here's a sneak peek of the official box cover art
                              for <a href="#">Machine Wasteland II</a>! Remember
                              that I'll be having a stream showing a preview
                              tommorrow at 9PM PCT!
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
                                {" "}
                                <div className="meta-line">
                                  {" "}
                                  <p className="meta-line-link">13 Comments</p>
                                </div>
                                <div className="meta-line">
                                  {" "}
                                  <p className="meta-line-text">0 Shares</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Postoption/>
                        <div className="post-comment-list">
                          {" "}
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
                                        src="img/reaction/happy.png"
                                        alt="reaction-happy"
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
                                            src="img/reaction/happy.png"
                                            alt="reaction-happy"
                                          />{" "}
                                          <span className="bold">Happy</span>
                                        </p>
                                        <p className="simple-dropdown-text">
                                          Marcus Jhonson
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
                                        <p className="simple-dropdown-text">
                                          Nick Grissom
                                        </p>
                                        <p className="simple-dropdown-text">
                                          Sarah Diamond
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <p className="meta-line-text">4</p>
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
                                          transition: "all 0.3s ease-in-out 0s",
                                        }}
                                      >
                                        <p className="xm-tooltip-text">Like</p>
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
                                          transition: "all 0.3s ease-in-out 0s",
                                        }}
                                      >
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
                                          transition: "all 0.3s ease-in-out 0s",
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
                                          transition: "all 0.3s ease-in-out 0s",
                                        }}
                                      >
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
                                          transition: "all 0.3s ease-in-out 0s",
                                        }}
                                      >
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
                                          transition: "all 0.3s ease-in-out 0s",
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
                                          transition: "all 0.3s ease-in-out 0s",
                                        }}
                                      >
                                        <p className="xm-tooltip-text">Angry</p>
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
                                          transition: "all 0.3s ease-in-out 0s",
                                        }}
                                      >
                                        <p className="xm-tooltip-text">Sad</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="meta-line">
                                  {" "}
                                  <p className="meta-line-link light">Reply</p>
                                </div>
                                <div className="meta-line">
                                  {" "}
                                  <p className="meta-line-timestamp">
                                    15 min ago
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
                                          transition: "all 0.3s ease-in-out 0s",
                                        }}
                                      >
                                        <p className="xm-tooltip-text">Like</p>
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
                                          transition: "all 0.3s ease-in-out 0s",
                                        }}
                                      >
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
                                          transition: "all 0.3s ease-in-out 0s",
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
                                          transition: "all 0.3s ease-in-out 0s",
                                        }}
                                      >
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
                                          transition: "all 0.3s ease-in-out 0s",
                                        }}
                                      >
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
                                          transition: "all 0.3s ease-in-out 0s",
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
                                          transition: "all 0.3s ease-in-out 0s",
                                        }}
                                      >
                                        <p className="xm-tooltip-text">Angry</p>
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
                                          transition: "all 0.3s ease-in-out 0s",
                                        }}
                                      >
                                        <p className="xm-tooltip-text">Sad</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="meta-line">
                                  {" "}
                                  <p className="meta-line-link light">Reply</p>
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
                              I really enjoyed your last stream and it also was
                              really funny! Can't wait!
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
                                          transition: "all 0.3s ease-in-out 0s",
                                        }}
                                      >
                                        <p className="xm-tooltip-text">Like</p>
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
                                          transition: "all 0.3s ease-in-out 0s",
                                        }}
                                      >
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
                                          transition: "all 0.3s ease-in-out 0s",
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
                                          transition: "all 0.3s ease-in-out 0s",
                                        }}
                                      >
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
                                          transition: "all 0.3s ease-in-out 0s",
                                        }}
                                      >
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
                                          transition: "all 0.3s ease-in-out 0s",
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
                                          transition: "all 0.3s ease-in-out 0s",
                                        }}
                                      >
                                        <p className="xm-tooltip-text">Angry</p>
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
                                          transition: "all 0.3s ease-in-out 0s",
                                        }}
                                      >
                                        <p className="xm-tooltip-text">Sad</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="meta-line">
                                  {" "}
                                  <p className="meta-line-link light">Reply</p>
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
                                  data-src="img/avatar/07.jpg"
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
                                <p className="user-avatar-badge-text">26</p>
                              </div>
                            </a>{" "}
                            <p className="post-comment-text">
                              <a
                                className="post-comment-text-author"
                                href="profile-timeline.html"
                              >
                                Sarah Diamond
                              </a>
                              That sounds awesome Marina! And also thanks a lot
                              for the art sneak peek! I went to the GameCon last
                              week and had a great time playing the game's open
                              demo.
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
                                          transition: "all 0.3s ease-in-out 0s",
                                        }}
                                      >
                                        <p className="xm-tooltip-text">Like</p>
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
                                          transition: "all 0.3s ease-in-out 0s",
                                        }}
                                      >
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
                                          transition: "all 0.3s ease-in-out 0s",
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
                                          transition: "all 0.3s ease-in-out 0s",
                                        }}
                                      >
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
                                          transition: "all 0.3s ease-in-out 0s",
                                        }}
                                      >
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
                                          transition: "all 0.3s ease-in-out 0s",
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
                                          transition: "all 0.3s ease-in-out 0s",
                                        }}
                                      >
                                        <p className="xm-tooltip-text">Angry</p>
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
                                          transition: "all 0.3s ease-in-out 0s",
                                        }}
                                      >
                                        <p className="xm-tooltip-text">Sad</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="meta-line">
                                  {" "}
                                  <p className="meta-line-link light">Reply</p>
                                </div>
                                <div className="meta-line">
                                  {" "}
                                  <p className="meta-line-timestamp">
                                    39 min ago
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
                            Load More Comments{" "}
                            <span className="highlighted">9+</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="simplebar-placeholder"
                  style={{ width: 0, height: 0 }}
                />
              </div>
              <div
                className="simplebar-track simplebar-horizontal"
                style={{ visibility: "hidden" }}
              >
                <div
                  className="simplebar-scrollbar"
                  style={{ width: 0, display: "none" }}
                />
              </div>
              <div
                className="simplebar-track simplebar-vertical"
                style={{ visibility: "hidden" }}
              >
                <div
                  className="simplebar-scrollbar"
                  style={{
                    height: 0,
                    transform: "translate3d(0px, 0px, 0px)",
                    display: "none",
                  }}
                />
              </div>
            </div>
            <div className="post-comment-form bordered-top">
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
                      {" "}
                      <label htmlFor="popup-post-reply">Your Reply</label>{" "}
                      <input
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
