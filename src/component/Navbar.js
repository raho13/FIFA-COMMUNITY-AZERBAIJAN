import React, { useState, useContext, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { menuContext } from "../context";
import { ReactComponent as Newsfeed } from "../icons/Newsfeed Icon.svg";
import { ReactComponent as Overview } from "../icons/Overview Icon.svg";
import { ReactComponent as Group } from "../icons/Groups Icon.svg";
import { ReactComponent as Members } from "../icons/Members.svg";
import { ReactComponent as Quests } from "../icons/Quests.svg";
import { ReactComponent as Badges } from "../icons/Badges Icon.svg";
import { ReactComponent as Streams } from "../icons/Streams.svg";
import { ReactComponent as Events } from "../icons/Events.svg";
import { ReactComponent as Forums } from "../icons/Forums.svg";
import { ReactComponent as Marketplace } from "../icons/Marketplace.svg";
import cover from "../img/cover/01.jpg";
import gold from "../img/badge/gold-s.png";
import age from "../img/badge/age-s.png";
import caffeinated from "../img/badge/caffeinated-s.png";
import warrior from "../img/badge/warrior-s.png";
import blank from "../img/badge/blank-s.png";
export default function Navbar() {
  const { menuVisible } = useContext(menuContext);
  const [smallmenu, setsmallmenu] = useState(
    "navigation-widget navigation-widget-desktop closed sidebar left delayed"
  );
  const [bigmenu, setbigmenu] = useState(
    "navigation-widget navigation-widget-desktop sidebar left hidden"
  );
  useEffect(() => {
    if (menuVisible === true) {
      setsmallmenu(
        "navigation-widget navigation-widget-desktop closed sidebar left hidden"
      );
      setbigmenu(
        "navigation-widget navigation-widget-desktop sidebar left delayed"
      );
    } else {
      setsmallmenu(
        "navigation-widget navigation-widget-desktop closed sidebar left delayed"
      );
      setbigmenu(
        "navigation-widget navigation-widget-desktop sidebar left hidden"
      );
    }
  });

  return (
    <div>
      <nav id="navigation-widget" className={bigmenu} data-simplebar>
        <Scrollbars>
          <figure className="navigation-widget-cover liquid">
            <img src={cover} alt="cover-01" />
          </figure>
          <div className="user-short-description">
            <a className="user-short-description-avatar user-avatar medium">
              <div className="user-avatar-border">
                <div className="hexagon-120-132">
                  <canvas width="120" height="132"></canvas>
                </div>
              </div>
              <div className="user-avatar-content">
                <div
                  className="hexagon-image-82-90"
                  data-src="img/avatar/01.jpg"
                ></div>
              </div>
              <div className="user-avatar-progress">
                <div className="hexagon-progress-100-110"></div>
              </div>
              <div className="user-avatar-progress-border">
                <div className="hexagon-border-100-110"></div>
              </div>
              <div className="user-avatar-badge">
                <div className="user-avatar-badge-border">
                  <div className="hexagon-32-36"></div>
                </div>
                <div className="user-avatar-badge-content">
                  <div className="hexagon-dark-26-28"></div>
                </div>
                <p className="user-avatar-badge-text">24</p>
              </div>
            </a>
            <p className="user-short-description-title">
              <a href="profile-timeline.html">Marina Valentine</a>
            </p>
            <p className="user-short-description-text">
              <a href="#">www.gamehuntress.com</a>
            </p>
          </div>
          <div className="badge-list small">
            <div className="badge-item">
              <img src={gold} alt="badge-gold-s" />
            </div>
            <div className="badge-item">
              <img src={age} alt="badge-age-s" />
            </div>
            <div className="badge-item">
              <img src={caffeinated} alt="badge-caffeinated-s" />
            </div>
            <div className="badge-item">
              <img src={warrior} alt="badge-warrior-s" />
            </div>
            <a className="badge-item" href="profile-badges.html">
              <img src={blank} alt="badge-blank-s" />
              <p className="badge-item-text">+9</p>
            </a>
          </div>
          <div className="user-stats">
            <div className="user-stat">
              <p className="user-stat-title">930</p>
              <p className="user-stat-text">posts</p>
            </div>
            <div className="user-stat">
              <p className="user-stat-title">82</p>
              <p className="user-stat-text">friends</p>
            </div>
            <div className="user-stat">
              <p className="user-stat-title">5.7k</p>
              <p className="user-stat-text">visits</p>
            </div>
          </div>
          <ul className="menu">
            <li className="menu-item">
              <a className="menu-item-link" href="newsfeed.html">
                <Newsfeed className="menu-item-link-icon icon-newsfeed" />
                Newsfeed
              </a>
            </li>
            <li className="menu-item">
              <a className="menu-item-link" href="overview.html">
                <Overview className="menu-item-link-icon icon-overview" />
                Overview
              </a>
            </li>
            <li className="menu-item">
              <a className="menu-item-link" href="groups.html">
                <Group className="menu-item-link-icon icon-group" />
                Groups
              </a>
            </li>
            <li className="menu-item">
              <a className="menu-item-link" href="members.html">
                <Members className="menu-item-link-icon icon-members" />
                Members
              </a>
            </li>
            <li className="menu-item">
              <a className="menu-item-link" href="badges.html">
                <Badges className="menu-item-link-icon icon-badges" />
                Badges
              </a>
            </li>
            <li className="menu-item">
              <a className="menu-item-link" href="quests.html">
                <Quests className="menu-item-link-icon icon-quests" />
                Quests
              </a>
            </li>
            <li className="menu-item">
              <a className="menu-item-link" href="streams.html">
                <Streams className="menu-item-link-icon icon-streams" />
                Streams
              </a>
            </li>
            <li className="menu-item">
              <a className="menu-item-link" href="events.html">
                <Events className="menu-item-link-icon icon-events" />
                Events
              </a>
            </li>
            <li className="menu-item active">
              <a className="menu-item-link" href="forums.html">
                <Forums className="menu-item-link-icon icon-forums" />
                Forums
              </a>
            </li>
            <li className="menu-item">
              <a className="menu-item-link" href="marketplace.html">
                <Marketplace className="menu-item-link-icon icon-marketplace" />
                Marketplace
              </a>
            </li>
          </ul>
        </Scrollbars>
      </nav>
      <nav id="navigation-widget-small" className={smallmenu}>
        <a
          className="user-avatar small no-outline online"
          href="profile-timeline.html"
        >
          <div className="user-avatar-content">
            <div className="hexagon-image-30-32" data-src="img/avatar/01.jpg" />
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
            <p className="user-avatar-badge-text">24</p>
          </div>
        </a>
        <ul className="menu small">
          <li className="menu-item">
            <a
              className="menu-item-link text-tooltip-tfr"
              href="newsfeed.html"
              data-title="Newsfeed"
            >
              <Newsfeed className="menu-item-link-icon icon-newsfeed" />
            </a>
          </li>
          <li className="menu-item">
            <a
              className="menu-item-link text-tooltip-tfr"
              href="overview.html"
              data-title="Overview"
            >
              <Overview className="menu-item-link-icon icon-overview" />
            </a>
          </li>
          <li className="menu-item">
            <a
              className="menu-item-link text-tooltip-tfr"
              href="groups.html"
              data-title="Groups"
            >
              <Group className="menu-item-link-icon icon-group" />
            </a>
          </li>
          <li className="menu-item">
            <a
              className="menu-item-link text-tooltip-tfr"
              href="members.html"
              data-title="Members"
            >
              <Members className="menu-item-link-icon icon-members" />
            </a>
          </li>
          <li className="menu-item">
            <a
              className="menu-item-link text-tooltip-tfr"
              href="badges.html"
              data-title="Badges"
            >
              <Badges className="menu-item-link-icon icon-badges" />
            </a>
          </li>
          <li className="menu-item">
            <a
              className="menu-item-link text-tooltip-tfr"
              href="quests.html"
              data-title="Quests"
            >
              <Quests className="menu-item-link-icon icon-quests" />
            </a>
          </li>

          <li className="menu-item">
            <a
              className="menu-item-link text-tooltip-tfr"
              href="newsfeed.html"
              data-title="Newsfeed"
            >
              <Newsfeed className="menu-item-link-icon icon-newsfeed" />
            </a>
          </li>
          <li className="menu-item">
            <a
              className="menu-item-link text-tooltip-tfr"
              href="overview.html"
              data-title="Overview"
            >
              <Overview className="menu-item-link-icon icon-overview" />
            </a>
          </li>
          <li className="menu-item">
            <a
              className="menu-item-link text-tooltip-tfr"
              href="groups.html"
              data-title="Groups"
            >
              <Group className="menu-item-link-icon icon-group" />
            </a>
          </li>
          <li className="menu-item">
            <a
              className="menu-item-link text-tooltip-tfr"
              href="members.html"
              data-title="Members"
            >
              <Members className="menu-item-link-icon icon-members" />
            </a>
          </li>
          <li className="menu-item">
            <a
              className="menu-item-link text-tooltip-tfr"
              href="badges.html"
              data-title="Badges"
            >
              <Badges className="menu-item-link-icon icon-badges" />
            </a>
          </li>
          <li className="menu-item">
            <a
              className="menu-item-link text-tooltip-tfr"
              href="quests.html"
              data-title="Quests"
            >
              <Quests className="menu-item-link-icon icon-quests" />
            </a>
          </li>

          {/*         
    <li className="menu-item">
      {" "}
      <a
        className="menu-item-link text-tooltip-tfr"
        href="streams.html"
        data-title="Streams"
      >
        {" "}
        <svg className="menu-item-link-icon icon-streams">
          <use xlinkHref="#svg-streams" />
        </svg>{" "}
      </a>{" "}
    </li>
    <li className="menu-item">
      {" "}
      <a
        className="menu-item-link text-tooltip-tfr"
        href="events.html"
        data-title="Events"
      >
        {" "}
        <svg className="menu-item-link-icon icon-events">
          <use xlinkHref="#svg-events" />
        </svg>{" "}
      </a>{" "}
    </li>
    <li className="menu-item active">
      {" "}
      <a
        className="menu-item-link text-tooltip-tfr"
        href="forums.html"
        data-title="Forums"
      >
        <svg className="menu-item-link-icon icon-forums">
          <use xlinkHref="#svg-forums" />
        </svg>{" "}
      </a>{" "}
    </li>
    <li className="menu-item">
      {" "}
      <a
        className="menu-item-link text-tooltip-tfr"
        href="marketplace.html"
        data-title="Marketplace"
      >
        {" "}
        <svg className="menu-item-link-icon icon-marketplace">
          <use xlinkHref="#svg-marketplace" />
        </svg>{" "}
      </a>{" "}
    </li>
   */}
        </ul>
      </nav>
    </div>
  );
}
