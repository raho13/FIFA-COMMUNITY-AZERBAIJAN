import React, { useState } from "react";
import Banner from "../component/Banner";
import bannerimg from "../img/banner/streams-icon.png";
import ProflinInfo from "../component/Accounthub/ProflinInfo";
import Userimg from "../img/user-icon.png";
import convert from "../img/cover-photo.png";
import Avatar from "../component/Avatar";
import Input from "../component/Input";

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
            <div id="jjk" className="account-info-set">
              <div className="account-logo log-first">
                <a className="user-avatar small no-outline online account-avatar">
                  <Avatar size={1} />
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
                  <h2 id="ghj">1275 AZN</h2>
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
                      <Input label="Ad" />
                    </div>
                    <div className="form-item">
                      <Input label="Soyad" />
                    </div>
                    <div className="form-item">
                      <Input label="Ata adı" />
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

                    <div className="form-item inpitems1">
                      <div className="form-item">
                        <div className="form-select">
                          <label htmlFor="account-country">Ölkə</label>
                          <select id="account-country" name="account_country">
                            <option value={0}>Yaşadığınız ölkəni seçin</option>
                            <option value={1} selected>
                              Azərbaycan
                            </option>
                          </select>
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

                    <div className="form-item inpitems1">
                      <div className="form-item">
                        <div className="form-select">
                          <label htmlFor="account-region">Şəhər</label>
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
                        <Input label=" Şəxsiyyət vəsiqəsinin fin kodu" />
                      </div>
                    </div>
                  </div>

                  <div className="form-row split">
                    <div className="form-item">
                      <Input label="PSN ID" />
                    </div>
                    <div className="form-item">
                      <Input label="XBOX ID" />
                    </div>
                    <div className="form-item">
                      <Input label="  Origin İstifadəçi adınız" />
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
                      <Input label=" E-poçt adresiniz" />
                    </div>
                    <div className="form-item">
                      <Input label="Mobil nömrəniz" />
                    </div>
                    <div className="form-item">
                      <Input label="İkinci əlaqə nömrəniz" />
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
                      <Input label=" Facebook linkiniz" />
                    </div>
                    <div className="form-item">
                      <Input label=" Instagram linkiniz" />
                    </div>
                    <div className="form-item">
                      <Input label="Twitter linkiniz" />
                    </div>
                  </div>
                  <div className="form-row split">
                    <div className="form-item">
                      <Input label="Twitch kanalınızın linki" />
                    </div>
                    <div className="form-item">
                      <Input label=" Youtube kanalınızın linki" />
                    </div>
                    <div className="form-item">
                      <Input label="Linkedin linkiniz" />
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
                      <Input label=" Hazırki şifrəniz" />
                    </div>
                    <div className="form-item">
                      <Input label="Yeni şifrəniz" />
                    </div>
                    <div className="form-item">
                      <Input label="Yeni şifrənin təkrarı" />
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
