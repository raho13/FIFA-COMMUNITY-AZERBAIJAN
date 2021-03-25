import React, { useState } from "react";

export default function Input({ label }) {
  const [divclass, setdivclass] = useState("form-input small");
  return (
    <div className={divclass}>
      <label htmlFor="account-full-name">{label}</label>
      <input
        onFocus={() => {
          setdivclass("form-input small active");
        }}
        onBlur={() => {
          setdivclass("form-input small");
        }}
        type="text"
        id="account-full-name"
        name="account_full_name"
      />
    </div>
  );
}
