import React, { useState } from "react";
import { ReactComponent as Poll } from "../../icons/Poll.svg";
import { ReactComponent as Blogpost } from "../../icons/Blgpost.svg";
import { ReactComponent as PostSts } from "../../icons/PostSts.svg";
export default function PostBanner() {
  const [tab1, settab1] = useState("option-item active");
  const [tab2, settab2] = useState("option-item");
  const [tab3, settab3] = useState("option-item");
  const [activeTab, setactiveTab] = useState(1);
  const ActiveTab = () => {
    if (activeTab === 1) {
      return (
        <form className="form">
          <div className="form-row">
            <div className="form-item">
              <div className="form-textarea">
                <textarea
                  id="quick-post-text"
                  name="quick-post-text"
                  placeholder="Hi Marina! Share your post here..."
                />
                <p className="form-textarea-limit-text">998/1000</p>
              </div>
            </div>
          </div>
        </form>
      );
    } else if (activeTab === 2) {
      return (
        <form className="form">
          <h1>blog posts</h1>
        </form>
      );
    } else {
      return (
        <form className="form">
          <h1>poll</h1>
        </form>
      );
    }
  };
  const handleTab = (i) => {
    if (i === 1) {
      settab1("option-item active");
      settab2("option-item");
      settab3("option-item");
    } else if (i === 2) {
      settab1("option-item");
      settab2("option-item active");
      settab3("option-item");
    } else {
      settab1("option-item");
      settab2("option-item");
      settab3("option-item active");
    }
  };
  return (
    <div className="quick-post">
      <div className="quick-post-header">
        <div className="option-items">
          <div
            onClick={() => {
              handleTab(1);
              setactiveTab(1);
            }}
            className={tab1}
          >
            <PostSts className="option-item-icon icon-status" />
            <p className="option-item-title d">Status</p>
          </div>
          <div
            onClick={() => {
              handleTab(2);
              setactiveTab(2);
            }}
            className={tab2}
          >
            <Blogpost className="option-item-icon icon-blog-posts" />
            <p className="option-item-title d">Blog Post</p>
          </div>
          <div
            onClick={() => {
              handleTab(3);
              setactiveTab(3);
            }}
            className={tab3}
          >
            <Poll className="option-item-icon icon-poll" />
            <p className="option-item-title d">Poll</p>
          </div>
        </div>
      </div>
      <div className="quick-post-body">{ActiveTab()}</div>

      <div className="quick-post-footer">
        <div className="quick-post-footer-actions">
          <div
            className="quick-post-footer-action text-tooltip-tft-medium"
            data-title="Insert Photo"
          >
            <svg className="quick-post-footer-action-icon icon-camera">
              <use xlinkHref="#svg-camera" />
            </svg>{" "}
          </div>
          <div
            className="quick-post-footer-action text-tooltip-tft-medium"
            data-title="Insert GIF"
          >
            <svg className="quick-post-footer-action-icon icon-gif">
              <use xlinkHref="#svg-gif" />
            </svg>{" "}
          </div>
          <div
            className="quick-post-footer-action text-tooltip-tft-medium"
            data-title="Insert Tag"
          >
            <svg className="quick-post-footer-action-icon icon-tags">
              <use xlinkHref="#svg-tags" />
            </svg>{" "}
          </div>
        </div>
        <div className="quick-post-footer-actions">
          <p className="button small secondary">Post</p>
        </div>
      </div>
    </div>
  );
}
