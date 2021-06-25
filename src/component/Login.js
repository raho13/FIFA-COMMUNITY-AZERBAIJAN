import React, { useState } from "react";
import { ReactComponent as Logswitch } from "../icons/Logswitch.svg";
import { ReactComponent as Loginicn } from "../icons/Add-friend.svg";
import axios from "axios";
import { useRecoilState } from "recoil";
import { isLoged } from "../Atoms/global";
import Input from "./Input";
export default function Login({ type }) {
  const [isLogin, setisLogin] = useRecoilState(isLoged);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const Login = () => {
    axios
      .post("login", {
        email: email,
        password: password,
      })
      .then(function (res) {
        localStorage.setItem("fut.az", res.data.data);
        document.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (type === "web") {
    return (
      <div className="header-actions logvis">
        <form className="login-form">
          <div className="form-row split" id="logcnt">
            <div className="form-item">
              <div className="form-input dark">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="form-item">
              <div className="form-input dark">
                <input
                  type="password"
                  value={password}
                  placeholder="Your Password"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="entrybtns">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  Login(e);
                }}
                className="button primary with-only-icon"
              >
                <Logswitch className="icon-login" />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  console.log((window.location.pathname = "register"));
                }}
                className="button primary with-only-icon"
              >
                <Loginicn className="icon-login" />
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="widget-box mobile-login">
        <div className="widget-box-content">
          <form className="form">
            <div className="form-row split">
              <div className="form-item">
                <Input label="E-mail" />
              </div>
              <div className="form-item">
                <Input label="Şifrəniz" type="psw" />
              </div>
              <div className="entrybtns">
                <button class="button primary with-only-icon">
                  <Logswitch className="icon-login" />
                </button>
                <button class="button primary with-only-icon">
                  <Logswitch className="icon-login" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
