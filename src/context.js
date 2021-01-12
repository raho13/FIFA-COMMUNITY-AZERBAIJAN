import React, { createContext, useState } from "react";
export const menuContext = createContext();

const Menuprovider = (props) => {
  const [menuVisible, setmenuVisible] = useState(false);
  const [MmenuVisible, setMmenuVisible] = useState(false);
  return (
    <menuContext.Provider
      value={{ menuVisible, setmenuVisible, MmenuVisible, setMmenuVisible }}
    >
      {props.children}
    </menuContext.Provider>
  );
};
export default Menuprovider;
