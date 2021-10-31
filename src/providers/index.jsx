import React, { useState, useEffect, useContext, createContext } from "react";
export const Hooks = createContext();
const Index = (props) => {
  const [scroll, setScroll] = useState("");
  const [timer, setTimer] = useState(true);
  const [barMobile, setBarMobile] = useState(false);
  const value = {
    scroll,
    setScroll,
    timer,
    barMobile,
    setBarMobile,
    setTimer,
  };
  return <Hooks.Provider value={value}>{props.children}</Hooks.Provider>;
};

export default Index;
