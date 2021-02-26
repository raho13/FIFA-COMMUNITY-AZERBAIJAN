import React from "react";
import coverimg from "../../img/cover/01.jpg";
import { ReactComponent as Comment } from "../../icons/comment.svg";
import coverimg1 from "../../img/cover/06.jpg";
import { ReactComponent as Reaction } from "../../icons/React.svg";
export default function Phototab() {
  return (
    <section className="section">
      <div className="section-header">
        <div className="section-header-info">
          <p className="section-pretitle">Browse Marina's</p>
          <h2 className="section-title">Photo Albums</h2>
        </div>
        <div className="section-header-actions">
          <p className="section-header-action popup-album-creation-trigger">
            Create Album +
          </p>
          <a
            className="section-header-action"
            href="profile-photos-inside.html"
          >
            See All
          </a>
        </div>
      </div>
      <div className="grid grid-3-3-3-3 centered">
        <a className="album-preview" href="profile-photos-inside.html">
          <figure
            className="album-preview-image liquid"
            style={{
              background: `url(${coverimg}) center center / cover no-repeat`,
            }}
          >
            <img
              src={coverimg}
              alt="album-image-01"
              style={{ display: "none" }}
            />
          </figure>
          <p className="text-sticker small negative">7</p>
          <div className="album-preview-info">
            <p className="album-preview-title">Profile Photos</p>
            <p className="album-preview-text">Updated 12 days ago</p>
          </div>
        </a>
        <a className="album-preview" href="profile-photos-inside.html">
          <figure
            className="album-preview-image liquid"
            style={{
              background: `url(${coverimg}) center center / cover no-repeat`,
            }}
          >
            <img
              src={coverimg}
              alt="album-image-01"
              style={{ display: "none" }}
            />
          </figure>
          <p className="text-sticker small negative">7</p>
          <div className="album-preview-info">
            <p className="album-preview-title">Profile Photos</p>
            <p className="album-preview-text">Updated 12 days ago</p>
          </div>
        </a>
        <a className="album-preview" href="profile-photos-inside.html">
          <figure
            className="album-preview-image liquid"
            style={{
              background: `url(${coverimg}) center center / cover no-repeat`,
            }}
          >
            <img
              src={coverimg}
              alt="album-image-01"
              style={{ display: "none" }}
            />
          </figure>
          <p className="text-sticker small negative">7</p>
          <div className="album-preview-info">
            <p className="album-preview-title">Profile Photos</p>
            <p className="album-preview-text">Updated 12 days ago</p>
          </div>
        </a>
        <a className="album-preview" href="profile-photos-inside.html">
          <figure
            className="album-preview-image liquid"
            style={{
              background: `url(${coverimg}) center center / cover no-repeat`,
            }}
          >
            <img
              src={coverimg}
              alt="album-image-01"
              style={{ display: "none" }}
            />
          </figure>
          <p className="text-sticker small negative">7</p>
          <div className="album-preview-info">
            <p className="album-preview-title">Profile Photos</p>
            <p className="album-preview-text">Updated 12 days ago</p>
          </div>
        </a>
      </div>
      <div className="section-header">
        <div className="section-header-info">
          <p className="section-pretitle">Check Marina's</p>
          <h2 className="section-title">Latest Photos</h2>
        </div>
        <div className="section-header-actions">
          <p className="section-header-action">Upload Photos +</p>
          <a
            className="section-header-action"
            href="profile-photos-inside.html"
          >
            See All
          </a>
        </div>
      </div>
      <div className="photos-masonry">
        <div className="photo-preview popup-picture-trigger">
          <figure
            className="photo-preview-image liquid"
            style={{
              background: `url(${coverimg1}) center center / cover no-repeat`,
            }}
          >
            <img
              src={coverimg1}
              alt="photo-preview-06"
              style={{ display: "none" }}
            />
          </figure>
          <div className="photo-preview-info">
            <div className="reaction-count-list landscape">
              <div className="reaction-count negative">
                <Reaction className="reaction-count-icon icon-thumbs-up" />
                <p className="reaction-count-text">2</p>
              </div>
              <div className="reaction-count negative">
                <Comment className="reaction-count-icon icon-comment" />
                <p className="reaction-count-text">5</p>
              </div>
            </div>
          </div>
        </div>
        <div className="photo-preview popup-picture-trigger">
          <figure
            className="photo-preview-image liquid"
            style={{
              background: `url(${coverimg1}) center center / cover no-repeat`,
            }}
          >
            <img
              src={coverimg1}
              alt="photo-preview-06"
              style={{ display: "none" }}
            />
          </figure>
          <div className="photo-preview-info">
            <div className="reaction-count-list landscape">
              <div className="reaction-count negative">
                <Reaction className="reaction-count-icon icon-thumbs-up" />
                <p className="reaction-count-text">2</p>
              </div>
              <div className="reaction-count negative">
                <Comment className="reaction-count-icon icon-comment" />
                <p className="reaction-count-text">5</p>
              </div>
            </div>
          </div>
        </div>
        <div className="photo-preview popup-picture-trigger">
          <figure
            className="photo-preview-image liquid"
            style={{
              background: `url(${coverimg1}) center center / cover no-repeat`,
            }}
          >
            <img
              src={coverimg1}
              alt="photo-preview-06"
              style={{ display: "none" }}
            />
          </figure>
          <div className="photo-preview-info">
            <div className="reaction-count-list landscape">
              <div className="reaction-count negative">
                <Reaction className="reaction-count-icon icon-thumbs-up" />
                <p className="reaction-count-text">2</p>
              </div>
              <div className="reaction-count negative">
                <Comment className="reaction-count-icon icon-comment" />
                <p className="reaction-count-text">5</p>
              </div>
            </div>
          </div>
        </div>
        <div className="photo-preview popup-picture-trigger">
          <figure
            className="photo-preview-image liquid"
            style={{
              background: `url(${coverimg1}) center center / cover no-repeat`,
            }}
          >
            <img
              src={coverimg1}
              alt="photo-preview-06"
              style={{ display: "none" }}
            />
          </figure>
          <div className="photo-preview-info">
            <div className="reaction-count-list landscape">
              <div className="reaction-count negative">
                <Reaction className="reaction-count-icon icon-thumbs-up" />
                <p className="reaction-count-text">2</p>
              </div>
              <div className="reaction-count negative">
                <Comment className="reaction-count-icon icon-comment" />
                <p className="reaction-count-text">5</p>
              </div>
            </div>
          </div>
        </div>
        <div className="photo-preview popup-picture-trigger">
          <figure
            className="photo-preview-image liquid"
            style={{
              background: `url(${coverimg1}) center center / cover no-repeat`,
            }}
          >
            <img
              src={coverimg1}
              alt="photo-preview-06"
              style={{ display: "none" }}
            />
          </figure>
          <div className="photo-preview-info">
            <div className="reaction-count-list landscape">
              <div className="reaction-count negative">
                <Reaction className="reaction-count-icon icon-thumbs-up" />
                <p className="reaction-count-text">2</p>
              </div>
              <div className="reaction-count negative">
                <Comment className="reaction-count-icon icon-comment" />
                <p className="reaction-count-text">5</p>
              </div>
            </div>
          </div>
        </div>
        <div className="photo-preview popup-picture-trigger">
          <figure
            className="photo-preview-image liquid"
            style={{
              background: `url(${coverimg1}) center center / cover no-repeat`,
            }}
          >
            <img
              src={coverimg1}
              alt="photo-preview-06"
              style={{ display: "none" }}
            />
          </figure>
          <div className="photo-preview-info">
            <div className="reaction-count-list landscape">
              <div className="reaction-count negative">
                <Reaction className="reaction-count-icon icon-thumbs-up" />
                <p className="reaction-count-text">2</p>
              </div>
              <div className="reaction-count negative">
                <Comment className="reaction-count-icon icon-comment" />
                <p className="reaction-count-text">5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
