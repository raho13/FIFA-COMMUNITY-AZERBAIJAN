import React, { useState } from "react";
import like from "../../img/reaction/like.png";
import love from "../../img/reaction/love.png";
import dislike from "../../img/reaction/dislike.png";
import happy from "../../img/reaction/happy.png";
import funny from "../../img/reaction/funny.png";
import wow from "../../img/reaction/wow.png";
import angry from "../../img/reaction/angry.png";
import sad from "../../img/reaction/sad.png";
export default function Minipostops() {
  const [reactclass, setreactclass] = useState(false);
  const reacthandler = () => {
    if (reactclass) {
      return "minireacticnsact";
    } else {
      return "minireacticnspsv";
    }
  };
  return (
    <div className="content-actions">
      <div className="content-action">
        <div className="meta-line">
          <div className="meta-line-list reaction-item-list small">
            <div className="reaction-item" style={{ position: "relative" }}>
              <img
                className="reaction-image reaction-item-dropdown-trigger"
                src="img/reaction/happy.png"
                alt="reaction-happy"
              />
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
                <p className="simple-dropdown-text">Marcus Jhonson</p>
              </div>
            </div>
            <div className="reaction-item" style={{ position: "relative" }}>
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
                <p className="simple-dropdown-text">Neko Bebop</p>
                <p className="simple-dropdown-text">Nick Grissom</p>
                <p className="simple-dropdown-text">Sarah Diamond</p>
              </div>
            </div>
          </div>
          <p className="meta-line-text">4</p>
        </div>
        <div className="meta-line" style={{ position: "relative" }}>
          <p
            onClick={() => {
              setreactclass(!reactclass);
            }}
            className="meta-line-link light reaction-options-small-dropdown-trigger"
          >
            React!
          </p>
          <div
            className="reaction-options small reaction-options-small-dropdown"
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
        <div className="meta-line">
          {" "}
          <p className="meta-line-link light">Reply</p>
        </div>
        <div className="meta-line">
         
          <p className="meta-line-timestamp">15 min ago</p>
        </div>
        <div className="meta-line settings">
         
          {/* <div className="post-settings-wrap" style={{ position: "relative" }}>
           
            <div className="post-settings post-settings-dropdown-trigger">
              
              <svg className="post-settings-icon icon-more-dots">
               
                <use xlinkHref="#svg-more-dots" />{" "}
              </svg>
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
              <p className="simple-dropdown-link">Report Post</p>
            </div>
          </div>
        */}
        </div>
      </div>
    </div>
  );
}
