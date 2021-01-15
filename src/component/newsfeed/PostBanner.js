import React, { useEffect, useState } from "react";
export default function PostBanner() {

  return (
    <div className="quick-post">
      <div className="quick-post-header">
        <div className="option-items">
          <div className="option-item">
            <p className="option-item-title">Status</p>
          </div>
          <div className="option-item">
            {" "}
            <svg className="option-item-icon icon-blog-posts">
              <use xlinkHref="#svg-blog-posts" />
            </svg>
            <p className="option-item-title">Blog Post</p>
          </div>
          <div className="option-item active">
            {" "}
            <svg className="option-item-icon icon-poll">
              <use xlinkHref="#svg-poll" />
            </svg>
            <p className="option-item-title">Poll</p>
          </div>
        </div>
      </div>
      <div className="quick-post-body">
        <form className="form">
          <div className="form-row">
            <div className="form-item">
              <div className="form-textarea">
                <textarea
                  id="quick-post-text"
                  name="quick-post-text"
                  placeholder="Hi Marina! Share your post here..."
                  defaultValue={""}
                />
                <p className="form-textarea-limit-text">998/1000</p>
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
