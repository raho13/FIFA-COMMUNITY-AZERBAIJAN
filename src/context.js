import React, { createContext, useState } from "react";
export const menuContext = createContext();

const Menuprovider = (props) => {
  const [menuVisible, setmenuVisible] = useState(false);
  const [MmenuVisible, setMmenuVisible] = useState(false);
  const [msgWidget, setmsgWidget] = useState(false);
  const [popup, setpopup] = useState({ vis: false });
  return (
    <menuContext.Provider
      value={{
        menuVisible,
        setmenuVisible,
        MmenuVisible,
        setMmenuVisible,
        msgWidget,
        setmsgWidget,
        popup,
        setpopup,
      }}
    >
      {props.children}
    </menuContext.Provider>
  );
};
export default Menuprovider;
