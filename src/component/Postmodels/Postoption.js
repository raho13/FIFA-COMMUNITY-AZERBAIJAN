import React, { useState } from "react";
import like from "../../img/reaction/like.png";
import love from "../../img/reaction/love.png";
import dislike from "../../img/reaction/dislike.png";
import happy from "../../img/reaction/happy.png";
import funny from "../../img/reaction/funny.png";
import wow from "../../img/reaction/wow.png";
import angry from "../../img/reaction/angry.png";
import sad from "../../img/reaction/sad.png";
import { ReactComponent as Reaction } from "../../icons/React.svg";
import { ReactComponent as Comment } from "../../icons/comment.svg";
import { ReactComponent as Share } from "../../icons/Share.svg";

export default function Postoption({ commentVis, handlecmmnt }) {
  const [reactions, setreactions] = useState(false);
  const handlereaction = (i) => {
    // handlecmmnt;
    if (i === 1) {
      if (reactions === false) {
        return "reaction-options reaction-options-dropdown passivePostop";
      } else {
        return "reaction-options reaction-options-dropdown activePostop";
      }
    } else {
      if (reactions === false) {
        return "post-option reaction-options-dropdown-trigger";
      } else {
        return "post-option reaction-options-dropdown-trigger active";
      }
    }
  };
  return (
    <div className="post-options">
      <div className="post-option-wrap">
        <div
          onClick={() => {
            setreactions(!reactions);
          }}
          className={handlereaction(2)}
        >
          <Reaction className="post-option-icon icon-thumbs-up" />
          <p className="post-option-text">React!</p>
        </div>
        <div className={handlereaction(1)}>
          <div className="reaction-option text-tooltip-tft" data-title="Like">
            <img
              className="reaction-option-image"
              src={like}
              alt="reaction-like"
            />
          </div>
          <div className="reaction-option text-tooltip-tft" data-title="Love">
            <img
              className="reaction-option-image"
              src={love}
              alt="reaction-love"
            />
          </div>
          <div
            className="reaction-option text-tooltip-tft"
            data-title="Dislike"
          >
            <img
              className="reaction-option-image"
              src={dislike}
              alt="reaction-dislike"
            />
          </div>
          <div className="reaction-option text-tooltip-tft" data-title="Happy">
            <img
              className="reaction-option-image"
              src={happy}
              alt="reaction-happy"
            />
          </div>
          <div className="reaction-option text-tooltip-tft" data-title="Funny">
            <img
              className="reaction-option-image"
              src={funny}
              alt="reaction-funny"
            />
          </div>
          <div className="reaction-option text-tooltip-tft" data-title="Wow">
            <img
              className="reaction-option-image"
              src={wow}
              alt="reaction-wow"
            />
          </div>
          <div className="reaction-option text-tooltip-tft" data-title="Angry">
            <img
              className="reaction-option-image"
              src={angry}
              alt="reaction-angry"
            />
          </div>
          <div className="reaction-option text-tooltip-tft" data-title="Sad">
            <img
              className="reaction-option-image"
              src={sad}
              alt="reaction-sad"
            />
          </div>
        </div>
      </div>
      <div className="post-option" onClick={handlecmmnt}>
        <Comment className="post-option-icon icon-comment" />
        <p className="post-option-text">{commentVis}</p>
      </div>
      <div className="post-option">
        <Share className="post-option-icon icon-share" />
        <p className="post-option-text">Share</p>
      </div>
    </div>
  );
}
