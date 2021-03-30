import React, { useState, useEffect } from "react";
import Checkbox from "../component/Checkbox";
import Input from "../component/Input";
import img from "../img/landing/rocket.png";
export default function Register() {
  const [PlatformOps, setPlatformOps] = useState(0);
  const [CountryOps, setCountryOps] = useState(0);
  // useEffect(() => {
  //   console.log(PlatformOps);
  // });
  const Handleinput = (i) => {
    if (i == 3) {
      return <Input label="Xbox ID" />;
    } else if (i == 2) {
      return <Input label="PSN ID" />;
    } else {
      return <Input label="Orign ID" />;
    }
  };
  return (
    <div className="landing">
      <div className="landing-form">
        <div className="form-box login-register-form-element">
          <img className="form-box-decoration" src={img} alt="rocket" />
          <h2 className="form-box-title">Hesab yaradın!</h2>
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
                <div className="form-select">
                  <label htmlFor="account-country">Ölkə</label>
                  <select
                    onChange={(e) => {
                      setCountryOps(e.target.value);
                    }}
                    id="account-country"
                    name="account_country"
                  >
                    <option selected value={0}>
                      Yaşadığınız ölkəni seçin
                    </option>
                    <option value={1}>Azərbaycan</option>
                    <option value={2}>Türkiyə</option>
                  </select>
                </div>
              </div>
              <div className="form-item">
                <div className="form-select">
                  <label htmlFor="account-country">Platforma</label>
                  <select
                    onChange={(e) => {
                      setPlatformOps(e.target.value);
                    }}
                    id="account-country"
                    name="account_country"
                  >
                    <option value={0} selected>
                      Platforma
                    </option>
                    <option value={1}>PC</option>
                    <option value={2}>Playstation</option>
                    <option value={3}>Xbox</option>
                  </select>
                </div>
              </div>
              <div className="form-item">{Handleinput(PlatformOps)}</div>
            </div>
            <div className="form-row split">
              <div className="form-item">
                <Input label="E-mail" />
              </div>
              <div className="form-item">
                <Input label="Şifrə" />
              </div>
              <div className="form-item">
                <Input label="Şifrənin təkrarı" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-item">
                <Checkbox parm="text" id="test" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-item">
                <button className="button medium primary">
                  Qeydiyyatdan keç
                </button>
              </div>
            </div>
          </form>
          <p className="form-text">
            Burada sizin reklamınız ola bilərdi)))
            <a href="#"> bizimlə əlaqə</a>!
          </p>
        </div>
      </div>
    </div>
  );
}
