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
import { Link } from "react-router-dom";
import cover from "../img/cover/01.jpg";
import gold from "../img/badge/gold-s.png";
import age from "../img/badge/age-s.png";
import caffeinated from "../img/badge/caffeinated-s.png";
import Avatar from "./Avatar";
import warrior from "../img/badge/warrior-s.png";
import blank from "../img/badge/blank-s.png";
export default function Navbar() {
  const [activeMenuIndex, setactiveMenuIndex] = useState(
    localStorage.getItem("index")
  );
  useEffect(() => {
    const a = parseInt(localStorage.getItem("index"));
    if (a > 0) {
      setactiveMenuIndex(a);
    } else {
      setactiveMenuIndex(1);
    }
  });
  const { menuVisible, setMmenuVisible } = useContext(menuContext);
  const [smallmenu, setsmallmenu] = useState(
    "navigation-widget navigation-widget-desktop closed sidebar left delayed"
  );
  const [bigmenu, setbigmenu] = useState(
    "navigation-widget navigation-widget-desktop sidebar left hidden"
  );

  const ActiveitemHandler = (i) => {
    localStorage.setItem("index", activeMenuIndex);
    if (i === activeMenuIndex) {
      return "menu-item active";
    } else {
      return "menu-item";
    }
  };
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
      <nav id="navigation-widget" className={bigmenu}>
        <Scrollbars>
          <figure className="navigation-widget-cover liquid">
            <img src={cover} alt="cover-01" />
          </figure>
          <Avatar size={2} />
          <div className="user-short-description">
            <p className="user-short-description-title">
              <a href="profile-timeline.html">Rahib Rzayev</a>
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
          <Menuitems />
        </Scrollbars>
      </nav>
      <nav id="navigation-widget-small" className={smallmenu}>
        <Link className="user-avatar small no-outline online" to="/profil">
          <Avatar size={1} />
        </Link>
        <ul className="menu small">
          <li
            onClick={() => {
              setactiveMenuIndex(1);
            }}
            className={ActiveitemHandler(1)}
          >
            <Link
              className="menu-item-link text-tooltip-tfr"
              to="/"
              data-title="Newsfeed"
            >
              <Newsfeed className="menu-item-link-icon icon-newsfeed" />
            </Link>
          </li>
          <li
            onClick={() => {
              setactiveMenuIndex(2);
            }}
            className={ActiveitemHandler(2)}
          >
            <Link
              className="menu-item-link text-tooltip-tfr"
              to="/Streams"
              data-title="Overview"
            >
              <Overview className="menu-item-link-icon icon-overview" />
            </Link>
          </li>
          <li
            onClick={() => {
              setactiveMenuIndex(3);
            }}
            className={ActiveitemHandler(3)}
          >
            <Link
              className="menu-item-link text-tooltip-tfr"
              to="/Fut-reyting"
              data-title="Groups"
            >
              <Group className="menu-item-link-icon icon-group" />
            </Link>
          </li>
          <li
            onClick={() => {
              setactiveMenuIndex(4);
            }}
            className={ActiveitemHandler(4)}
          >
            <Link
              className="menu-item-link text-tooltip-tfr"
              to="/Members"
              data-title="Members"
            >
              <Members className="menu-item-link-icon icon-members" />
            </Link>
          </li>
          <li
            onClick={() => {
              setactiveMenuIndex(5);
            }}
            className={ActiveitemHandler(5)}
          >
            <Link
              className="menu-item-link text-tooltip-tfr"
              to="/Futcoins"
              data-title="Badges"
            >
              <Badges className="menu-item-link-icon icon-badges" />
            </Link>
          </li>
          <li
            onClick={() => {
              setactiveMenuIndex(6);
            }}
            className={ActiveitemHandler(6)}
          >
            <Link
              className="menu-item-link text-tooltip-tfr"
              to="/Accounthub"
              data-title="Quests"
            >
              <Quests className="menu-item-link-icon icon-quests" />
            </Link>
          </li>
          <li
            onClick={() => {
              setactiveMenuIndex(7);
            }}
            className={ActiveitemHandler(7)}
          >
            <Link
              className="menu-item-link text-tooltip-tfr"
              to="/FutTournaments"
              data-title="Newsfeed"
            >
              <Newsfeed className="menu-item-link-icon icon-newsfeed" />
            </Link>
          </li>
          <li
            onClick={() => {
              setactiveMenuIndex(8);
            }}
            className={ActiveitemHandler(8)}
          >
            <Link
              className="menu-item-link text-tooltip-tfr"
              to="/fifaTournaments"
              data-title="Newsfeed"
            >
              <Newsfeed className="menu-item-link-icon icon-newsfeed" />
            </Link>
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
export function Menuitems() {
  const { setMmenuVisible } = useContext(menuContext);
  return (
    <ul className="menu" style={{ marginTop: 0 }}>
      <li className="menu-item" onClick={() => setMmenuVisible(false)}>
        <Link className="menu-item-link" to="/">
          <Newsfeed className="menu-item-link-icon icon-newsfeed" />
          Newsfeed
        </Link>
      </li>
      <li className="menu-item" onClick={() => setMmenuVisible(false)}>
        <Link className="menu-item-link" to="/Streams">
          <Overview className="menu-item-link-icon icon-overview" />
          Overview
        </Link>
      </li>
      <li className="menu-item" onClick={() => setMmenuVisible(false)}>
        <Link className="menu-item-link" to="/Fut-reyting">
          <Group className="menu-item-link-icon icon-group" />
          Groups
        </Link>
      </li>
      <li className="menu-item" onClick={() => setMmenuVisible(false)}>
        <Link className="menu-item-link" to="/Accounthub">
          <Members className="menu-item-link-icon icon-members" />
          Members
        </Link>
      </li>
      <li className="menu-item" onClick={() => setMmenuVisible(false)}>
        <Link className="menu-item-link" to="/FutTournaments">
          <Badges className="menu-item-link-icon icon-badges" />
          Badges
        </Link>
      </li>
      <li className="menu-item" onClick={() => setMmenuVisible(false)}>
        <a className="menu-item-link" href="quests.html">
          <Quests className="menu-item-link-icon icon-quests" />
          Quests
        </a>
      </li>
      <li className="menu-item" onClick={() => setMmenuVisible(false)}>
        <a className="menu-item-link" href="streams.html">
          <Streams className="menu-item-link-icon icon-streams" />
          Streams
        </a>
      </li>
      <li className="menu-item" onClick={() => setMmenuVisible(false)}>
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
        <a className="menu-item-link" to="/Marketplace">
          <Marketplace className="menu-item-link-icon icon-marketplace" />
          Marketplace
        </a>
      </li>
    </ul>
  );
}
