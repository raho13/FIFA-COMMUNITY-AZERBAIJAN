import React, { useState } from "react";
import { ReactComponent as Contacticn } from "../../icons/contacticn.svg";
import { ReactComponent as Plus } from "../../icons/plus.svg";
import { ReactComponent as Group } from "../../icons/Groups Icon.svg";
import { ReactComponent as Market } from "../../icons/Market.svg";
import { ReactComponent as Minus } from "../../icons/minus.svg";

export default function ProflinInfo({ submit, reset }) {
  const [tabIndex, settabIndex] = useState(0);

  const handleitem = (i) => {
    if (tabIndex === i) {
      return "ActiveMenuitem";
    } else {
      return "PassiveMenuitem";
    }
  };
  const indexHandler = (j) => {
    if (j === tabIndex) {
      settabIndex(0);
    } else {
      settabIndex(j);
    }
  };
  const plusminus = (a) => {
    if (a === tabIndex) {
      return (
        <Minus className="sidebar-menu-header-control-icon-closed icon-plus-small" />
      );
    } else {
      return (
        <Plus className="sidebar-menu-header-control-icon-closed icon-plus-small" />
      );
    }
  };
  return (
    <div className="sidebar-box no-padding">
      <div className="sidebar-menu">
        <div className="sidebar-menu-item">
          <div
            onClick={() => {
              indexHandler(1);
            }}
            className="sidebar-menu-header accordion-trigger-linked"
          >
            <Contacticn className="sidebar-menu-header-icon icon-profile" />
            <div className="sidebar-menu-header-control-icon">
              {plusminus(1)}
            </div>
            <p className="sidebar-menu-header-title">Hesab məlumatları</p>
            <p className="sidebar-menu-header-text mnk">
              Change your avatar &amp; cover, accept friends, read messages and
              more!
            </p>
          </div>
          <div className={handleitem(1)}>
            <div className="sidebar-menu-body accordion-content-linked">
              <a className="sidebar-menu-link">Şəxsi məlumatlar</a>
              <a className="sidebar-menu-link">Əlaqə məlumatları</a>
              <a className="sidebar-menu-link">Sosial Medya məlumatları</a>
              <a className="sidebar-menu-link">Şifrə məlumatları</a>
            </div>
          </div>
        </div>
        <div className="sidebar-menu-item">
          <div
            onClick={() => {
              indexHandler(2);
            }}
            className="sidebar-menu-header accordion-trigger-linked"
          >
            <Group className="sidebar-menu-header-icon icon-profile" />
            <div className="sidebar-menu-header-control-icon">
              {plusminus(2)}
            </div>
            <p className="sidebar-menu-header-title">Xüsusi məlumatlar</p>
            <p className="sidebar-menu-header-text mnk">
              Create new groups, manage the ones you created or accept invites!
            </p>
          </div>
          <div className={handleitem(2)}>
            <div className="sidebar-menu-body accordion-content-linked">
              <a className="sidebar-menu-link">Manage Groups</a>
              <a className="sidebar-menu-link">Invitations</a>
            </div>
          </div>
        </div>
        <div className="sidebar-menu-item">
          <div
            onClick={() => {
              indexHandler(3);
            }}
            className="sidebar-menu-header accordion-trigger-linked"
          >
            <Market className="sidebar-menu-header-icon icon-store" />
            <div className="sidebar-menu-header-control-icon">
              {plusminus(3)}
            </div>
            <p className="sidebar-menu-header-title">Mağaza məlumatları</p>
            <p className="sidebar-menu-header-text mnk">
              Review your account, manage products check stats and much more!
            </p>
          </div>
          <div className={handleitem(3)}>
            <div className="sidebar-menu-body accordion-content-linked">
              <a className="sidebar-menu-link" href="hub-store-account.html">
                My Account
              </a>
              <a className="sidebar-menu-link" href="hub-store-statement.html">
                Sales Statement
              </a>
              <a className="sidebar-menu-link" href="hub-store-items.html">
                Manage Items
              </a>
              <a className="sidebar-menu-link" href="hub-store-downloads.html">
                Downloads
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-box-footer">
        <p
          className="button white small-space"
          onClick={() => {
            submit();
          }}
        >
          Dəyişiklikləri yadda saxla
        </p>
        <p className="button white small-space">Dəyişikliklərdən imtina et</p>
      </div>
    </div>
  );
}
