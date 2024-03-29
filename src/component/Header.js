import React, { useState, useEffect, useRef } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { ReactComponent as Toogle } from "../icons/Toogle Side Menu Icon.svg";
import { ReactComponent as Setting } from "../icons/Setting.svg";
import { ReactComponent as Shopping } from "../icons/Shopping.svg";
import { ReactComponent as Addfriend } from "../icons/Add-friend.svg";
import { ReactComponent as Removefriend } from "../icons/Removefriend.svg";
import { ReactComponent as Searcicon } from "../icons/Searcicon.svg";
import { ReactComponent as SearchX } from "../icons/searcX.svg";
import { ReactComponent as Notification } from "../icons/Notifications Icon.svg";
import { ReactComponent as Friend } from "../icons/Friends Icon.svg";
import img from "../img/marketplace/items/04.jpg";
import avatar from "../icons/logo.png";
import Login from "../component/Login";
import Avatar from "./Avatar";
import { menuVisibility, mobilemenuVisibility, isLoged } from "../Atoms/global";
import { useRecoilState } from "recoil";

export default function Header() {
  const [menuVisible, setmenuVisible] = useRecoilState(menuVisibility);
  const [MmenuVisible, setMmenuVisible] = useRecoilState(mobilemenuVisibility);
  const [isLogin, setisLogin] = useRecoilState(isLoged);
  const [srchEvent, setsrchEvent] = useState(false);
  const [index, setIndex] = useState(0);
  const [inputValue, setinputValue] = useState("");
  const icon = useRef(0);
  document.body.addEventListener("click", (b) => {
    if (icon.current && !icon.current.contains(b.target) && index > 0) {
      setIndex(0);
    }
  });

  const dropdownHandler = (i) => {
    if (i === 1) {
      if (i === index) {
        return "activeShp";
      } else {
        return "passiveShp";
      }
    }
    if (i === 2) {
      if (i === index) {
        return "activeFri";
      } else {
        return "passiveFri";
      }
    }
    if (i === 3) {
      if (i === index) {
        return "activeNot";
      } else {
        return "passiveNot";
      }
    }
    if (i === 4) {
      if (i === index) {
        return "activeSet";
      } else {
        return "passiveSet";
      }
    }
  };
  const dropdownCloser = (a) => {
    if (a === index) {
      setIndex(0);
    } else {
      setIndex(a);
    }
  };

  const inputHandle = (e) => {
    setinputValue(e.target.value);
    if (e.target.value.split(" ").join("").length > 0) {
      setsrchEvent(true);
    } else {
      setsrchEvent(false);
    }
  };
  const srcdrpClass = () => {
    if (srchEvent === false) {
      return "dropdown-box padding-bottom-small header-search-dropdown passiveSrcdrp";
    } else {
      return "dropdown-box padding-bottom-small header-search-dropdown activeSrcdrp";
    }
  };

  return (
    <div className="header">
      <div className="header-actions">
        <div className="header-brand">
          <div className="logo">
            <img src={avatar} alt="Logo" className="icon-logo-vikinger small" />
          </div>
        </div>
      </div>

      <div className="header-actions">
        <div
          onClick={() => {
            setmenuVisible(!menuVisible);
          }}
          className="sidemenu-trigger navigation-widget-trigger"
        >
          <Toogle className="icon-grid" />
        </div>
        <div
          onClick={() => {
            setMmenuVisible(!MmenuVisible);
          }}
          className="mobilemenu-trigger navigation-widget-mobile-trigger"
        >
          <div className="burger-icon inverted">
            <div className="burger-icon-bar" />
            <div className="burger-icon-bar" />
            <div className="burger-icon-bar" />
          </div>
        </div>
      </div>

      <div className="header-actions search-bar">
        {srchEvent ? (
          <div className="interactive-input dark active">
            <input
              autoComplete="off"
              onChange={inputHandle}
              value={inputValue}
              type="text"
              placeholder="Search here for people or groups"
            />
            <div
              onClick={() => {
                setinputValue("");
                setsrchEvent(false);
              }}
              className="interactive-input-action"
            >
              <SearchX className="interactive-input-action-icon icon-cross-thin" />
            </div>
          </div>
        ) : (
          <div className="interactive-input dark">
            <input
              autoComplete="off"
              onChange={inputHandle}
              value={inputValue}
              type="text"
              placeholder="Search here for people or groups"
            />
            <div className="interactive-input-icon-wrap">
              <Searcicon className="interactive-input-icon icon-magnifying-glass" />
            </div>
          </div>
        )}
        <div className={srcdrpClass()} id="drp">
          <div className="dropdown-box-category">
            <p className="dropdown-box-category-title">Members</p>
          </div>
          <div className="dropdown-box-list small no-scroll">
            <a className="dropdown-box-list-item" href="profile-timeline.html">
              <div className="user-status notification">
                <div className="user-status-avatar">
                  <div className="user-avatar small no-outline">
                    <div className="user-avatar-content">
                      <div
                        className="hexagon-image-30-32"
                        data-src="img/avatar/05.jpg"
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
                      <p className="user-avatar-badge-text">12</p>
                    </div>
                  </div>
                </div>
                <p className="user-status-title">
                  <span className="bold">Neko Bebop</span>
                </p>
                <p className="user-status-text">1 friends in common</p>
                <div className="user-status-icon">
                  <svg className="icon-friend">
                    <use xlinkHref="#svg-friend" />
                  </svg>
                </div>
              </div>
            </a>
            <a className="dropdown-box-list-item" href="profile-timeline.html">
              <div className="user-status notification">
                <div className="user-status-avatar">
                  <div className="user-avatar small no-outline">
                    <div className="user-avatar-content">
                      <div
                        className="hexagon-image-30-32"
                        data-src="img/avatar/15.jpg"
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
                      <p className="user-avatar-badge-text">7</p>
                    </div>
                  </div>
                </div>
                <p className="user-status-title">
                  <span className="bold">Tim Rogers</span>
                </p>
                <p className="user-status-text">4 friends in common</p>
                <div className="user-status-icon">
                  <svg className="icon-friend">
                    <use xlinkHref="#svg-friend" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
          <div className="dropdown-box-category">
            <p className="dropdown-box-category-title">Groups</p>
          </div>
          <div className="dropdown-box-list small no-scroll">
            <a className="dropdown-box-list-item" href="group-timeline.html">
              <div className="user-status notification">
                <div className="user-status-avatar">
                  <div className="user-avatar small no-border">
                    <div className="user-avatar-content">
                      <div
                        className="hexagon-image-40-44"
                        data-src="img/avatar/24.jpg"
                      />
                    </div>
                  </div>
                </div>
                <p className="user-status-title">
                  <span className="bold">Cosplayers of the World</span>
                </p>
                <p className="user-status-text">139 members</p>
                <div className="user-status-icon">
                  <svg className="icon-group">
                    <use xlinkHref="#svg-group" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
          <div className="dropdown-box-category">
            <p className="dropdown-box-category-title">Marketplace</p>
          </div>
          <div className="dropdown-box-list small no-scroll">
            <a
              className="dropdown-box-list-item"
              href="marketplace-product.html"
            >
              <div className="user-status no-padding-top">
                <div className="user-status-avatar">
                  <figure className="picture small round liquid">
                    <img src="img/marketplace/items/07.jpg" alt="item-07" />
                  </figure>
                </div>
                <p className="user-status-title">
                  <span className="bold">Mercenaries White Frame</span>
                </p>
                <p className="user-status-text">By Neko Bebop</p>
                <div className="user-status-icon">
                  <svg className="icon-marketplace">
                    <use xlinkHref="#svg-marketplace" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div></div>
      {isLogin ? (
        <>
          <div className="header-actions">
            <div className="progress-stat">
              <div className="bar-progress-wrap">
                <p className="bar-progress-info">
                  Next: <span className="bar-progress-text">38</span>
                </p>
              </div>
              <div className="cntrbar">
                <div className="probar"></div>
              </div>
            </div>
          </div>

          <div ref={icon} className="header-actions">
            <div className="action-list dark">
              <div className="action-list-item-wrap">
                <div className="action-list-item header-dropdown-trigger">
                  <Shopping
                    className="action-list-item-icon icon-shopping-bag"
                    onClick={(b) => {
                      dropdownCloser(1);
                    }}
                  />
                </div>
                <div
                  className={
                    `${dropdownHandler(1)}` +
                    " dropdown-box  header-dropdown no-padding-bottom"
                  }
                >
                  <div className="dropdown-box-header">
                    <p className="dropdown-box-header-title">
                      Shopping Cart <span className="highlighted">3</span>
                    </p>
                  </div>
                  <div
                    className="dropdown-box-list scroll-small no-hover"
                    data-simplebar
                  >
                    <Scrollbars>
                      <div className="dropdown-box-list-item">
                        <div className="cart-item-preview">
                          <a
                            className="cart-item-preview-image"
                            href="marketplace-product.html"
                          >
                            <figure className="picture medium round liquid">
                              <img src={img} alt="item-01" />
                            </figure>
                          </a>
                          <p className="cart-item-preview-title">
                            <a href="marketplace-product.html">
                              Twitch Stream UI Pack
                            </a>
                          </p>
                          <p className="cart-item-preview-text">
                            Regular License
                          </p>
                          <p className="cart-item-preview-price">
                            <span className="highlighted">$</span> 12.00 x 1
                          </p>
                          <div className="cart-item-preview-action">
                            <svg className="icon-delete">
                              <use xlinkHref="#svg-delete" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown-box-list-item">
                        <div className="cart-item-preview">
                          <a
                            className="cart-item-preview-image"
                            href="marketplace-product.html"
                          >
                            <figure className="picture medium round liquid">
                              <img src={img} alt="item-11" />
                            </figure>
                          </a>
                          <p className="cart-item-preview-title">
                            <a href="marketplace-product.html">
                              Gaming Coin Badges Pack
                            </a>
                          </p>
                          <p className="cart-item-preview-text">
                            Regular License
                          </p>
                          <p className="cart-item-preview-price">
                            <span className="highlighted">$</span> 6.00 x 1
                          </p>
                          <div className="cart-item-preview-action">
                            <svg className="icon-delete">
                              <use xlinkHref="#svg-delete" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown-box-list-item">
                        <div className="cart-item-preview">
                          <a
                            className="cart-item-preview-image"
                            href="marketplace-product.html"
                          >
                            <figure className="picture medium round liquid">
                              <img src={img} alt="item-10" />
                            </figure>
                          </a>
                          <p className="cart-item-preview-title">
                            <a href="marketplace-product.html">
                              Twitch Stream UI Pack
                            </a>
                          </p>
                          <p className="cart-item-preview-text">
                            Regular License
                          </p>
                          <p className="cart-item-preview-price">
                            <span className="highlighted">$</span> 26.00 x 1
                          </p>
                          <div className="cart-item-preview-action">
                            <svg className="icon-delete">
                              <use xlinkHref="#svg-delete" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown-box-list-item">
                        <div className="cart-item-preview">
                          <a
                            className="cart-item-preview-image"
                            href="marketplace-product.html"
                          >
                            <figure className="picture medium round liquid">
                              <img src={img} alt="item-04" />
                            </figure>
                          </a>
                          <p className="cart-item-preview-title">
                            <a href="marketplace-product.html">
                              Generic Joystick Pack
                            </a>
                          </p>
                          <p className="cart-item-preview-text">
                            Regular License
                          </p>
                          <p className="cart-item-preview-price">
                            <span className="highlighted">$</span> 16.00 x 1
                          </p>
                          <div className="cart-item-preview-action">
                            {" "}
                            <svg className="icon-delete">
                              <use xlinkHref="#svg-delete" />
                            </svg>{" "}
                          </div>
                        </div>
                      </div>
                    </Scrollbars>
                  </div>
                  <div className="cart-preview-total">
                    <p className="cart-preview-total-title">Total:</p>
                    <p className="cart-preview-total-text">
                      <span className="highlighted">$</span> 60.00
                    </p>
                  </div>
                  <div className="dropdown-box-actions">
                    <div className="dropdown-box-action">
                      <a
                        className="button secondary"
                        href="marketplace-cart.html"
                      >
                        Shopping Cart
                      </a>
                    </div>
                    <div className="dropdown-box-action">
                      <a
                        className="button primary"
                        href="marketplace-checkout.html"
                      >
                        Go to Checkout
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="action-list-item-wrap">
                <div className="action-list-item header-dropdown-trigger">
                  <Friend
                    className="action-list-item-icon icon-shopping-bag"
                    onClick={() => {
                      dropdownCloser(2);
                    }}
                  />
                </div>
                <div
                  className={
                    `${dropdownHandler(2)}` + " dropdown-box header-dropdown"
                  }
                >
                  <div className="dropdown-box-header">
                    <p className="dropdown-box-header-title">Friend Requests</p>
                    <div className="dropdown-box-header-actions">
                      <p className="dropdown-box-header-action">Find Friends</p>
                      <p className="dropdown-box-header-action">Settings</p>
                    </div>
                  </div>
                  <div className="dropdown-box-list no-hover" data-simplebar>
                    <div className="dropdown-box-list-item">
                      <div className="user-status request">
                        <a
                          className="user-status-avatar"
                          href="profile-timeline.html"
                        >
                          <div className="user-avatar small no-outline">
                            <Avatar size={1} />
                          </div>
                        </a>
                        <p className="user-status-title">
                          <a className="bold" href="profile-timeline.html">
                            Ginny Danvers
                          </a>
                        </p>
                        <p className="user-status-text">6 friends in common</p>
                        <div className="action-request-list">
                          <div className="action-request accept">
                            <Addfriend className="action-request-icon icon-add-friend" />
                          </div>
                          <div className="action-request decline">
                            <Removefriend className="action-request-icon icon-remove-friend" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-box-list-item">
                      <div className="user-status request">
                        <a
                          className="user-status-avatar"
                          href="profile-timeline.html"
                        >
                          <div className="user-avatar small no-outline">
                            <Avatar size={1} />
                          </div>
                        </a>
                        <p className="user-status-title">
                          <a className="bold" href="profile-timeline.html">
                            Ginny Danvers
                          </a>
                        </p>
                        <p className="user-status-text">6 friends in common</p>
                        <div className="action-request-list">
                          <div className="action-request accept">
                            <Addfriend className="action-request-icon icon-add-friend" />
                          </div>
                          <div className="action-request decline">
                            <Removefriend className="action-request-icon icon-remove-friend" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="dropdown-box-button secondary"
                    href="hub-profile-requests.html"
                  >
                    View all Requests
                  </a>
                </div>
              </div>

              <div className="action-list-item-wrap">
                <div className="action-list-item unread header-dropdown-trigger">
                  <Notification
                    onClick={() => {
                      dropdownCloser(3);
                    }}
                    className="action-list-item-icon icon-notification"
                  />
                </div>
                <div
                  className={
                    `${dropdownHandler(3)}` + " dropdown-box header-dropdown"
                  }
                >
                  <div className="dropdown-box-header">
                    <p className="dropdown-box-header-title">Notifications</p>
                    <div className="dropdown-box-header-actions">
                      <p className="dropdown-box-header-action">
                        Mark all as Read
                      </p>
                      <p className="dropdown-box-header-action">Settings</p>
                    </div>
                  </div>
                  <div className="dropdown-box-list" data-simplebar>
                    <Scrollbars>
                      <div className="dropdown-box-list-item unread">
                        <div className="user-status notification">
                          <a
                            className="user-status-avatar"
                            href="profile-timeline.html"
                          >
                            <div className="user-avatar small no-outline">
                              <Avatar size={1} />
                            </div>
                          </a>
                          <p className="user-status-title">
                            <a className="bold" href="profile-timeline.html">
                              Nick Grissom
                            </a>
                            posted a comment on your
                            <a
                              className="highlighted"
                              href="profile-timeline.html"
                            >
                              status update
                            </a>
                          </p>
                          <p className="user-status-timestamp">2 minutes ago</p>
                          <div className="user-status-icon">
                            <svg className="icon-comment">
                              <use xlinkHref="#svg-comment" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown-box-list-item">
                        <div className="user-status notification">
                          <a
                            className="user-status-avatar"
                            href="profile-timeline.html"
                          >
                            <div className="user-avatar small no-outline">
                              <Avatar size={1} />
                            </div>
                          </a>
                          <p className="user-status-title">
                            <a className="bold" href="profile-timeline.html">
                              Sarah Diamond
                            </a>
                            left a like
                            <img
                              className="reaction"
                              src="img/reaction/like.png"
                              alt="reaction-like"
                            />
                            reaction on your
                            <a
                              className="highlighted"
                              href="profile-timeline.html"
                            >
                              status update
                            </a>
                          </p>
                          <p className="user-status-timestamp">
                            17 minutes ago
                          </p>
                          <div className="user-status-icon">
                            <svg className="icon-thumbs-up">
                              <use xlinkHref="#svg-thumbs-up" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown-box-list-item">
                        <div className="user-status notification">
                          <a
                            className="user-status-avatar"
                            href="profile-timeline.html"
                          >
                            <div className="user-avatar small no-outline">
                              <Avatar size={1} />
                            </div>
                          </a>
                          <p className="user-status-title">
                            <a className="bold" href="profile-timeline.html">
                              Destroy Dex
                            </a>
                            posted a comment on your
                            <a
                              className="highlighted"
                              href="profile-photos.html"
                            >
                              photo
                            </a>
                          </p>
                          <p className="user-status-timestamp">
                            31 minutes ago
                          </p>
                          <div className="user-status-icon">
                            <svg className="icon-comment">
                              <use xlinkHref="#svg-comment" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown-box-list-item">
                        <div className="user-status notification">
                          <a
                            className="user-status-avatar"
                            href="profile-timeline.html"
                          >
                            <div className="user-avatar small no-outline">
                              <Avatar size={1} />
                            </div>
                          </a>
                          <p className="user-status-title">
                            <a className="bold" href="profile-timeline.html">
                              The Green Goo
                            </a>
                            left a love
                            <img
                              className="reaction"
                              src="img/reaction/love.png"
                              alt="reaction-love"
                            />
                            reaction on your
                            <a
                              className="highlighted"
                              href="profile-timeline.html"
                            >
                              status update
                            </a>
                          </p>
                          <p className="user-status-timestamp">2 hours ago</p>
                          <div className="user-status-icon">
                            <svg className="icon-thumbs-up">
                              <use xlinkHref="#svg-thumbs-up" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown-box-list-item">
                        <div className="user-status notification">
                          <a
                            className="user-status-avatar"
                            href="profile-timeline.html"
                          >
                            <div className="user-avatar small no-outline">
                              <Avatar size={1} />
                            </div>
                          </a>
                          <p className="user-status-title">
                            <a className="bold" href="profile-timeline.html">
                              Neko Bebop
                            </a>
                            posted a comment on your
                            <a
                              className="highlighted"
                              href="profile-timeline.html"
                            >
                              status update
                            </a>
                          </p>
                          <p className="user-status-timestamp">3 hours ago</p>
                          <div className="user-status-icon">
                            <svg className="icon-comment">
                              <use xlinkHref="#svg-comment" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Scrollbars>
                  </div>
                  <a
                    className="dropdown-box-button secondary"
                    href="hub-profile-notifications.html"
                  >
                    View all Notifications
                  </a>
                </div>
              </div>
            </div>
            <div className="action-item-wrap">
              <div className="action-item dark header-settings-dropdown-trigger">
                <Setting
                  className="action-item-icon icon-settings"
                  onClick={() => {
                    dropdownCloser(4);
                  }}
                />
              </div>
              <div
                className={
                  `${dropdownHandler(4)}` +
                  " dropdown-navigation header-settings-dropdown"
                }
              >
                <div className="dropdown-navigation-header">
                  <div className="user-status">
                    <a
                      className="user-status-avatar"
                      href="profile-timeline.html"
                    >
                      <div className="user-avatar small no-outline">
                        <Avatar size={1} />
                      </div>
                    </a>
                    <p className="user-status-title">
                      <span className="bold">Hi Marina!</span>
                    </p>
                    <p className="user-status-text small">
                      <a href="profile-timeline.html">@marinavalentine</a>
                    </p>
                  </div>
                </div>
                <p className="dropdown-navigation-category">My Profile</p>
                <a
                  className="dropdown-navigation-link"
                  href="hub-profile-info.html"
                >
                  Profile Info
                </a>
                <a
                  className="dropdown-navigation-link"
                  href="hub-profile-social.html"
                >
                  Social &amp; Stream
                </a>
                <a
                  className="dropdown-navigation-link"
                  href="hub-profile-notifications.html"
                >
                  Notifications
                </a>
                <a
                  className="dropdown-navigation-link"
                  href="hub-profile-messages.html"
                >
                  Messages
                </a>
                <a
                  className="dropdown-navigation-link"
                  href="hub-profile-requests.html"
                >
                  Friend Requests
                </a>
                <p className="dropdown-navigation-category">Account</p>
                <a
                  className="dropdown-navigation-link"
                  href="hub-account-info.html"
                >
                  Account Info
                </a>
                <a
                  className="dropdown-navigation-link"
                  href="hub-account-password.html"
                >
                  Change Password
                </a>
                <a
                  className="dropdown-navigation-link"
                  href="hub-account-settings.html"
                >
                  General Settings
                </a>
                <p className="dropdown-navigation-category">Groups</p>
                <a
                  className="dropdown-navigation-link"
                  href="hub-group-management.html"
                >
                  Manage Groups
                </a>
                <a
                  className="dropdown-navigation-link"
                  href="hub-group-invitations.html"
                >
                  Invitations
                </a>
                <p className="dropdown-navigation-category">My Store</p>
                <a
                  className="dropdown-navigation-link"
                  href="hub-store-account.html"
                >
                  My Account <span className="highlighted">$250,32</span>
                </a>
                <a
                  className="dropdown-navigation-link"
                  href="hub-store-statement.html"
                >
                  Sales Statement
                </a>
                <a
                  className="dropdown-navigation-link"
                  href="hub-store-items.html"
                >
                  Manage Items
                </a>
                <a
                  className="dropdown-navigation-link"
                  href="hub-store-downloads.html"
                >
                  Downloads
                </a>
                <p
                  onClick={() => {
                    localStorage.setItem("fut.az", "");
                    setisLogin(false);
                    window.location = "/";
                  }}
                  className="dropdown-navigation-button button small secondary"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Login type="web" />
      )}
    </div>
  );
}
