import React from "react";
import Avatar from "../component/Avatar";
import Banner from "../component/Banner";
import bnrimg from "../img/banner/groups-icon.png";

export default function FutTournaments() {
  return (
    <>
      <Banner
        img={bnrimg}
        des="Browse all the groups of the community!"
        header="Tournaments"
      />
      <div className="grid grid-4-4-4 centered">
        <div className="user-preview">
          <figure
            className="user-preview-cover liquid"
            style={{
              background:
                'url("img/cover/29.jpg") center center / cover no-repeat',
            }}
          >
            <img
              src="img/cover/29.jpg"
              alt="cover-29"
              style={{ display: "none" }}
            />
          </figure>
          <div className="user-preview-info">
            <div className="user-short-description">
              <a className="user-short-description-avatar user-avatar medium no-stats">
                <Avatar size={2} />
              </a>
              <p className="user-short-description-title">
                <a href="group-timeline.html">Cosplayers of the World</a>
              </p>
              <p className="user-short-description-text">
                All cosplayers welcome!
              </p>
            </div>
            <div className="user-stats">
              <div className="user-stat">
                <p className="user-stat-title">139</p>
                <p className="user-stat-text">members</p>
              </div>
              <div className="user-stat">
                <p className="user-stat-title">105</p>
                <p className="user-stat-text">posts</p>
              </div>
              <div className="user-stat">
                <p className="user-stat-title">7.3k</p>
                <p className="user-stat-text">visits</p>
              </div>
            </div>
            <div className="user-avatar-list medium reverse centered">
              <div className="user-avatar smaller no-stats">
                <div className="user-avatar-border">
                  <div
                    className="hexagon-34-36"
                    style={{ width: 34, height: 36, position: "relative" }}
                  >
                    <canvas
                      width={34}
                      height={36}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
                <div className="user-avatar-content">
                  <div
                    className="hexagon-image-30-32"
                    data-src="img/avatar/03.jpg"
                    style={{ width: 30, height: 32, position: "relative" }}
                  >
                    <canvas
                      width={30}
                      height={32}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
              </div>
              <div className="user-avatar smaller no-stats">
                <div className="user-avatar-border">
                  <div
                    className="hexagon-34-36"
                    style={{ width: 34, height: 36, position: "relative" }}
                  >
                    <canvas
                      width={34}
                      height={36}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
                <div className="user-avatar-content">
                  <div
                    className="hexagon-image-30-32"
                    data-src="img/avatar/05.jpg"
                    style={{ width: 30, height: 32, position: "relative" }}
                  >
                    <canvas
                      width={30}
                      height={32}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
              </div>
              <div className="user-avatar smaller no-stats">
                <div className="user-avatar-border">
                  <div
                    className="hexagon-34-36"
                    style={{ width: 34, height: 36, position: "relative" }}
                  >
                    <canvas
                      width={34}
                      height={36}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
                <div className="user-avatar-content">
                  {" "}
                  <div
                    className="hexagon-image-30-32"
                    data-src="img/avatar/10.jpg"
                    style={{ width: 30, height: 32, position: "relative" }}
                  >
                    <canvas
                      width={30}
                      height={32}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
              </div>
              <div className="user-avatar smaller no-stats">
                {" "}
                <div className="user-avatar-border">
                  {" "}
                  <div
                    className="hexagon-34-36"
                    style={{ width: 34, height: 36, position: "relative" }}
                  >
                    <canvas
                      width={34}
                      height={36}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
                <div className="user-avatar-content">
                  {" "}
                  <div
                    className="hexagon-image-30-32"
                    data-src="img/avatar/02.jpg"
                    style={{ width: 30, height: 32, position: "relative" }}
                  >
                    <canvas
                      width={30}
                      height={32}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
              </div>
              <div className="user-avatar smaller no-stats">
                {" "}
                <div className="user-avatar-border">
                  {" "}
                  <div
                    className="hexagon-34-36"
                    style={{ width: 34, height: 36, position: "relative" }}
                  >
                    <canvas
                      width={34}
                      height={36}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
                <div className="user-avatar-content">
                  {" "}
                  <div
                    className="hexagon-image-30-32"
                    data-src="img/avatar/06.jpg"
                    style={{ width: 30, height: 32, position: "relative" }}
                  >
                    <canvas
                      width={30}
                      height={32}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
              </div>
              <a
                className="user-avatar smaller no-stats"
                href="group-members.html"
              >
                {" "}
                <div className="user-avatar-border">
                  {" "}
                  <div
                    className="hexagon-34-36"
                    style={{ width: 34, height: 36, position: "relative" }}
                  >
                    <canvas
                      width={34}
                      height={36}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
                <div className="user-avatar-content">
                  {" "}
                  <div
                    className="hexagon-image-30-32"
                    data-src="img/avatar/23.jpg"
                    style={{ width: 30, height: 32, position: "relative" }}
                  >
                    <canvas
                      width={30}
                      height={32}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
                <div className="user-avatar-overlay">
                  {" "}
                  <div
                    className="hexagon-overlay-30-32"
                    style={{ width: 30, height: 32, position: "relative" }}
                  >
                    <canvas
                      width={30}
                      height={32}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
                <div className="user-avatar-overlay-content">
                  {" "}
                  <p className="user-avatar-overlay-content-text">+132</p>
                </div>
              </a>{" "}
            </div>
            <div className="user-preview-actions">
              {" "}
              <p className="button secondary full">Join Group! </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
