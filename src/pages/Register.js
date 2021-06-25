import React, { useState, useContext, useEffect } from "react";
import Checkbox from "../component/Checkbox";
import Input from "../component/Input";
import Joi from "joi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRecoilState } from "recoil";
import { isLoged } from "../Atoms/global";
import img from "../img/landing/rocket.png";
export default function Register() {
  const [isLogin, setisLogin] = useRecoilState(isLoged);
  const [PlatformOps, setPlatformOps] = useState(0);
  const [user, setuser] = useState({
    name: "",
    surname: "",
    father_name: "",
    country: "",
    platform: "",
    platform_id: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const schema = Joi.object({
    name: Joi.string().min(1).max(255).required().messages({
      "string.base": `ad should be a type of 'text'`,
      "string.empty": `Ad bölməsi boş qala bilməz`,
      "string.min": `Ad minumum {#limit} simvol olmalıdır`,
      "string.max": `Ad maximum {#limit} simvol olmalıdır`,
      "any.required": `username" is a required field`,
    }),
    surname: Joi.string().min(1).max(255).required().messages({
      "string.base": `Soyad should be a type of 'text'`,
      "string.empty": `Soyad bölməsi boş qala bilməz`,
      "string.min": `Soyad minumum {#limit} simvol olmalıdır`,
      "string.max": `Soyad maximum {#limit} simvol olmalıdır`,
      "any.required": `surname is a required field`,
    }),
    father_name: Joi.string().min(1).max(255).required().messages({
      "string.base": `Ata adı should be a type of 'text'`,
      "string.empty": `Ata adı bölməsi boş qala bilməz`,
      "string.min": `Ata adı minumum {#limit} simvol olmalıdır`,
      "string.max": `Ata adı maximum {#limit} simvol olmalıdır`,
      "any.required": `"father_name is a required field`,
    }),
    country: Joi.string().min(1).max(255).required().messages({
      "string.base": `Ölkə should be a type of 'text'`,
      "string.empty": `Ölkə bölməsi boş qala bilməz`,
      "string.min": `Ölkə minumum {#limit} simvol olmalıdır`,
      "string.max": `Ölkə maximum {#limit} simvol olmalıdır`,
      "any.required": `Ölkə is a required field`,
    }),
    platform: Joi.string().min(1).max(255).required().messages({
      "string.base": `platform should be a type of 'text'`,
      "string.empty": `platform bölməsi boş qala bilməz`,
      "string.min": `platform minumum {#limit} simvol olmalıdır`,
      "string.max": `platform maximum {#limit} simvol olmalıdır`,
      "any.required": `platform is a required field`,
    }),
    platform_id: Joi.string().min(1).max(255).required().messages({
      "string.base": `platform-id bölməsi boş qala bilməz`,
      "string.empty": `platform-id bölməsi boş qala bilməz`,
      "string.min": "platform-id bölməsi boş qala bilməz",
      "any.required": `platform-id is a required field`,
    }),
    email: Joi.string()
      .required()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net", "ru"] },
      })
      .messages({
        "email.base": `email should be axx type of 'text'`,
        "string.empty": `email bölməsi boş qala bilməz`,
        "string.min": `email minumum {#limit} simvol olmalıdır`,
        "string.max": `email" maximum {#limit} simvol olmalıdır`,
        "any.required": `email" is a required field`,
        "string.email": `email standartlara uğun deyil`,
      }),
    password: Joi.string()
      .min(8)
      .max(255)
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required()
      .messages({
        "string.base": `Şifrə should be a type of 'text'`,
        "string.empty": `Şifrə bölməsi boş qala bilməz`,
        "string.min": `Şifrə minimm {#limit} simvoldan ibarət olmalıdır`,
        "string.max": `Şifrə maksimum {#limit} simvol olmalıdır`,
        "any.required": `password is a required field`,
      }),
    password_confirmation: Joi.any()
      .valid(Joi.ref("password"))
      .required()
      .messages({
        "string.base": `Şifrə təkrarı" should be a type of 'text'`,
        "string.empty": `"Şifrə təkrarı" bölməsi boş qala bilməz`,
        "string.min": `Şifrə təkrarı" minumum {#limit} simvol olmalıdır`,
        "string.max": `Şifrə təkrarı" maximum {#limit} simvol olmalıdır`,
        "string.questionHere": "Şifrələr eyni deyil",
        "any.required": `"password_confirmation" is a required field`,
        "any.only": "Şifrələr uyğun deyil",
      }),
  });

  const notify = (b) => {
    toast.error(b, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const ValidateForm = () => {
    const myval = schema.validate(user);
    if (myval.error) {
      notify(myval.error.details[0].message);
    } else {
      axios
        .post("register", {
          name: user.name,
          surname: user.surname,
          father_name: user.father_name,
          country: user.country,
          platform: user.platform,
          platform_id: user.platform_id,
          email: user.email,
          password: user.password,
          password_confirmation: user.password_confirmation,
        })
        .then(function (res) {
          localStorage.setItem("fut.az", res.data.data);
          setisLogin(true);
          window.location = "/";
        })
        .catch(function (err) {
          console.log(err);
          if (err.response.status === 422) {
            notify("bu mail artiq istifadə olunub");
          }
        });
    }
  };
  const Handleinput = (i) => {
    if (i == "xbox") {
      return (
        <Input
          label="Xbox ID"
          method={(e) => {
            setuser({ ...user, platform_id: e });
          }}
        />
      );
    } else if (i == "playstation") {
      return (
        <Input
          label="PSN ID"
          method={(e) => {
            setuser({ ...user, platform_id: e });
          }}
        />
      );
    } else {
      return (
        <Input
          label="Orign ID"
          method={(e) => {
            setuser({ ...user, platform_id: e });
          }}
        />
      );
    }
  };
  return (
    <div className="landing">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="landing-form">
        <div className="form-box login-register-form-element">
          <img className="form-box-decoration" src={img} alt="rocket" />
          <h2 className="form-box-title">Hesab yaradın!</h2>
          <form className="form">
            <div className="form-row split">
              <div className="form-item">
                <Input
                  label="Ad"
                  method={(e) => setuser({ ...user, name: e })}
                />
              </div>
              <div className="form-item">
                <Input
                  label="Soyad"
                  method={(e) => setuser({ ...user, surname: e })}
                />
              </div>
              <div className="form-item">
                <Input
                  label="Ata adı"
                  method={(e) => setuser({ ...user, father_name: e })}
                />
              </div>
            </div>
            <div className="form-row split">
              <div className="form-item">
                <div className="form-select">
                  <label htmlFor="account-country">Ölkə</label>
                  <select
                    onChange={(e) => {
                      setuser({ ...user, country: e.target.value });
                    }}
                    id="account-country"
                  >
                    <option value="" selected>
                      Yaşadığınız ölkəni seçin
                    </option>
                    <option value="Azərbaycan">Azərbaycan</option>
                    <option value="Türkiyə">Türkiyə</option>
                  </select>
                </div>
              </div>
              <div className="form-item">
                <div className="form-select">
                  <label htmlFor="account-country">Platforma</label>
                  <select
                    onChange={(e) => {
                      setPlatformOps(e.target.value);
                      setuser({ ...user, platform: e.target.value });
                    }}
                  >
                    <option selected value="">
                      Platforma
                    </option>
                    <option value="pc">PC</option>
                    <option value="playstation">Playstation</option>
                    <option value="xbox">Xbox</option>
                  </select>
                </div>
              </div>
              <div className="form-item">{Handleinput(PlatformOps)}</div>
            </div>
            <div className="form-row split">
              <div className="form-item">
                <Input
                  label="E-mail"
                  method={(e) => setuser({ ...user, email: e })}
                />
              </div>
              <div className="form-item">
                <Input
                  label="Şifrə"
                  method={(e) => setuser({ ...user, password: e })}
                  type={1}
                />
              </div>
              <div className="form-item">
                <Input
                  label="Şifrənin təkrarı"
                  method={(e) => setuser({ ...user, password_confirmation: e })}
                  type={1}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-item">
                <Checkbox parm="text" id="test" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-item">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    ValidateForm();
                  }}
                  className="button medium primary"
                >
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
