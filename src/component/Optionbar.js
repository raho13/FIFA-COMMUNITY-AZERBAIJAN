import React from "react";
import img from "../img/marketplace/items/04.jpg";
import { Scrollbars } from "react-custom-scrollbars";
import { ReactComponent as Backarrow } from "../icons/backarrow.svg";
import Avatar from "./Avatar";
import { ReactComponent as Addfriend } from "../icons/Add-friend.svg";
import { ReactComponent as Removefriend } from "../icons/Removefriend.svg";
export default function Optionbar({ a, i, method }) {
  const handleClass = (j) => {
    if (i === j) {
      return "opsbar";
    } else {
      return "opsbar-hidden";
    }
  };
  const activeMenu = () => {
    if (a === 1) {
      return (
        <div className={handleClass(1)}>
          <div className="action-list-item-wrap opsbody">
            <Backarrow
              onClick={() => {
                method(0);
              }}
              className="navigation-widget-close-button-icon icon-back-arrow clsmobilemenu"
            />
            <div className="dropdown-box  header-dropdown  no-padding-bottom">
              <div className="dropdown-box-header">
                <p className="dropdown-box-header-title">
                  Shopping Cart <span className="highlighted">3</span>
                </p>
              </div>
              <div
                className="dropdown-box-list opsmain no-hover"
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
                      <p className="cart-item-preview-text">Regular License</p>
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
                      <p className="cart-item-preview-text">Regular License</p>
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
                      <p className="cart-item-preview-text">Regular License</p>
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
                      <p className="cart-item-preview-text">Regular License</p>
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
                      <p className="cart-item-preview-text">Regular License</p>
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
                      <p className="cart-item-preview-text">Regular License</p>
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
                      <p className="cart-item-preview-text">Regular License</p>
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
                      <p className="cart-item-preview-text">Regular License</p>
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
                      <p className="cart-item-preview-text">Regular License</p>
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
                      <p className="cart-item-preview-text">Regular License</p>
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
                  <a className="button secondary" href="marketplace-cart.html">
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
        </div>
      );
    } else if (a == 2) {
      return (
        <div className={handleClass(2)}>
          <div className="action-list-item-wrap">
            <div className="dropdown-box header-dropdown opsbody">
              <Backarrow
                onClick={() => {
                  method(0);
                }}
                className="navigation-widget-close-button-icon icon-back-arrow clsmobilemenu"
              />
              <div className="dropdown-box-header">
                <p className="dropdown-box-header-title">Notifications</p>
                <div className="dropdown-box-header-actions">
                  <p className="dropdown-box-header-action">Mark all as Read</p>
                  <p className="dropdown-box-header-action">Settings</p>
                </div>
              </div>
              <div className="dropdown-box-list opsmain">
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
                        <a className="highlighted" href="profile-timeline.html">
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
                        <a className="highlighted" href="profile-timeline.html">
                          status update
                        </a>
                      </p>
                      <p className="user-status-timestamp">17 minutes ago</p>
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
                        <a className="highlighted" href="profile-photos.html">
                          photo
                        </a>
                      </p>
                      <p className="user-status-timestamp">31 minutes ago</p>
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
                        <a className="highlighted" href="profile-timeline.html">
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
                        <a className="highlighted" href="profile-timeline.html">
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
                        <a className="highlighted" href="profile-timeline.html">
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
                        <a className="highlighted" href="profile-timeline.html">
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
                        <a className="highlighted" href="profile-timeline.html">
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
      );
    } else if (a === 3) {
      return (
        <div className={handleClass(3)}>
          <div className="action-list-item-wrap">
            <div className="dropdown-box opsbody header-dropdown">
              <Backarrow
                onClick={() => {
                  method(0);
                }}
                className="navigation-widget-close-button-icon icon-back-arrow clsmobilemenu"
              />
              <div className="dropdown-box-header">
                <p className="dropdown-box-header-title">Friend Requests</p>
                <div className="dropdown-box-header-actions">
                  <p className="dropdown-box-header-action">Find Friends</p>
                  <p className="dropdown-box-header-action">Settings</p>
                </div>
              </div>
              <div className="dropdown-box-list opsmain no-hover">
                <Scrollbars>
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
                </Scrollbars>
              </div>
              <a
                className="dropdown-box-button secondary"
                href="hub-profile-requests.html"
              >
                View all Requests
              </a>
            </div>
          </div>
        </div>
      );
    } else if (a === 4) {
      return (
        <div className={handleClass(4)}>
          <div className="action-item-wrap">
            <div className="dropdown-navigation header-settings-dropdown opsbody">
              <Backarrow
                onClick={() => {
                  method(0);
                }}
                className="navigation-widget-close-button-icon icon-back-arrow clsmobilemenu"
              />
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
              <p className="dropdown-navigation-button button small secondary">
                Logout
              </p>
            </div>
          </div>
        </div>
      );
    }
  };
  return <>{activeMenu()}</>;
}
