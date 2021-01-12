import React, { useState } from "react";

export default function PostBanner() {
  const [tabindex, settabindex] = useState(2);
  const handleTabs = (i) => {
    if (i === 1) {
      if (tabindex === 1) {
        return "option-item active";
      } else {
        return "option-item";
      }
    }
    if (i === 2) {
      if (tabindex === 2) {
        return "option-item active";
      } else {
        return "option-item";
      }
    }
    if (i === 3) {
      if (tabindex === 3) {
        return "option-item active";
      } else {
        return "option-item";
      }
    }
  };
  return (
    <div className="quick-post">
      <div className="quick-post-header">
        <div className="option-items">
          <div
            className={handleTabs(1)}
            onClick={() => {
              settabindex(1);
            }}
          >
            <svg className="option-item-icon icon-status" />

            <p className="option-item-title">Status</p>
          </div>
          <div
            className={handleTabs(2)}
            onClick={() => {
              settabindex(2);
            }}
          >
            <svg className="option-item-icon icon-blog-posts" />
            <p className="option-item-title">Blog Post</p>
          </div>
          <div
            className={handleTabs(3)}
            onClick={() => {
              settabindex(3);
            }}
          >
            <svg className="option-item-icon icon-poll" />

            <p className="option-item-title">Poll</p>
          </div>
        </div>
      </div>
      <div class="quick-post-body">
            <form class="form">
              <div class="form-row">
                <div class="form-item">
                  <div class="form-textarea"> <textarea id="quick-post-text" name="quick-post-text"
                      placeholder="Hi Marina! Share your post here..."></textarea>
                    <p class="form-textarea-limit-text">998/1000</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
      <div className="quick-post-footer">
        <div className="quick-post-footer-actions">
          <div
            className="quick-post-footer-action text-tooltip-tft-medium"
            data-title="Insert Photo"
          >
            <svg className="quick-post-footer-action-icon icon-camera">
              <use xlinkHref="#svg-camera" />
            </svg>
          </div>
          <div
            className="quick-post-footer-action text-tooltip-tft-medium"
            data-title="Insert GIF"
          >
            <svg className="quick-post-footer-action-icon icon-gif">
              <use xlinkHref="#svg-gif" />
            </svg>
          </div>
          <div
            className="quick-post-footer-action text-tooltip-tft-medium"
            data-title="Insert Tag"
          >
            <svg className="quick-post-footer-action-icon icon-tags">
              <use xlinkHref="#svg-tags" />
            </svg>
          </div>
        </div>
        <div className="quick-post-footer-actions">
          <p className="button small void">Discard</p>
          <p className="button small secondary">Post</p>
        </div>
      </div>
    </div>
  );
}
