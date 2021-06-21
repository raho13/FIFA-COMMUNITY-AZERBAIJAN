import React, { useState, useEffect } from "react";

export default function Input({ label, type, method, value }) {
  useEffect(() => {
    if (value) {
      setdivclass("form-input small active");
      setinpValue(value);
    }
  });
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
          value={inpValue}
        />
      </div>
    );
  }
}
