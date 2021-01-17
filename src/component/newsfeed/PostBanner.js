import React, { useState } from "react";
import { ReactComponent as Poll } from "../../icons/Poll.svg";
import { ReactComponent as Blogpost } from "../../icons/Blgpost.svg";
import { ReactComponent as Filevideoregular } from "../../icons/file-video-regular.svg";
import { ReactComponent as Codesolid } from "../../icons/code-solid.svg";
import { ReactComponent as PostSts } from "../../icons/PostSts.svg";
import { ReactComponent as Cameraicn } from "../../icons/Cameraicn.svg";
export default function PostBanner() {
  const [tab1, settab1] = useState("option-item active");
  const [tab2, settab2] = useState("option-item");
  const [tab3, settab3] = useState("option-item");
  const [activeTab, setactiveTab] = useState(1);
  const inputFocus = (e) => {
    e.target.parentNode.setAttribute(
      "class",
      "form-input small bnnrinp active"
    );
  };
  const inputBlur = (e) => {
    if (e.target.value.length === 0) {
      e.target.parentNode.setAttribute("class", "form-input small bnnrinp");
    }
  };
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
          <div className="form-row">
            <div className="form-item">
              <div className="form-textarea">
                <textarea
                  id="quick-post-text"
                  name="quick-post-text"
                  placeholder="Hi Marina! Share your post here..."
                />
                <div className="form-input small bnnrinp">
                  <label htmlFor="account-full-name">salam</label>
                  <input
                    onFocus={(e) => {
                      inputFocus(e);
                    }}
                    onBlur={(e) => {
                      inputBlur(e);
                    }}
                    autoComplete="off"
                    type="text"
                    id="account-full-name"
                    name="account_full_name"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      );
    } else {
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
                <div className="form-input small bnnrinp">
                  <label htmlFor="account-full-name">
                    Anket sualı əlavə et
                  </label>
                  <input
                    type="text"
                    onFocus={(e) => {
                      inputFocus(e);
                    }}
                    onBlur={(e) => {
                      inputBlur(e);
                    }}
                  />
                </div>
                <div className="form-input small bnnrinp">
                  <label htmlFor="account-full-name">Cavab</label>
                  <input
                    type="text"
                    onFocus={(e) => {
                      inputFocus(e);
                    }}
                    onBlur={(e) => {
                      inputBlur(e);
                    }}
                  />
                </div>
                <div className="form-input small bnnrinp">
                  <label htmlFor="account-full-name">Cavab</label>
                  <input
                    type="text"
                    onFocus={(e) => {
                      inputFocus(e);
                    }}
                    onBlur={(e) => {
                      inputBlur(e);
                    }}
                  />
                </div>
                <div className="postBtns">
                  <p className="button primary postBtn">Cavab əlavə et</p>
                  <p className="button primary postBtn">Şəkil anketi</p>
                  <p className="button primary postBtn">Parametrlər</p>
                </div>
              </div>
            </div>
          </div>
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
            <p className="option-item-title d">Video Post</p>
          </div>
          <div
            onClick={() => {
              handleTab(3);
              setactiveTab(3);
            }}
            className={tab3}
          >
            <Poll className="option-item-icon icon-poll" />
            <p className="option-item-title d">Anket</p>
          </div>
        </div>
      </div>
      <div className="quick-post-body">{ActiveTab()}</div>

      <div className="quick-post-footer">
        <div className="quick-post-footer-actions">
          {activeTab === 1 ? (
            <div
              className="quick-post-footer-action text-tooltip-tft-medium"
              data-title="Insert Photo"
            >
              <Cameraicn className="quick-post-footer-action-icon icon-camera" />
            </div>
          ) : activeTab === 2 ? (
            <div className="psticncontainer">
              <div
                className="quick-post-footer-action text-tooltip-tft-medium"
                data-title="Insert GIF"
              >
                <Filevideoregular
                  className="quick-post-footer-action-icon icon-camera"
                  // id="psticn"
                />
              </div>
              <div
                className="quick-post-footer-action text-tooltip-tft-medium"
                data-title="Insert GIF"
              >
                <Codesolid
                  className="quick-post-footer-action-icon icon-camera"
                  // id="psticn"
                />
              </div>
            </div>
          ) : (
            <div
              className="quick-post-footer-action text-tooltip-tft-medium"
              data-title="Insert Tag"
            >
              anket
            </div>
          )}
        </div>
        <div className="quick-post-footer-actions">
          <p className="button small secondary">Post</p>
        </div>
      </div>
    </div>
  );
}
