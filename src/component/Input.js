import React, { useState } from "react";

export default function Input({ label, type }) {
  const [divclass, setdivclass] = useState("form-input small");
  const [inpValue, setinpValue] = useState("");
  if (type) {
    return (
      <div className={divclass}>
        <label htmlFor="account-full-name">{label}</label>
        <input
          autoComplete="off"
          onChange={(e) => {
            setinpValue(e.target.value);
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
          name="account_full_name"
          value={inpValue}
        />
      </div>
    );
  } else {
    return (
      <div className={divclass}>
        <label htmlFor="account-full-name">{label}</label>
        <input
          autoComplete="off"
          onChange={(e) => {
            setinpValue(e.target.value);
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
          name="account_full_name"
          value={inpValue}
        />
      </div>
    );
  }
}
