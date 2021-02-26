import React, { useState } from "react";
import Banner from "../component/Banner";
import bannerimg from "../img/banner/streams-icon.png";
import ProflinInfo from "../component/Accounthub/ProflinInfo";
import Userimg from "../img/user-icon.png";
import convert from "../img/cover-photo.png";

export default function AccountHub() {
  const activeInp = (e) => {
    e.target.parentNode.setAttribute("class", "form-input small active");
  };
  const passiveInp = (e) => {
    e.target.parentNode.setAttribute("class", "form-input small");
  };
  return (
    <>
      <Banner
        img={bannerimg}
        header="AccountHub"
        des="Check out all the members streams!"
      />
      <div className="grid grid-3-9 medium-space">
        <div className="account-hub-sidebar">
          <div className="section-header account-head">
            <div className="section-header-info">
              <p className="section-pretitle">FİFA COMMUNITY AZERBAIJAN</p>
              <h2 className="section-title">ŞƏXSİ OTAQ</h2>
            </div>
          </div>
          <ProflinInfo />
        </div>
        <div className="account-hub-content">
          <div className="grid-column content-main">
            <div className="account-info-set">
              <div className="account-logo log-first">
                <a className="user-avatar small no-outline online account-avatar">
                  <div className="user-avatar-content">
                    <div
                      className="hexagon-image-30-32"
                      data-src="img/avatar/01.jpg"
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
                    <p className="user-avatar-badge-text">44</p>
                  </div>
                </a>
              </div>
              <div className="account-logo ml-2">
                <img src={Userimg} className="user-icon" />
                <div className="account-text">
                  <h1>Profil şəklini dəyiş</h1>
                  <p>Minimal ölçü 110x110px</p>
                </div>
              </div>
              <div className="account-logo ml-2">
                <img src={convert} className="user-icon" />
                <div className="account-text">
                  <h1>Kover şəklini dəyiş</h1>
                  <p>Minimal ölçü 1184x300px</p>
                </div>
              </div>
              <div className="account-logo ml-2">
                <div className="account-balance">
                  <h2>1275 AZN</h2>
                  <h1>Balansını artır</h1>
                  <p>FUT Community AZERBAIJAN balansı</p>
                </div>
              </div>
            </div>
            <div className="widget-box">
              <p className="widget-box-title">Şəxsi Məlumatlarınız</p>
              <div className="widget-box-content">
                <form className="form">
                  <div className="form-row split">
                    <div className="form-item">
                      <div className="form-input small">
                        <label htmlFor="account-full-name">Ad</label>
                        <input
                          onFocus={(e) => {
                            activeInp(e);
                          }}
                          onBlur={(e) => {
                            passiveInp(e);
                          }}
                          type="text"
                          id="account-full-name"
                          name="account_full_name"
                        />
                      </div>
                    </div>
                    <div className="form-item">
                      <div className="form-input small">
                        <label htmlFor="account-full-name">Soyad</label>{" "}
                        <input
                          onFocus={(e) => {
                            activeInp(e);
                          }}
                          onBlur={(e) => {
                            passiveInp(e);
                          }}
                          type="text"
                          id="account-full-name"
                          name="account_full_name"
                        />
                      </div>
                    </div>
                    <div className="form-item">
                      <div className="form-input small">
                        <label htmlFor="account-full-name">Ata adı</label>{" "}
                        <input
                          onFocus={(e) => {
                            activeInp(e);
                          }}
                          onBlur={(e) => {
                            passiveInp(e);
                          }}
                          type="text"
                          id="account-full-name"
                          name="account_full_name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-row split">
                    <div className="form-item">
                      <div className="form-input small">
                        <label htmlFor="account-url-username">
                          Haqqınızda məlumat yazın...
                        </label>
                        <textarea
                          onFocus={(e) => {
                            activeInp(e);
                          }}
                          onBlur={(e) => {
                            passiveInp(e);
                          }}
                          className="h-50"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="form-item">
                      <div className="form-select">
                        <label htmlFor="account-country">Ölkə</label>{" "}
                        <select id="account-country" name="account_country">
                          <option value={0}>Yaşadığınız ölkəni seçin</option>
                          <option value={1} selected>
                            Azərbaycan
                          </option>
                        </select>
                        <svg className="form-select-icon icon-small-arrow">
                          <use xlinkHref="#svg-small-arrow" />
                        </svg>
                      </div>
                    </div>
                    <div className="form-item birth-input">
                      <div className="form-input small">
                        <input
                          onFocus={(e) => {
                            activeInp(e);
                          }}
                          onBlur={(e) => {
                            passiveInp(e);
                          }}
                          type="date"
                          id="account-full-name"
                          name="account_full_name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-row split">
                    <div className="form-item">
                      <div className="form-select">
                        <label htmlFor="account-region">Şəhər</label>{" "}
                        <select id="account-region" name="account_region">
                          <option value={0}>Yaşadığınız şəhəri seçin</option>
                          <option value={1} selected>
                            Bakı
                          </option>
                          <option value={1} selected>
                            Masallı
                          </option>
                        </select>
                        <svg className="form-select-icon icon-small-arrow">
                          <use xlinkHref="#svg-small-arrow" />
                        </svg>
                      </div>
                    </div>
                    <div className="form-item">
                      <div className="form-input small">
                        <label htmlFor="account-full-name">
                          Şəxsiyyət vəsiqəsinin fin kodu
                        </label>
                        <input
                          onFocus={(e) => {
                            activeInp(e);
                          }}
                          onBlur={(e) => {
                            passiveInp(e);
                          }}
                          type="text"
                          id="account-full-name"
                          name="account_full_name"
                        />
                      </div>
                    </div>
                    <div className="form-item">
                      <div className="form-input small">
                        <label htmlFor="account-full-name">PSN ID</label>
                        <input
                          onFocus={(e) => {
                            activeInp(e);
                          }}
                          onBlur={(e) => {
                            passiveInp(e);
                          }}
                          type="text"
                          id="account-full-name"
                          name="account_full_name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-row split">
                    <div className="form-item">
                      <div className="form-input small">
                        <label htmlFor="account-full-name">XBOX ID</label>{" "}
                        <input
                          onFocus={(e) => {
                            activeInp(e);
                          }}
                          onBlur={(e) => {
                            passiveInp(e);
                          }}
                          type="text"
                          id="account-full-name"
                          name="account_full_name"
                        />
                      </div>
                    </div>
                    <div className="form-item">
                      <div className="form-input small">
                        <label htmlFor="account-full-name">
                          Origin İstifadəçi adınız
                        </label>
                        <input
                          onFocus={(e) => {
                            activeInp(e);
                          }}
                          onBlur={(e) => {
                            passiveInp(e);
                          }}
                          type="text"
                          id="account-full-name"
                          name="account_full_name"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="widget-box">
              <p className="widget-box-title">Əlaqə məlumatlarınız</p>
              <div className="widget-box-content">
                <form className="form">
                  <div className="form-row split">
                    <div className="form-item">
                      <div className="form-input small">
                        <label htmlFor="account-recovery-email">
                          E-poçt adresiniz
                        </label>
                        <input
                          onFocus={(e) => {
                            activeInp(e);
                          }}
                          onBlur={(e) => {
                            passiveInp(e);
                          }}
                          type="text"
                          id="account-recovery-email"
                          name="account_recovery_email"
                        />
                      </div>
                    </div>
                    <div className="form-item">
                      <div className="form-input small">
                        <label htmlFor="account-recovery-phone">
                          Mobil nömrəniz
                        </label>
                        <input
                          onFocus={(e) => {
                            activeInp(e);
                          }}
                          onBlur={(e) => {
                            passiveInp(e);
                          }}
                          type="text"
                          id="account-recovery-phone"
                          name="account_recovery_phone"
                        />
                      </div>
                    </div>
                    <div className="form-item">
                      <div className="form-input small">
                        <label htmlFor="account-recovery-phone">
                          İkinci əlaqə nömrəniz
                        </label>
                        <input
                          onFocus={(e) => {
                            activeInp(e);
                          }}
                          onBlur={(e) => {
                            passiveInp(e);
                          }}
                          type="text"
                          id="account-recovery-phone"
                          name="account_recovery_phone"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="widget-box">
              <p className="widget-box-title">Sosial Media Məlumatlarınız</p>
              <div className="widget-box-content">
                <form className="form">
                  <div className="form-row split">
                    <div className="form-item">
                      <div className="form-input small">
                        <label htmlFor="account-recovery-email">
                          Facebook linkiniz
                        </label>
                        <input
                          onFocus={(e) => {
                            activeInp(e);
                          }}
                          onBlur={(e) => {
                            passiveInp(e);
                          }}
                          type="text"
                          id="account-recovery-email"
                          name="account_recovery_email"
                        />
                      </div>
                    </div>
                    <div className="form-item">
                      <div className="form-input small">
                        <label htmlFor="account-recovery-phone">
                          Instagram linkiniz
                        </label>
                        <input
                          onFocus={(e) => {
                            activeInp(e);
                          }}
                          onBlur={(e) => {
                            passiveInp(e);
                          }}
                          type="text"
                          id="account-recovery-phone"
                          name="account_recovery_phone"
                        />
                      </div>
                    </div>
                    <div className="form-item">
                      <div className="form-input small">
                        <label htmlFor="account-recovery-phone">
                          Twitter linkiniz
                        </label>
                        <input
                          onFocus={(e) => {
                            activeInp(e);
                          }}
                          onBlur={(e) => {
                            passiveInp(e);
                          }}
                          type="text"
                          id="account-recovery-phone"
                          name="account_recovery_phone"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-row split">
                    <div className="form-item">
                      <div className="form-input small">
                        <label htmlFor="account-recovery-email">
                          Twitch kanalınızın linki
                        </label>
                        <input
                          onFocus={(e) => {
                            activeInp(e);
                          }}
                          onBlur={(e) => {
                            passiveInp(e);
                          }}
                          type="text"
                          id="account-recovery-email"
                          name="account_recovery_email"
                        />
                      </div>
                    </div>
                    <div className="form-item">
                      <div className="form-input small">
                        <label htmlFor="account-recovery-phone">
                          Youtube kanalınızın linki
                        </label>
                        <input
                          onFocus={(e) => {
                            activeInp(e);
                          }}
                          onBlur={(e) => {
                            passiveInp(e);
                          }}
                          type="text"
                          id="account-recovery-phone"
                          name="account_recovery_phone"
                        />
                      </div>
                    </div>
                    <div className="form-item">
                      <div className="form-input small">
                        <label htmlFor="account-recovery-phone">
                          Linkedin linkiniz
                        </label>
                        <input
                          onFocus={(e) => {
                            activeInp(e);
                          }}
                          onBlur={(e) => {
                            passiveInp(e);
                          }}
                          type="text"
                          id="account-recovery-phone"
                          name="account_recovery_phone"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="widget-box">
              <p className="widget-box-title">Şifrə məlumatlarınız</p>
              <div className="widget-box-content">
                <form className="form">
                  <div className="form-row split">
                    <div className="form-item">
                      <div className="form-input small">
                        <label htmlFor="account-recovery-email">
                          Hazırki şifrəniz
                        </label>
                        <input
                          onFocus={(e) => {
                            activeInp(e);
                          }}
                          onBlur={(e) => {
                            passiveInp(e);
                          }}
                          type="Password"
                          id="account-recovery-email"
                          name="account_recovery_email"
                        />
                      </div>
                    </div>
                    <div className="form-item">
                      <div className="form-input small">
                        <label htmlFor="account-recovery-phone">
                          Yeni şifrəniz
                        </label>
                        <input
                          onFocus={(e) => {
                            activeInp(e);
                          }}
                          onBlur={(e) => {
                            passiveInp(e);
                          }}
                          type="Password"
                          id="account-recovery-phone"
                          name="account_recovery_phone"
                        />
                      </div>
                    </div>
                    <div className="form-item">
                      <div className="form-input small">
                        <label htmlFor="account-recovery-phone">
                          Yeni şifrənin təkrarı
                        </label>
                        <input
                          onFocus={(e) => {
                            activeInp(e);
                          }}
                          onBlur={(e) => {
                            passiveInp(e);
                          }}
                          type="Password"
                          id="account-recovery-phone"
                          name="account_recovery_phone"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
