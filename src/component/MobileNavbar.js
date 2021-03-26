import React, { useState, useContext, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { ReactComponent as Backarrow } from "../icons/backarrow.svg";
import { menuContext } from "../context";
import Avatar from "./Avatar";
export default function MobileNavbar() {
  const { MmenuVisible, setMmenuVisible } = useContext(menuContext);
  const handlemobileNav = () => {
    if (MmenuVisible === false) {
      return "navigation-widget navigation-widget-mobile sidebar left hidden";
    } else {
      return "navigation-widget navigation-widget-mobile sidebar left";
    }
  };
  return (
    <nav
      id="navigation-widget-mobile"
      className={handlemobileNav()}
      data-simplebar
    >
      <Scrollbars>
        <div
          className="navigation-widget-close-button"
          onClick={() => {
            setMmenuVisible(!MmenuVisible);
          }}
        >
          <Backarrow className="navigation-widget-close-button-icon icon-back-arrow" />
        </div>
        <div className="navigation-widget-info-wrap">
          <div className="navigation-widget-info">
            <a className="user-avatar small no-outline">
              <Avatar size={1} />{" "}
            </a>
            <p className="navigation-widget-info-title">
              <a href="profile-timeline.html">Marina Valentine</a>
            </p>
            <p className="navigation-widget-info-text">Welcome Back!</p>
          </div>
          <p className="navigation-widget-info-button button small secondary">
            Logout
          </p>
        </div>
        <p className="navigation-widget-section-title">Sections</p>
        <ul className="menu">
          <li className="menu-item active">
            {" "}
            <a className="menu-item-link" href="newsfeed.html">
              {" "}
              <svg className="menu-item-link-icon icon-newsfeed">
                <use xlinkHref="#svg-newsfeed" />
              </svg>{" "}
              Newsfeed{" "}
            </a>{" "}
          </li>
          <li className="menu-item">
            {" "}
            <a className="menu-item-link" href="overview.html">
              {" "}
              <svg className="menu-item-link-icon icon-overview">
                <use xlinkHref="#svg-overview" />
              </svg>{" "}
              Overview{" "}
            </a>{" "}
          </li>
          <li className="menu-item">
            {" "}
            <a className="menu-item-link" href="groups.html">
              {" "}
              <svg className="menu-item-link-icon icon-group">
                <use xlinkHref="#svg-group" />
              </svg>{" "}
              Groups{" "}
            </a>{" "}
          </li>
          <li className="menu-item">
            {" "}
            <a className="menu-item-link" href="members.html">
              {" "}
              <svg className="menu-item-link-icon icon-members">
                <use xlinkHref="#svg-members" />
              </svg>{" "}
              Members{" "}
            </a>{" "}
          </li>
          <li className="menu-item">
            {" "}
            <a className="menu-item-link" href="badges.html">
              {" "}
              <svg className="menu-item-link-icon icon-badges">
                <use xlinkHref="#svg-badges" />
              </svg>{" "}
              Badges{" "}
            </a>{" "}
          </li>
          <li className="menu-item">
            {" "}
            <a className="menu-item-link" href="quests.html">
              {" "}
              <svg className="menu-item-link-icon icon-quests">
                <use xlinkHref="#svg-quests" />
              </svg>{" "}
              Quests{" "}
            </a>{" "}
          </li>
          <li className="menu-item">
            {" "}
            <a className="menu-item-link" href="streams.html">
              {" "}
              <svg className="menu-item-link-icon icon-streams">
                <use xlinkHref="#svg-streams" />
              </svg>{" "}
              Streams{" "}
            </a>{" "}
          </li>
          <li className="menu-item">
            {" "}
            <a className="menu-item-link" href="events.html">
              {" "}
              <svg className="menu-item-link-icon icon-events">
                <use xlinkHref="#svg-events" />
              </svg>{" "}
              Events{" "}
            </a>{" "}
          </li>
          <li className="menu-item">
            {" "}
            <a className="menu-item-link" href="forums.html">
              {" "}
              <svg className="menu-item-link-icon icon-forums">
                <use xlinkHref="#svg-forums" />
              </svg>{" "}
              Forums{" "}
            </a>{" "}
          </li>
          <li className="menu-item">
            {" "}
            <a className="menu-item-link" href="marketplace.html">
              {" "}
              <svg className="menu-item-link-icon icon-marketplace">
                <use xlinkHref="#svg-marketplace" />
              </svg>{" "}
              Marketplace{" "}
            </a>{" "}
          </li>
        </ul>
        <p className="navigation-widget-section-title">My Profile</p>
        <a
          className="navigation-widget-section-link"
          href="hub-profile-info.html"
        >
          Profile Info
        </a>{" "}
        <a
          className="navigation-widget-section-link"
          href="hub-profile-social.html"
        >
          Social &amp; Stream
        </a>{" "}
        <a
          className="navigation-widget-section-link"
          href="hub-profile-notifications.html"
        >
          Notifications
        </a>{" "}
        <a
          className="navigation-widget-section-link"
          href="hub-profile-messages.html"
        >
          Messages
        </a>{" "}
        <a
          className="navigation-widget-section-link"
          href="hub-profile-requests.html"
        >
          Friend Requests
        </a>
        <p className="navigation-widget-section-title">Account</p>
        <a
          className="navigation-widget-section-link"
          href="hub-account-info.html"
        >
          Account Info
        </a>{" "}
        <a
          className="navigation-widget-section-link"
          href="hub-account-password.html"
        >
          Change Password
        </a>{" "}
        <a
          className="navigation-widget-section-link"
          href="hub-account-settings.html"
        >
          General Settings
        </a>
        <p className="navigation-widget-section-title">Groups</p>
        <a
          className="navigation-widget-section-link"
          href="hub-group-management.html"
        >
          Manage Groups
        </a>{" "}
        <a
          className="navigation-widget-section-link"
          href="hub-group-invitations.html"
        >
          Invitations
        </a>
        <p className="navigation-widget-section-title">My Store</p>
        <a
          className="navigation-widget-section-link"
          href="hub-store-account.html"
        >
          My Account <span className="highlighted">$250,32</span>
        </a>{" "}
        <a
          className="navigation-widget-section-link"
          href="hub-store-statement.html"
        >
          Sales Statement
        </a>{" "}
        <a
          className="navigation-widget-section-link"
          href="hub-store-items.html"
        >
          Manage Items
        </a>{" "}
        <a
          className="navigation-widget-section-link"
          href="hub-store-downloads.html"
        >
          Downloads
        </a>
        <p className="navigation-widget-section-title">Main Links</p>
        <a className="navigation-widget-section-link" href="#">
          Home
        </a>
        <a className="navigation-widget-section-link" href="#">
          Careers
        </a>{" "}
        <a className="navigation-widget-section-link" href="#">
          Faqs
        </a>{" "}
        <a className="navigation-widget-section-link" href="#">
          About Us
        </a>{" "}
        <a className="navigation-widget-section-link" href="#">
          Our Blog
        </a>{" "}
        <a className="navigation-widget-section-link" href="#">
          Contact Us
        </a>{" "}
        <a className="navigation-widget-section-link" href="#">
          Privacy Policy
        </a>
      </Scrollbars>
    </nav>
  );
}
