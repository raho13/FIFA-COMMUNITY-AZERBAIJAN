import React, { useState } from "react";

export default function Input({ label, type, method, num }) {
  const handleMethod = (e) => {
    if (method) {
      method(e.target.value);
    }
  };
  const [divclass, setdivclass] = useState("form-input small");
  const [inpValue, setinpValue] = useState("");
  if (type) {
    return (
      <div className={divclass}>
        <label htmlFor="account-full-name">{label}</label>
        <input
          maxlength="255"
          autoComplete="off"
          onChange={(e) => {
            setinpValue(e.target.value);
            handleMethod(e);
          }}
          onFocus={() => {
            setdivclass("form-input small active");
          }}
          onBlur={() => {
            if (inpValue.length === 0) {
              setdivclass("form-input small");
            }
          }}
          type="password"
          id="account-full-name"
          value={inpValue}
        />
      </div>
    );
  } else if (num) {
    return (
      <div className={divclass}>
        <label htmlFor="account-full-name">{label}</label>
        <input
          maxlength="255"
          autoComplete="off"
          onChange={(e) => {
            if (Number(e.target.value || e.target.value === "")) {
              setinpValue(e.target.value);
              handleMethod(e);
            }
          }}
          onFocus={() => {
            setdivclass("form-input small active");
          }}
          onBlur={() => {
            if (inpValue.length === 0) {
              setdivclass("form-input small");
            }
          }}
          type="text"
          id="account-full-name"
          value={inpValue}
        />
      </div>
    );
  } else {
    return (
      <div className={divclass}>
        <label htmlFor="account-full-name">{label}</label>
        <input
          maxlength="255"
          autoComplete="off"
          onChange={(e) => {
            setinpValue(e.target.value);
            handleMethod(e);
          }}
          onFocus={() => {
            setdivclass("form-input small active");
          }}
          onBlur={() => {
            if (inpValue.length === 0) {
              setdivclass("form-input small");
            }
          }}
          type="text"
          id="account-full-name"
          value={inpValue}
        />
      </div>
    );
  }
}
