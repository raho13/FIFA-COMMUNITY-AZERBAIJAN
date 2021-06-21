import React, { useState, useEffect } from "react";
import Banner from "../component/Banner";
import bannerimg from "../img/banner/streams-icon.png";
import ProflinInfo from "../component/Accounthub/ProflinInfo";
import Userimg from "../img/user-icon.png";
import convert from "../img/cover-photo.png";
import Avatar from "../component/Avatar";
import Input from "../component/Input";
import axios from "axios";

export default function AccountHub() {
  const [arealable, setarealable] = useState(false);
  const [countries, setcountries] = useState([]);
  const [user, setuser] = useState({
    name: "",
    email: "",
    surname: "",
    father_name: "",
    country: "",
    city: "",
    about: "",
    birth: "",
    city: "",
    country: "",
    cover_photo: "",
    facebook_url: "",
    father_name: "",
    instagram_url: "",
    linkedin_url: "",
    mobile_number: "",
    name: "",
    origin_id: "",
    passport: "",
    profile_photo: "",
    psn_id: "",
    second_mobile_number: "",
    surname: "",
    twitch_url: "",
    twitter_url: "",
    xbox_id: "",
    youtube_url: "",
  });
  useEffect(() => {
    Fechdata();
    getCountries();
  }, []);

  const Fechdata = () => {
    axios
      .get("private_room")
      .then((res) => {
        setuser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getCountries = () => {
    axios
      .get("countries")
      .then((res) => {
        setcountries(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const editData = () => {
    axios
      .post("private_room", user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const area = () => {
    if (arealable || user.about) {
      return "form-input small active";
    } else {
      return "form-input small";
    }
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
          <ProflinInfo submit={editData} />
        </div>
        <div className="account-hub-content">
          <div className="grid-column content-main">
            <div id="jjk" className="account-info-set">
              <div className="account-logo log-first n">
                <a className="user-avatar small no-outline online account-avatar">
                  <Avatar size={1} />
                </a>
              </div>
              <div className="account-logo ml-2 n">
                <img src={Userimg} className="user-icon" />
                <div className="account-text">
                  <h1>Profil şəklini dəyiş</h1>
                  <p>Minimal ölçü 110x110px</p>
                </div>
              </div>
              <div className="account-logo ml-2 n">
                <img src={convert} className="user-icon" />
                <div className="account-text">
                  <h1>Kover şəklini dəyiş</h1>
                  <p>Minimal ölçü 1184x300px</p>
                </div>
              </div>
              <div className="account-logo ml-2 n">
                <div className="account-balance">
                  <h2 id="ghj">1275 AZN</h2>
                  <h1>Balansını artır</h1>
                  <p>FUT Community AZERBAIJAN balansı</p>
                </div>
              </div>
            </div>

            <div className="widget-box">
              <p
                className="widget-box-title"
                onClick={() => {
                  console.log(user);
                }}
              >
                Şəxsi Məlumatlarınız
              </p>
              <div className="widget-box-content">
                <form className="form">
                  <div className="form-row split">
                    <div className="form-item">
                      <Input
                        value={user.name}
                        label="Ad"
                        method={(e) => setuser({ ...user, name: e })}
                      />
                    </div>
                    <div className="form-item">
                      <Input
                        value={user.surname}
                        label="Soyad"
                        method={(e) => setuser({ ...user, surname: e })}
                      />
                    </div>
                    <div className="form-item">
                      <Input
                        value={user.father_name}
                        label="Ata adı"
                        method={(e) => setuser({ ...user, father_name: e })}
                      />
                    </div>
                  </div>

                  <div className="form-row split">
                    <div className="form-item">
                      <div className={area()}>
                        <label htmlFor="account-url-username">
                          Haqqınızda məlumat yazın...
                        </label>
                        <textarea
                          onChange={(e) =>
                            setuser({ ...user, about: e.target.value })
                          }
                          onFocus={() => {
                            setarealable(true);
                          }}
                          onBlur={() => {
                            setarealable(false);
                          }}
                          className="h-50"
                          defaultValue={user.about}
                        />
                      </div>
                    </div>

                    <div className="form-item inpitems1">
                      <div className="form-item">
                        <div className="form-select">
                          <label htmlFor="account-country">Ölkə</label>
                          <select
                            onChange={(e) => {
                              setuser({ ...user, country: e.target.value });
                            }}
                            id="account-country"
                          >
                            <option value={user.country} selected>
                              {user.country}
                            </option>
                            {!(countries === [])
                              ? countries.map((item) => {
                                  return (
                                    <option value={item.name}>
                                      {item.name}
                                    </option>
                                  );
                                })
                              : null}
                          </select>
                        </div>
                      </div>
                      <div className="form-item birth-input">
                        <div className="form-input small">
                          <input
                            value={user.birth}
                            onChange={(e) => {
                              setuser({ ...user, birth: e.target.value });
                            }}
                            type="date"
                            id="account-full-name"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-item inpitems1">
                      <div className="form-item">
                        <Input
                          value={user.city}
                          method={(e) => setuser({ ...user, city: e })}
                          label="Şəhər"
                        />
                      </div>
                      <div className="form-item">
                        <Input label=" Şəxsiyyət vəsiqəsinin fin kodu" />
                      </div>
                    </div>
                  </div>

                  <div className="form-row split">
                    <div className="form-item">
                      <Input
                        value={user.psn_id}
                        method={(e) => setuser({ ...user, psn_id: e })}
                        label="PSN ID"
                      />
                    </div>
                    <div className="form-item">
                      <Input
                        value={user.xbox_id}
                        method={(e) => setuser({ ...user, xbox_id: e })}
                        label="XBOX ID"
                      />
                    </div>
                    <div className="form-item">
                      <Input
                        value={user.origin_id}
                        method={(e) => setuser({ ...user, origin_id: e })}
                        label="Origin İstifadəçi adınız"
                      />
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
                      <Input
                        label="E-poçt adresiniz"
                        value={user.email}
                        method={(e) => setuser({ ...user, email: e })}
                      />
                    </div>
                    <div className="form-item">
                      <Input
                        value={user.mobile_number}
                        label="Mobil nömrəniz"
                        method={(e) => setuser({ ...user, mobile_number: e })}
                      />
                    </div>
                    <div className="form-item">
                      <Input
                        value={user.second_mobile_number}
                        label="İkinci əlaqə nömrəniz"
                        method={(e) =>
                          setuser({ ...user, second_mobile_number: e })
                        }
                      />
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
                      <Input
                        value={user.facebook_url}
                        label=" Facebook linkiniz"
                        method={(e) => setuser({ ...user, facebook_url: e })}
                      />
                    </div>
                    <div className="form-item">
                      <Input
                        value={user.instagram_url}
                        label=" Instagram linkiniz"
                        method={(e) => setuser({ ...user, instagram_url: e })}
                      />
                    </div>
                    <div className="form-item">
                      <Input
                        value={user.twitter_url}
                        label="Twitter linkiniz"
                        method={(e) => setuser({ ...user, twitter_url: e })}
                      />
                    </div>
                  </div>
                  <div className="form-row split">
                    <div className="form-item">
                      <Input
                        value={user.twitch_url}
                        label="Twitch kanalınızın linki"
                        method={(e) => setuser({ ...user, twitch_url: e })}
                      />
                    </div>
                    <div className="form-item">
                      <Input
                        value={user.youtube_url}
                        label=" Youtube kanalınızın linki"
                        method={(e) => setuser({ ...user, youtube_url: e })}
                      />
                    </div>
                    <div className="form-item">
                      <Input
                        value={user.linkedin_url}
                        label="Linkedin linkiniz"
                        method={(e) => setuser({ ...user, linkedin_url: e })}
                      />
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
