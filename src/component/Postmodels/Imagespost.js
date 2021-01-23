import React from "react";
import Postoption from "./Postoption";
import Postoptionsdot from "./Postoptionsdot";
import img1 from "../../img/cover/10.jpg" 
import img2 from "../../img/cover/16.jpg" 
export default function Imagespost() {
  return (
    <div className="widget-box no-padding">
        <Postoptionsdot/>
      <div className="widget-box-status">
        <div className="widget-box-status-content">
          <div className="user-status">
            <a className="user-status-avatar" href="profile-timeline.html">
              <div className="user-avatar small no-outline">
                <div className="user-avatar-content">
                  <div
                    className="hexagon-image-30-32"
                    data-src="img/avatar/02.jpg"
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
                  <p className="user-avatar-badge-text">19</p>
                </div>
              </div>
            </a>
            <p className="user-status-title medium">
              <a className="bold" href="profile-timeline.html">
                Destroy Dex
              </a>
              uploaded <span className="bold">26 new photos</span>
            </p>
            <p className="user-status-text small">17 minutes ago</p>
          </div>
          <p className="widget-box-status-text">
            Here are some of the photos from my last visit to StreamCon 2019!!
          </p>
          <div className="picture-collage">
            <div className="picture-collage-row medium">
              <div className="picture-collage-item popup-picture-trigger">
                <div className="photo-preview">
                  <figure className="photo-preview-image liquid">
                    <img className="pstimg" src={img1} alt="photo-preview-10" />
                  </figure>
                  <div className="photo-preview-info">
                    <div className="reaction-count-list">
                      <div className="reaction-count negative">
                        <svg className="reaction-count-icon icon-thumbs-up">
                          <use xlinkHref="#svg-thumbs-up" />
                        </svg>
                        <p className="reaction-count-text">2</p>
                      </div>
                      <div className="reaction-count negative">
                        <svg className="reaction-count-icon icon-comment">
                          <use xlinkHref="#svg-comment" />
                        </svg>
                        <p className="reaction-count-text">5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="picture-collage-item popup-picture-trigger">
                <div className="photo-preview">
                  <figure className="photo-preview-image liquid">
                    <img src={img1} alt="photo-preview-10" className="pstimg" />
                  </figure>
                  <div className="photo-preview-info">
                    <div className="reaction-count-list">
                      <div className="reaction-count negative">
                        <svg className="reaction-count-icon icon-thumbs-up">
                          <use xlinkHref="#svg-thumbs-up" />
                        </svg>
                        <p className="reaction-count-text">2</p>
                      </div>
                      <div className="reaction-count negative">
                        <svg className="reaction-count-icon icon-comment">
                          <use xlinkHref="#svg-comment" />
                        </svg>
                        <p className="reaction-count-text">5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="picture-collage-row">
              <div className="picture-collage-item popup-picture-trigger">
                <div className="photo-preview">
                  <figure className="photo-preview-image liquid">
                    <img src={img2} alt="photo-preview-16" className="pstimg"/>
                  </figure>
                  <div className="photo-preview-info">
                    <div className="reaction-count-list">
                      <div className="reaction-count negative">
                        <svg className="reaction-count-icon icon-thumbs-up">
                          <use xlinkHref="#svg-thumbs-up" />
                        </svg>
                        <p className="reaction-count-text">2</p>
                      </div>
                      <div className="reaction-count negative">
                        <svg className="reaction-count-icon icon-comment">
                          <use xlinkHref="#svg-comment" />
                        </svg>
                        <p className="reaction-count-text">5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="picture-collage-item popup-picture-trigger">
                <div className="photo-preview">
                  <figure className="photo-preview-image liquid">
                    <img className="pstimg" src={img2} alt="photo-preview-16" />
                  </figure>
                  <div className="photo-preview-info">
                    <div className="reaction-count-list">
                      <div className="reaction-count negative">
                        <svg className="reaction-count-icon icon-thumbs-up">
                          <use xlinkHref="#svg-thumbs-up" />
                        </svg>
                        <p className="reaction-count-text">2</p>
                      </div>
                      <div className="reaction-count negative">
                        <svg className="reaction-count-icon icon-comment">
                          <use xlinkHref="#svg-comment" />
                        </svg>
                        <p className="reaction-count-text">5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="picture-collage-item pstoverlay">
                <a
                  className="picture-collage-item-overlay "
                  
                >
                  <p className="picture-collage-item-overlay-text">+22</p>
                </a>
                <div className="photo-preview">
                  <figure className="photo-preview-image liquid">
                    <img className="pstimg" src="img/cover/14.jpg" alt="photo-preview-14" />
                  </figure>
                  <div className="photo-preview-info">
                    <div className="reaction-count-list">
                      <div className="reaction-count negative">
                        <svg className="reaction-count-icon icon-thumbs-up">
                          <use xlinkHref="#svg-thumbs-up" />
                        </svg>
                        <p className="reaction-count-text">2</p>
                      </div>
                      <div className="reaction-count negative">
                        <svg className="reaction-count-icon icon-comment">
                          <use xlinkHref="#svg-comment" />
                        </svg>
                        <p className="reaction-count-text">5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-actions">
            <div className="content-action">
              <div className="meta-line">
                <div className="meta-line-list reaction-item-list"></div>
                <p className="meta-line-text">3</p>
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
                        data-src="img/avatar/07.jpg"
                      />
                    </div>
                  </div>
                </div>
                <p className="meta-line-text">4 Participants</p>
              </div>
            </div>
            <div className="content-action">
              <div className="meta-line">
                <p className="meta-line-link">3 Comments</p>
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
