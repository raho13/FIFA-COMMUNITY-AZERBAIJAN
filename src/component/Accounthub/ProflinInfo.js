import React, { useState } from "react";
import { ReactComponent as Contacticn } from "../../icons/contacticn.svg";
import { ReactComponent as Plus } from "../../icons/plus.svg";
import { ReactComponent as Group } from "../../icons/Groups Icon.svg";
import { ReactComponent as Market } from "../../icons/Market.svg";
import { ReactComponent as Minus } from "../../icons/minus.svg";

export default function ProflinInfo() {
  const [item1, setitem1] = useState(false);
  const [item2, setitem2] = useState(false);
  const [item3, setitem3] = useState(false);

  const handleitem = (i) => {
    if (i === 1) {
      if (item1) {
        return "ActiveMenuitem";
      } else {
        return "PassiveMenuitem";
      }
    }
    if (i === 2) {
      if (item2) {
        return "ActiveMenuitem2";
      } else {
        return "PassiveMenuitem";
      }
    }
    if (i === 3) {
      if (item3) {
        return "ActiveMenuitem";
      } else {
        return "PassiveMenuitem";
      }
    }
  };
  return (
    <div className="sidebar-box no-padding">
      <div className="sidebar-menu">
        <div className="sidebar-menu-item">
          <div
            onClick={() => {
              setitem1(!item1);
              setitem2(false);
              setitem3(false);
            }}
            className="sidebar-menu-header accordion-trigger-linked"
          >
            <Contacticn className="sidebar-menu-header-icon icon-profile" />
            <div className="sidebar-menu-header-control-icon">
              {item1 ? (
                <Minus className="sidebar-menu-header-control-icon-closed icon-plus-small" />
              ) : (
                <Plus className="sidebar-menu-header-control-icon-closed icon-plus-small" />
              )}
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
              setitem2(!item2);
              setitem1(false);
              setitem3(false);
            }}
            className="sidebar-menu-header accordion-trigger-linked"
          >
            <Group className="sidebar-menu-header-icon icon-profile" />
            <div className="sidebar-menu-header-control-icon">
              {item2 ? (
                <Minus className="sidebar-menu-header-control-icon-closed icon-plus-small" />
              ) : (
                <Plus className="sidebar-menu-header-control-icon-closed icon-plus-small" />
              )}
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
              setitem3(!item3);
              setitem2(false);
              setitem1(false);
            }}
            className="sidebar-menu-header accordion-trigger-linked"
          >
            <Market className="sidebar-menu-header-icon icon-store" />
            <div className="sidebar-menu-header-control-icon">
              {item3 ? (
                <Minus className="sidebar-menu-header-control-icon-closed icon-plus-small" />
              ) : (
                <Plus className="sidebar-menu-header-control-icon-closed icon-plus-small" />
              )}
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
        <p className="button white small-space">Dəyişiklikləri yadda saxla</p>
        <p className="button white small-space">Dəyişikliklərdən imtina et</p>
      </div>
    </div>
  );
}
